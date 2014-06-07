import java.io.PrintWriter;
import java.util.List;

/**
 * A lesson or activity.
 * 
 * @author Matt Boutell. Created Jun 6, 2014.
 */
public abstract class Task {
	private String title;
	private Unit unit;
	private int number;

	public abstract String getFileName();

	public Task(Unit unit, int number) {
		this.unit = unit;
		this.number = number;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTitle() {
		return title;
	}

	public void setUnit(Unit unit) {
		this.unit = unit;
	}

	public Unit getUnit() {
		return unit;
	}

	public int getNumber() {
		return this.number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public abstract void generateFile(PrintWriter pw);

	protected String replaceNextAndPrevious(String template) {
		Task previousTask = this.getUnit().getPreviousTask(this);
		String previousLink = "";
		if (previousTask != null) {
			previousLink = String.format("<a href=\""
					+ previousTask.getFileName() + "\"> Previous Page </a>");
		}
		template = template.replace("$PREVIOUS_LINK", previousLink);

		Task nextTask = this.getUnit().getNextTask(this);
		String nextLink = "";
		if (nextTask != null) {
			nextLink = String.format("<a href=\"" + nextTask.getFileName()
					+ "\"> Next Page </a>");
		}
		template = template.replace("$NEXT_LINK", nextLink);
		return template;
	}

	protected String replaceNavBar(String template) {
		StringBuilder navBar = new StringBuilder();
		navBar.append("        <div class=\"gcb-nav\" id=\"gcb-nav-y\" role=\"navigation\">\n");
		navBar.append("          <ul>\n");

		String navBarBody = "";
		List<Task> tasks = this.getUnit().getTasks();
		for (int i = 0; i < tasks.size(); i++) {
			// CONSIDER: Replace this hack with implementations by Lesson and
			// Activity.
			// If activity, replace $ACT_HOLDER with Act, $ACT_HOLDER.
			// If lesson, replace $ACT_HOLDER (if there) with "", then add LH,
			// $ACT_HOLDER, LE.
			if (tasks.get(i) instanceof Lesson) {
				navBarBody = navBarBody.replace("$ACTIVITY_HOLDER", "");
				navBarBody += "            <li";
				if (this == tasks.get(i)) {
					navBarBody += " class=\"active\"";
				}
				navBarBody += ">\n";
				navBarBody += "              <div class=\"gcb-lesson-title-with-progress\">\n";
				navBarBody += "                <a href=\""
						+ tasks.get(i).getFileName() + "\">"
						+ tasks.get(i).getTitle() + "</a>\n";
				navBarBody += "              </div>\n";
				navBarBody += "              <ul>\n";
				navBarBody += "$ACTIVITY_HOLDER";
				navBarBody += "             </ul>\n";
				navBarBody += "           </li>\n";
			} else if (tasks.get(i) instanceof Activity) {
				String activityBody = "";
				activityBody += "                <li";
				if (this == tasks.get(i)) {
					activityBody += " class=\"active\"";
				}
				activityBody += ">\n";

				activityBody += "                  <div class=\"gcb-activity-title-with-progress\">\n";
				activityBody += "                    <a href=\""
						+ tasks.get(i).getFileName() + "\">Activity</a>\n";
				activityBody += "                  </div>\n";
				activityBody += "               </li>\n";
				activityBody += "$ACTIVITY_HOLDER";
				navBarBody = navBarBody.replace("$ACTIVITY_HOLDER",
						activityBody);
			}
		}
		navBar.append(navBarBody.replace("$ACTIVITY_HOLDER", ""));
		navBar.append("           <!-- end of navbar elements -->\n");
		navBar.append("        </ul>\n");
		navBar.append("      </div>\n");
		navBar.append("");

		template = template.replace("$NAV_BAR", navBar.toString());
		return template;
	}
}
