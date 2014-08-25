import java.util.Arrays;

/**
 * Multiple select questions (aka multiple choice groups in CourseBuilder)
 * require multiple answers all to be made correctly.
 * 
 * @author Matt Boutell. Created Jun 13, 2014.
 */
public class MultipleSelectQuestion extends Question {

	@Override
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
		choice.value = tokens[0].trim();
		choice.isCorrect = (tokens.length > 1);
		choices.add(choice);
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("\t\"<b>" + getNumber() + ".</b> ");
		sb.append(getPrompt());
		sb.append(" (Choose all that apply.)\",\n");
		sb.append("\t{\n");
		sb.append("\t\tquestionType : \"multiple choice group\",\n");
		sb.append("\t\tquestionsList : [\n");
		
		sb.append("\t\t\t\t{\n");
		sb.append("\t\t\t\t\tquestionHTML : \"\",\n");
		
		sb.append("\t\t\t\t\tchoices : [ ");
		for (int i = 0; i < choices.size(); i++) {
			QuestionChoice choice = choices.get(i);
			sb.append("\"" + choice.value + "\"");
			if (i < choices.size() - 1) {
				sb.append(", ");
			}
		}
		
		
		sb.append("],\n");
		
		sb.append("\t\t\t\t\tcorrectIndex : ");
		
		sb.append(correctIndicesString());
		sb.append("\n");
		
		sb.append("\t\t\t\t}\n");
		sb.append("\t\t\t\t],\n");

		sb.append("\t\tallCorrectOutput : \"Well done!\",\n");
		sb.append("\t\tsomeIncorrectOutput : \"Please ignore the previous feedback line. Then try again.\",\n");
		sb.append("\t},\n");
		return sb.toString();
	}

	private String correctIndicesString() {
		String s = "";
		for (int i = 0; i < choices.size(); i++) {
			QuestionChoice choice = choices.get(i);
			s += (choice.isCorrect ? i +"," : "");   
		}
		s = s.substring(0, s.length()-1); // strip trailing comma
		return "[" + s + "]";
	}

}

//	questionsList : [
//			{
//				questionHTML : '',
//				choices : [ 'view A must have an ID', 'view B must have an ID', 'view A must be declared before view B in the xml', 'view B must be declared before view A in the xml'],
//				correctIndex : [1, 3]
//			}
//			],
//	allCorrectOutput : 'Well done!',
//	someIncorrectOutput : 'Please try again.',

