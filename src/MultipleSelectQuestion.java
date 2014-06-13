import java.util.Arrays;

/**
 * Multiple select questions (aka multiple choice groups in CourseBuilder)
 * require multiple answers all to be made correctly.
 * 
 * @author Matt Boutell. Created Jun 13, 2014.
 */
public class MultipleSelectQuestion extends Question {

	public void addQuestionChoice(String line) {
		line = line.trim();
		if (line.length() == 0) {
			return;
		}
		// A non-printable ethiopic character, not likely to be used by a user
		// of this program.
		String NON_PRINTABLE = Character.toString((char) 0xAB00);
		line = line.replace("$#$", NON_PRINTABLE);
		String[] tokens = line.split(NON_PRINTABLE);
		System.out.println(Arrays.toString(tokens));
		QuestionChoice choice = new QuestionChoice();
		choice.value = tokens[0];
		choice.isCorrect = (tokens.length > 1);
		choices.add(choice);
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("\t\"<b>" + getNumber() + ".</b> ");
		sb.append(getPrompt());
		sb.append("<br>\",\n");
		sb.append("\t{\n");
		sb.append("\t\tquestionType : \"");
		sb.append("multiple choice group");
		
		sb.append("\",\n");
		sb.append("\t\tchoices : [\n");
		// TODO: fixme
//		for (QuestionChoice choice : choices) {
//			sb.append("\t\t\t" + choice.toString() + "\n");
//		}

		sb.append("\t\t]\n");

		sb.append("\t},\n");
		return sb.toString();
	}

}
