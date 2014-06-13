import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.nio.file.Paths;
import java.util.ArrayList;

/**
 * An activity.
 * 
 * @author Matt Boutell. Created Jun 6, 2014.
 */
public class Activity extends Task {
	private ArrayList<Question> questions;

	/**
	 * Creates a lesson with the given unit and number.
	 * 
	 * @param unit
	 * @param number
	 */
	public Activity(Unit unit, int number) {
		super(unit, number);
		questions = new ArrayList<Question>();
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("Activity " + this.getNumber() + "\n");
		sb.append("Title: " + this.getTitle() + "\n");
		return sb.toString();
	}

	@Override
	public String getFileName() {
		return "activity" + getNumber() + ".html";
	}

	public String getJavaScriptFileName() {
		return "activity" + getNumber() + ".js";
	}

	@Override
	public void generateFile() throws FileNotFoundException {
		generateHtml();
		generateJavascript();
	}

	private void generateHtml() throws FileNotFoundException {
		String name = getFileName();
		String fullName = Paths
				.get(this.getUnit().getOutputLink() + "/" + name).toString();

		PrintWriter pw = new PrintWriter(new File(fullName));
		String template = this.getUnit().getActivityTemplate();
		template = template.replace("$ACTIVITY_TITLE", this.getTitle());
		template = template.replace("$QUIZ_JAVA_SCRIPT_FILE",
				this.getJavaScriptFileName());
		template = replaceNextAndPrevious(template);
		template = replaceNavBar(template);
		pw.print(template);
		pw.close();
	}

	private void generateJavascript() throws FileNotFoundException {
		String name = getJavaScriptFileName();
		String fullName = Paths
				.get(this.getUnit().getOutputLink() + "/" + name).toString();

		PrintWriter pw = new PrintWriter(new File(fullName));
		String template = this.getUnit().getQuizTemplate();
		pw.println(template);
		pw.println(questions.size() + " questions");
		pw.println("var activity = [");
		for (int i = 0; i < questions.size(); i++) {
			pw.print(questions.get(i).toString());
			if (i < questions.size() - 1) {
				pw.println("\t'<br><br>',");
			}
		}
		
		pw.println("];");
		pw.close();
	}

	
	
	public void addQuestion(Question currentQuestion) {
		questions.add(currentQuestion);
	}
}
