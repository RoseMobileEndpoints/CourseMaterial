import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


/**
 * A unit of material. Contains tasks (lessons and activities).
 * 
 * @author Matt Boutell. Created Jun 6, 2014.
 */
public class Unit {
	private String lessonTemplateName = "lessonTemplate.html";
	private String activityTemplateName = "activityTemplate.html";
	private String unitContents;
	private String lessonTemplate;
	private String activityTemplate;

	private String title;
	private String outputLink;
	private String videoLink;
	private String slideLink;
	private List<Task> tasks;

	/**
	 * Creates a unit from the given config file using default template files.
	 * 
	 * @param unitName
	 * 
	 * @param lessonTemplateName
	 * @throws FileNotFoundException
	 */
	public Unit(String unitName) throws FileNotFoundException {

		lessonTemplate = fileContentsFromName(lessonTemplateName);
		activityTemplate = fileContentsFromName(activityTemplateName);

		tasks = new ArrayList<Task>();
		parse(unitName);
		replaceVariables();
	}

	private void parse(String unitName) throws FileNotFoundException {
		unitContents = fileContentsFromName(unitName);
		Scanner sc = new Scanner(unitContents);
		String[] startingTokens = new String[] { "UNIT TITLE:",
				"LINK TO OUTPUT:", "LINK TO VIDEOS:", "LINK TO SLIDES:",
				"LESSON TITLE:", "LESSON VIDEO:", "CONTENT ABOVE",
				"CONTENT BELOW", "END", "ACTIVITY TITLE:" };

		int IN_UNIT = 0, IN_LESSON_CONTENT_ABOVE = 1, IN_LESSON_CONTENT_BELOW = 2, IN_ACTIVITY = 3;
		int state = IN_UNIT;

		int nLessonsRead = 0;
		Task currentTask = null;

		while (sc.hasNextLine()) {
			String line = sc.nextLine();
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
			default:
				if (state == IN_LESSON_CONTENT_ABOVE) {
					((Lesson) currentTask).appendContentAbove(line);
				} else if (state == IN_LESSON_CONTENT_BELOW) {
					((Lesson) currentTask).appendContentBelow(line);
				} else {
					System.out.println("Ignoring line: " + line);
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
		StringBuilder sb = new StringBuilder();
		Scanner scanner = new Scanner(new File(fileName));
		while (scanner.hasNextLine()) {
			String line = scanner.nextLine();
			sb.append(line);
			sb.append("\n");
		}
		scanner.close();
		return sb.toString();
	}

	/**
	 * TODO Put here a description of what this method does.
	 * 
	 */
	private void replaceVariables() {
		lessonTemplate = lessonTemplate.replace("$UNIT_TITLE", this.title);
		lessonTemplate = lessonTemplate.replace("$SLIDE_LINK", this.slideLink);
		lessonTemplate = lessonTemplate.replace("$VIDEO_LINK", this.videoLink);
		

		
		
		// TODO: Use output folder
		// Need to loop over lessons and activities.
        // $LESSON_CONTENT_ABOVE
        
		
		
	}

	/**
	 * Generates all the html files (lesson and activity) for this unit.
	 * 
	 * @throws FileNotFoundException
	 * 
	 */
	public void generateFiles() throws FileNotFoundException {

		System.out.println(this.toString());
		// Go to 
		// this.outputLink;
		// Make folder
		
		
		for (int i = 0; i < tasks.size(); i++) {
			Task task = tasks.get(i);
			
			String name = task.getFileName();
			String fullName = this.outputLink + "/" + name;
			System.out.println(fullName);
			PrintWriter pw = new PrintWriter(new File(fullName));
			pw.println(lessonTemplate);
			pw.close();
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

}
