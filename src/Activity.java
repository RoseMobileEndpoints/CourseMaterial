
/**
 * An activity.
 *
 * @author Matt Boutell.
 *         Created Jun 6, 2014.
 */
public class Activity extends Task {
	/**
	 * Creates a lesson with the given unit and number.
	 *
	 * @param unit
	 * @param number
	 */
	public Activity(Unit unit, int number) {
		super(unit, number);
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("Activity " + this.getNumber() + "\n");
		sb.append("Title: " + this.getTitle() + "\n");
		return sb.toString();
	}
	
}
