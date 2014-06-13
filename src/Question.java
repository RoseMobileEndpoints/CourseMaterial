import java.util.ArrayList;
import java.util.Arrays;

import javax.activation.UnsupportedDataTypeException;


/**
 * An individual question in a quiz.
 *
 * @author Matt Boutell.
 *         Created Jun 13, 2014.
 */
public class Question {
	enum QuestionType {
		MULTIPLE_CHOICE,
		MULTIPLE_SELECT,
		FREE_RESPONSE
	}
	
	private class QuestionChoice {
		String value;
		String feedback;
		boolean isCorrect;
		
		@Override
		public String toString() {
			StringBuilder sb = new StringBuilder();
			sb.append("[\"");
			sb.append(value);
			sb.append("\", ");
			sb.append(isCorrect);
			sb.append(", \"");
			sb.append(isCorrect ? "Correct. " : "Try again. ");
			sb.append(feedback);
			sb.append("\" ],");
			return sb.toString();
			
		}
	}

	private String prompt;
	private QuestionType type;
	ArrayList<QuestionChoice> choices;
	private int number;

	public Question(String prompt) {
		this.prompt = prompt;
		this.type = QuestionType.MULTIPLE_CHOICE; // default
		this.choices = new ArrayList<QuestionChoice>();
	}

	public void setNumber(int number) {
		this.number = number;
	}
	
	public void setType(String typeString) throws UnsupportedDataTypeException {
		typeString = typeString.trim().toUpperCase();
		if (typeString.equals("MC")) {
			type = QuestionType.MULTIPLE_CHOICE;
		} else if (typeString.equals("MS")) {
			type = QuestionType.MULTIPLE_SELECT;
		} else if (typeString.startsWith("FREE")) {
			type = QuestionType.MULTIPLE_CHOICE;
		} else {
			throw new UnsupportedDataTypeException("Cannot understand question type " + typeString);
		}
	}

	public void addQuestionChoice(String line) {
		line = line.trim();
		if (line.length() == 0) {
			return;
		}
		String NON_PRINTABLE = Character.toString((char)0xAB00); 
		line = line.replace("$#$", NON_PRINTABLE); // A non-printable ethiopic character, not likely to be used by a user of this program.
		String[] tokens = line.split(NON_PRINTABLE);
		System.out.println(Arrays.toString(tokens));
		QuestionChoice choice = new QuestionChoice(); 
		if (this.type == QuestionType.MULTIPLE_CHOICE) {
			choice.value = tokens[0];
			choice.feedback = tokens[1];
			choice.isCorrect = (tokens.length > 2);
			choices.add(choice);
		} else if (this.type == QuestionType.MULTIPLE_SELECT) {
			choice.value = tokens[0];
			choice.isCorrect = (tokens.length > 1);
			choices.add(choice);
		}
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("\t\"<b>" + number + ".</b> ");
		sb.append(prompt);
		sb.append("<br>\",\n");
		sb.append("\t{\n");
		sb.append("\t\tquestionType : \"");
		switch (type) {
		case MULTIPLE_CHOICE:
			sb.append("multiple choice");
			break;
		case MULTIPLE_SELECT:
			sb.append("multiple choice group");
			break;
		case FREE_RESPONSE:
			sb.append("FREE RESPONSE CHANGE ME!");
			break;
			
		}
		sb.append("\",\n");
		sb.append("\t\tchoices : [\n");
		
		for (QuestionChoice choice : choices) {
			sb.append("\t\t\t" + choice.toString() + "\n");
		}
		
		sb.append("\t\t]\n");
		
		
		
		sb.append("\t},\n");
		return sb.toString();
	}

	
/*
    '<b>1.</b> Q text<br>',
    
	{
		questionType : 'multiple choice',
		choices : [
				['Nothing', true],
				['Your name or initials', true, 'Yes, that will help me much while grading!' ],
				['The name of the CEO of Google', false, 'Interesting, but seeing the name Larry Page on your app is not helpful to me.' ]
				]	
	},
 */
	
	
	
}
