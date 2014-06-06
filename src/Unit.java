import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * TODO Put here a description of what this class does.
 * 
 * @author boutell. Created Jun 6, 2014.
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
	 * @param lessonTemplateName
	 * @throws FileNotFoundException
	 */
	public Unit(String unitName) throws FileNotFoundException {
		tasks = new ArrayList<Task>();
		
		lessonTemplate = fileContentsFromName(lessonTemplateName);
		activityTemplate = fileContentsFromName(activityTemplateName);

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

		int IN_UNIT = 0, IN_LESSON_CONTENT_ABOVE = 1, IN_LESSON_CONTENT_BELOW = 2;
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
			if (state == IN_UNIT) {
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
					state = nLessonsRead++;
					currentTask = new Lesson(this, nLessonsRead);
					currentTask.setTitle(remainder);
					break;
				case 5:
					((Lesson)currentTask).setVideo(remainder);
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
					state = IN_UNIT;
				case 9:
					//Activity
					currentTask = new Activity(this, nLessonsRead);
					currentTask.setTitle(remainder);
					break;
				default:
					if (state == IN_LESSON_CONTENT_ABOVE) {
						((Lesson)currentTask).appendContentAbove(remainder);
					} else if (state == IN_LESSON_CONTENT_BELOW){
						((Lesson)currentTask).appendContentBelow(remainder);
					}
					
					System.out.println("Ignoring line: " + line);
					break;
				}
			}
		}
		sc.close();

	}

	private String fileContentsFromName(String fileName)
			throws FileNotFoundException {
		StringBuilder sb = new StringBuilder();
		Scanner scanner = new Scanner(new File(fileName));
		int count = 0;
		while (scanner.hasNextLine()) {
			String line = scanner.nextLine();
			count++;
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
		lessonTemplate = lessonTemplate.replace("$UNIT_TITLE",
				"Matts Unit Title");
	}

	/**
	 * Generates all the html files (lesson and activity) for this unit.
	 * 
	 * @throws FileNotFoundException
	 * 
	 */
	public void generateFiles() throws FileNotFoundException {
		PrintWriter pw = new PrintWriter(new File("lesson1.html"));
		pw.println(lessonTemplate);
		pw.close();
	}

}
