import java.io.PrintWriter;
import java.util.List;

/**
 * A lesson.
 * 
 * @author Matt Boutell. Created Jun 6, 2014.
 */
public class Lesson extends Task {
	private String videoLink;
	private String contentAbove;
	private String contentBelow;

	/**
	 * Creates a lesson with the given unit and number.
	 * 
	 * @param unit
	 * @param number
	 */
	public Lesson(Unit unit, int number) {
		super(unit, number);
		contentAbove = "";
		contentBelow = "";
	}

	/**
	 * Sets the given lesson
	 * 
	 * @param videoLink
	 */
	public void setVideo(String videoLink) {
		this.videoLink = videoLink;
	}

	/**
	 * Adds a line to the contentAbove
	 * 
	 * @param line
	 */
	public void appendContentAbove(String line) {
		contentAbove += line + "\n";
	}

	/**
	 * Adds a line to the contentBelow.
	 * 
	 * @param line
	 */
	public void appendContentBelow(String line) {
		contentBelow += line + "\n";
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("Lesson " + this.getNumber() + "\n");
		sb.append("Title: " + this.getTitle() + "\n");
		sb.append("Video link: " + this.videoLink + "\n");
		sb.append("Contents above:\n" + this.contentAbove);
		sb.append("Contents below:\n" + this.contentBelow);
		return sb.toString();
	}

	@Override
	public String getFileName() {
		return "lesson" + getNumber() + ".html";
	}

	@Override
	public void generateFile(PrintWriter pw) {
		String template = this.getUnit().getLessonTemplate();
		template = template.replace("$LESSON_TITLE", this.getTitle());
		template = template.replace("$LESSON_VIDEO_LINK", this.videoLink);
		template = template.replace("$LESSON_CONTENT_ABOVE", this.contentAbove);
		template = template.replace("$LESSON_CONTENT_BELOW", this.contentBelow);
		template = replaceNextAndPrevious(template);
		System.out.println("------------------------LESSON " + this.getNumber());
//		System.out.println(template);
		template = replaceNavBar(template);
//		System.out.println("------------------------LESSON " + this.getNumber() + " AFTER NAV SUB");
//		System.out.println(template);
		pw.print(template);

	}

	private String replaceNavBar(String template) {
		StringBuilder navBar = new StringBuilder();
		navBar.append("        <div class=\"gcb-nav\" id=\"gcb-nav-y\" role=\"navigation\">\n");
		navBar.append("          <ul>\n");

		String navBarBody = "";
		List<Task> tasks = this.getUnit().getTasks();
		for (int i = 0; i < tasks.size(); i++) {
			// CONSIDER: Replace this hack with implementations by Lesson and Activity.
			// If activity, replace $ACT_HOLDER with Act, $ACT_HOLDER.
			// If lesson, replace $ACT_HOLDER (if there) with "", then add LH, $ACT_HOLDER, LE.
			if (tasks.get(i) instanceof Lesson) {
				navBarBody = navBarBody.replace("$ACTIVITY_HOLDER", ""); 
				navBarBody += "            <li class=\"active\">\n";
				navBarBody += "              <div class=\"gcb-lesson-title-with-progress\">\n";
				navBarBody += "                <a href=\"" + tasks.get(i).getFileName() + "\">" + tasks.get(i).getTitle() + "</a>\n";
				navBarBody += "              </div>\n";
				navBarBody += "              <ul>\n";
				navBarBody += "$ACTIVITY_HOLDER";
				navBarBody += "             </ul>\n";
				navBarBody += "           </li>\n";
			} else if (tasks.get(i) instanceof Activity) {
				String activityBody = "";
				activityBody += "                <li>\n";
				activityBody += "                  <div class=\"gcb-activity-title-with-progress\">\n";
				activityBody += "                    <a href=\"" + tasks.get(i).getFileName() + "\">Activity</a>\n";
				activityBody += "                  </div>\n";
				activityBody += "               </li>\n";
				activityBody += "$ACTIVITY_HOLDER";
				navBarBody = navBarBody.replace("$ACTIVITY_HOLDER", activityBody);
			}
		}
		navBar.append(navBarBody.replace("$ACTIVITY_HOLDER", "")); 
		navBar.append("           <!-- end of navbar elements -->\n");
		navBar.append("        </ul>\n");
		navBar.append("      </div>\n");
		navBar.append("");

//		System.out.println("------------------------LESSON " + this.getNumber() + " NAV BAR CONTENTS:");
//		System.out.println(navBar.toString());
//		System.out.println("$NAV_BAR found at " + template.indexOf("$NAV_BAR"));
		
		template = template.replace("$NAV_BAR", navBar.toString());
		return template;
	}

}
