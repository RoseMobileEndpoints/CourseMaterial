import java.util.Arrays;

/**
 * A freetext question uses regex.
 *
 * @author Matt Boutell.
 *         Created Jun 13, 2014; implemented July 23, 2014.
 */
public class FreeTextQuestion extends Question {

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
		FreeQuestionChoice choice = new FreeQuestionChoice();
		choice.value = tokens[0].trim(); // regex
		choice.positiveFeedback = tokens.length > 1 ? tokens[1].trim() : "";
		choice.feedback = tokens.length > 2 ? tokens[2].trim() : "";
		choice.answer = tokens.length > 3 ? tokens[3].trim() : "";
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
		sb.append("freetext");
		sb.append("\",\n");
		FreeQuestionChoice choice = (FreeQuestionChoice)choices.get(0);
		sb.append("\t\tcorrectAnswerRegex : ");
		sb.append(choice.value);
		sb.append(",\n");
		sb.append("\t\tcorrectAnswerOutput : \"Correct! ");
		sb.append(choice.positiveFeedback);
		sb.append("\",\n");
		sb.append("\t\tincorrectAnswerOutput : \"Try again. ");
		sb.append(choice.feedback);
		sb.append("\",\n");
		sb.append("\t\tshowAnswerOutput : \"Here is the answer: ");
		sb.append(choice.answer);
		sb.append("\"\n");
		sb.append("\t},\n");
		return sb.toString();
	}

	
	
	
// Sample:
/*	
var activity = [

  { questionType: 'freetext',
    correctAnswerRegex: /white?/i,
    correctAnswerOutput: "Correct--Many charts, tables, and graphs have white backgrounds, so filtering for white images helps you find them faster.",
    incorrectAnswerOutput: "Try again. Consider what color would be dominant in images of charts, tables, and graphs. Look at the results above. Each of those sources is traditionally printed on paper.",
    showAnswerOutput: "Our search expert says: I would click on white in the color grid, since many charts, tables, and graphs have white backgrounds." 
  }

//		correctAnswerRegex : /Delay10KTCYx\(\s*250\s*\);/i,
//		correctAnswerOutput : 'Correct!',
//		incorrectAnswerOutput : 'Please try again.',
//		showAnswerOutput : 'Here is the answer'



];
*/	
// See https://code.google.com/p/course-builder/wiki/CreateActivities#Free_text
	
}
