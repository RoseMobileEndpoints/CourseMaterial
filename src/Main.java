import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import javax.swing.JOptionPane;

/**
 * Runs the unit course material generator.
 * 
 * @author Matt Boutell. Created Jun 6, 2014.
 */
public class Main {

	private String unitName;
	private String templateDir;

	/**
	 * Starts here.
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		@SuppressWarnings("unused")
		Main main = new Main();
	}

	public Main() {
		try {
			parseConfigFile();
			Unit unit = new Unit(unitName, templateDir);
			unit.generateFiles();
		} catch (Exception exception) {
			exception.printStackTrace();
			JOptionPane.showMessageDialog(null, exception.getMessage());
		}
	}

	private void parseConfigFile() throws FileNotFoundException {
		File configFile = new File("unitGeneratorConfiguration.txt");
		Scanner scanner = new Scanner(configFile);
		unitName = scanner.next();
		templateDir = scanner.next();

		while (scanner.hasNext()) {
			// no-op
		}
		scanner.close();
	}

}
