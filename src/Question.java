import java.util.ArrayList;

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
	}

	private String prompt;
	private QuestionType type;
	ArrayList<QuestionChoice> choices;

	public Question(String prompt) {
		this.prompt = prompt;
		this.type = QuestionType.MULTIPLE_CHOICE; // default
		this.choices = new ArrayList<QuestionChoice>();
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
		String[] tokens = line.split("$#$");
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
}
