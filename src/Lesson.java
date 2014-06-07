import java.io.PrintWriter;

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

		// TODO: Find next and previous
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
			nextLink = String.format("<a href=\""
					+ nextTask.getFileName() + "\"> Next Page </a>");
		}
		template = template.replace("$NEXT_LINK", nextLink);
		
		// System.out.println(getFileName() + ", prev:" + previousName +
		// ", next:" + nextName);

		pw.print(template);
	}
}
