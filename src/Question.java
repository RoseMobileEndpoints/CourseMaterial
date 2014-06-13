import java.util.ArrayList;

import javax.activation.UnsupportedDataTypeException;

/**
 * An individual question in a quiz.
 * 
 * @author Matt Boutell. Created Jun 13, 2014.
 */
public abstract class Question {
	class QuestionChoice {
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
	ArrayList<QuestionChoice> choices;
	private int number;

	public Question() {
		this.choices = new ArrayList<QuestionChoice>();
	}

	protected String getPrompt() {
		return this.prompt;
	}

	public void setPrompt(String prompt) {
		this.prompt = prompt;
	}

	protected ArrayList<QuestionChoice> getChoices() {
		return this.choices;
	}

	protected void setChoices(ArrayList<QuestionChoice> choices) {
		this.choices = choices;
	}

	protected int getNumber() {
		return this.number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public abstract void addQuestionChoice(String line); 
	
	// Factory method
	public static Question makeQuestion(String typeString)
			throws UnsupportedDataTypeException {
		typeString = typeString.trim().toUpperCase();
		if (typeString.equals("MC")) {
			return new MultipleChoiceQuestion();
		} else if (typeString.equals("MS")) {
			return new MultipleSelectQuestion();
		} else if (typeString.startsWith("FREE")) {
			return null;
		} else {
			throw new UnsupportedDataTypeException(
					"Cannot understand question type " + typeString);
		}
	}

}
