import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.nio.file.Paths;

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
	public void generateFile() throws FileNotFoundException {
		String name = getFileName();
		String fullName = Paths
				.get(this.getUnit().getOutputLink() + "/" + name).toString();
		PrintWriter pw = new PrintWriter(new File(fullName));
		String template = this.getUnit().getLessonTemplate();
		
		template = template.replace("$LESSON_TITLE", this.getTitle());
		

		// Handle lessons with no activities.
		if (this.videoLink != null && this.videoLink.length() > 0) {
			// Add the video tag
			template = template.replace("$VIDEO_TAG", Unit.VIDEO_TAG);
			// From it, add the unit video base
			template = template.replace("$VIDEO_LINK", getUnit().getVideoLink());
			// From it, add the lesson video.
			template = template.replace("$LESSON_VIDEO_LINK", this.videoLink);
		} else {
			// If there is no video for this lesson, don't add the tag.
			template = template.replace("$VIDEO_TAG", "");
		}
		template = template.replace("$LESSON_CONTENT_ABOVE", this.contentAbove);
		template = template.replace("$LESSON_CONTENT_BELOW", this.contentBelow);
		template = replaceNextAndPrevious(template);
		System.out
				.println("------------------------LESSON " + this.getNumber());
		template = replaceNavBar(template);
		pw.print(template);
		pw.close();
	}

}
