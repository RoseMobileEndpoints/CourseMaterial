import java.io.FileNotFoundException;
import java.io.IOException;

/**
 * Runs the unit course material generator.
 * 
 * @author Matt Boutell. Created Jun 6, 2014.
 */
public class Main {

	/**
	 * Starts here.
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		String unitName = "unit1.txt";
		try {
			Unit unit = new Unit(unitName);
			unit.generateFiles();
		} catch (FileNotFoundException exception) {
			exception.printStackTrace();
		} catch (IOException exception) {
			exception.printStackTrace();
		} 
	}

}
