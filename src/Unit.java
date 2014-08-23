import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import javax.activation.UnsupportedDataTypeException;

/**
 * A unit of material. Contains tasks (lessons and activities).
 * 
 * @author Matt Boutell. Created Jun 6, 2014.
 */
public class Unit {
	private String unitContents;
	private String lessonTemplate;
	private String activityTemplate;
	private String quizTemplate;

	private String title;
	private String outputLink;
	private String videoLink;

	private String slideLink;
	private List<Task> tasks;

	static final String VIDEO_TAG = "<iframe class=\"tscplayer_inline\" name=\"tsc_player\" src=\"$VIDEO_LINK/$LESSON_VIDEO_LINK\" scrolling=\"no\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";

	private static final int IN_UNIT = 0, IN_LESSON_CONTENT_ABOVE = 1,
			IN_LESSON_CONTENT_BELOW = 2, IN_ACTIVITY = 3;

	/**
	 * Creates a unit from the given config file using default template files.
	 * 
	 * @param unitFile
	 * @param dir
	 * @param outputFormat
	 * @throws FileNotFoundException
	 * @throws UnsupportedDataTypeException
	 */
	public Unit(File unitFile, String dir) throws FileNotFoundException,
			UnsupportedDataTypeException {
		// dir = "CourseMaterial/units/templates/";
		String ltName = Paths.get(dir + "lessonTemplate.html").toString();
		lessonTemplate = fileContentsFromName(ltName);

		String atName = Paths.get(dir + "activityTemplate.html").toString();
		activityTemplate = fileContentsFromName(atName);

		String qtName = Paths.get(dir + "activityQuizCopyright.txt").toString();
		quizTemplate = fileContentsFromName(qtName);

		tasks = new ArrayList<Task>();

		parse(unitFile);
		replaceUnitVariables();
	}

	private void parse(File unitFile) throws FileNotFoundException,
			UnsupportedDataTypeException {
		unitContents = fileContentsFromFile(unitFile);
		Scanner sc = new Scanner(unitContents);
		String[] startingTokens = new String[] { 
				"UNIT TITLE:",
				"LINK TO OUTPUT:", 
				"LINK TO VIDEOS:", 
				"LINK TO SLIDES:",
				"LESSON TITLE:", 
				"LESSON VIDEO:", 
				"CONTENT ABOVE",
				"CONTENT BELOW", 
				"END", 
				"ACTIVITY TITLE:", 
				"Q:", 
				"TYPE:" 
		};

		int state = IN_UNIT;

		int nLessonsRead = 0;
		Task currentTask = null;
		Question currentQuestion = null;
		String currentQuestionPrompt = null;

		int lineCount = 0;
		while (sc.hasNextLine()) {
			String line = sc.nextLine();
			lineCount++;
			String remainder = "";
			int tokenIdx = -1;
			for (int i = 0; i < startingTokens.length; i++) {
				String token = startingTokens[i];
				if (line.startsWith(token)) {
					remainder = line.substring(token.length()).trim();
					tokenIdx = i;
					break;
				}
			}
			switch (tokenIdx) {
			case 0:
				title = remainder;
				break;
			case 1:
				outputLink = remainder;
				break;
			case 2:
				videoLink = remainder;
				break;
			case 3:
				slideLink = remainder;
				break;
			case 4: // Lesson title
				if (currentTask != null) {
					System.out
							.println("Didn't find a closing end statement. Adding a task");
					tasks.add(currentTask);
				}
				nLessonsRead++;
				currentTask = new Lesson(this, nLessonsRead);
				currentTask.setTitle(remainder);
				break;
			case 5:
				((Lesson) currentTask).setVideo(remainder);
				break;
			case 6:
				state = IN_LESSON_CONTENT_ABOVE;
				break;
			case 7:
				state = IN_LESSON_CONTENT_BELOW;
				break;
			case 8:
				// end
				if (currentQuestion != null) {
					((Activity) currentTask).addQuestion(currentQuestion);
					currentQuestion = null;
				}
				tasks.add(currentTask);
				currentTask = null;
				state = IN_UNIT;
				break;
			case 9:
				// Activity
				currentTask = new Activity(this, nLessonsRead);
				currentTask.setTitle(remainder);
				state = IN_ACTIVITY;
				break;
			case 10:
				// Quiz text prompt
				// Save the last question if needed and start a new question.
				if (currentQuestion != null) {
					((Activity) currentTask).addQuestion(currentQuestion);
				}
				currentQuestionPrompt = remainder;
				break;
			case 11:
				// Quiz type.
				currentQuestion = Question.makeQuestion(remainder);
				currentQuestion.setPrompt(currentQuestionPrompt);
				break;

			default:
				if (state == IN_LESSON_CONTENT_ABOVE) {
					((Lesson) currentTask).appendContentAbove(line);
				} else if (state == IN_LESSON_CONTENT_BELOW) {
					((Lesson) currentTask).appendContentBelow(line);
				} else if (state == IN_ACTIVITY) {
					System.out.println("Read a choice on line " + lineCount
							+ ":" + line);
					currentQuestion.addQuestionChoice(line);
				} else {
					System.out.println("Ignoring line " + lineCount + ":"
							+ line);
				}
				break;
			}
		}
		if (currentTask != null) {
			System.out
					.println("Didn't find a closing end statement. Adding last task");
			tasks.add(currentTask);
		}
		sc.close();
	}

	private String fileContentsFromName(String fileName)
			throws FileNotFoundException {
		return fileContentsFromFile(new File(fileName));
	}

	private String fileContentsFromFile(File file) throws FileNotFoundException {
		StringBuilder sb = new StringBuilder();
		Scanner scanner = new Scanner(file);
		while (scanner.hasNextLine()) {
			String line = scanner.nextLine();
			sb.append(line);
			sb.append("\n");
		}
		scanner.close();
		return sb.toString();
	}

	// These pertain to the whole unit and affect each lesson in the same way.
	private void replaceUnitVariables() {
		lessonTemplate = lessonTemplate.replace("$UNIT_TITLE", this.title);
		lessonTemplate = lessonTemplate.replace("$SLIDE_LINK", this.slideLink);
		// Moved video link to lesson: if there is no video in a lesson, adding
		// this hurts it.
		activityTemplate = activityTemplate.replace("$UNIT_TITLE", this.title);
		activityTemplate = activityTemplate.replace("$SLIDE_LINK",
				this.slideLink);
	}

	/**
	 * Generates all the html files (lesson and activity) for this unit.
	 * 
	 * @param unitNumber
	 * 
	 * @throws IOException
	 * 
	 */
	public void generateFiles() throws IOException {

		System.out.println(this.toString());
		createOutputDirectory();

		for (int i = 0; i < tasks.size(); i++) {
			Task task = tasks.get(i);
			task.generateFile();
		}

	}

	/**
	 * Adds text to the two given CourseBuilder files for this unit.
	 * 
	 * @param cbUnitWriter
	 * @param cbLessonWriter
	 * @param unitNumber
	 * 
	 * @throws IOException
	 */
	public void generateCourseBuilderFiles(PrintWriter cbUnitWriter,
			PrintWriter cbLessonWriter, int unitNumber) throws IOException {

		// Handle coursebuilder outputFormat
		String s = String.format("%d,U,%d,%s,,TRUE", unitNumber, unitNumber,
				title);
		cbUnitWriter.println(s);

		for (int i = 0; i < tasks.size(); i++) {
			Task task = tasks.get(i);
			if (task.getClass() == Lesson.class) {
				Lesson lesson = (Lesson) task;
				Task nextTask = getNextTask(task);
				boolean hasQuiz =
						(nextTask != null && nextTask.getClass() == Activity.class);
				s = String.format(
						"%d,%s,%d,%s,%s,%s,%s,%s,%s",
						unitNumber,
						title,
						task.getNumber(),
						task.getTitle(),
						hasQuiz ? "yes" : "",
						hasQuiz ? nextTask.getTitle() : "",
						slideLink,
						"videoLink",
						lesson.getContentAboveWithoutNewlines());
				cbLessonWriter.println(s);
			}
		}
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("Title: " + this.title + "\n");
		sb.append("Output link: " + this.outputLink + "\n");
		sb.append("Video link: " + this.videoLink + "\n");
		sb.append("Slide link: " + this.slideLink + "\n");
		for (Task task : this.tasks) {
			sb.append(task.toString());
		}
		return sb.toString();
	}

	private void createOutputDirectory() throws IOException {

		Path p1 = Paths.get(this.outputLink);
		System.out.println(p1.toString());
		File outputDirectory = new File(p1.toString());

		if (outputDirectory.exists())
			return;
		if (!outputDirectory.mkdirs()) {
			throw new IOException("Unable to create output directory "
					+ outputDirectory);
		}
	}

	String getLessonTemplate() {
		return lessonTemplate;
	}

	String getActivityTemplate() {
		return activityTemplate;
	}

	String getQuizTemplate() {
		return quizTemplate;
	}

	Task getNextTask(Task task) {
		for (int i = 0; i < tasks.size(); i++) {
			if (tasks.get(i) == task && i < tasks.size() - 1) {
				return tasks.get(i + 1);
			}
		}
		return null;
	}

	Task getPreviousTask(Task task) {
		for (int i = 0; i < tasks.size(); i++) {
			if (tasks.get(i) == task && i > 0) {
				return tasks.get(i - 1);
			}
		}
		return null;
	}

	List<Task> getTasks() {
		return tasks;
	}

	public String getOutputLink() {
		return outputLink;
	}

	public String getVideoLink() {
		return this.videoLink;
	}
}
