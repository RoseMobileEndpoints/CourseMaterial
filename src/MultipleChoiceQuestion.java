import java.util.Arrays;

/**
 * A multiple choice question.
 * 
 * @author Matt Boutell. Created Jun 13, 2014.
 */
public class MultipleChoiceQuestion extends Question {
	// I wrestled with whether to have types of questions as subclasses or as
	// properties of a Question class. The previous commit used properties. Now
	// I'm trying subclassing because it feels more OO.

	public MultipleChoiceQuestion() {
		super();
	}

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
		choice.feedback = tokens[1];
		choice.isCorrect = (tokens.length > 2);
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
		sb.append("multiple choice");
		sb.append("\",\n");
		sb.append("\t\tchoices : [\n");

		for (QuestionChoice choice : choices) {
			sb.append("\t\t\t" + choice.toString() + "\n");
		}

		sb.append("\t\t]\n");

		sb.append("\t},\n");
		return sb.toString();
	}
}
