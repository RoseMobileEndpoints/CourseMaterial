import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

/**
 * Contains a list of units and methods for operating on them.
 *
 * @author Matt Boutell. Created Aug 23, 2014.
 */
public class UnitCollection {

	private ArrayList<File> unitFiles;

	public UnitCollection(boolean isSingleUnitFile, File unitFile) throws FileNotFoundException {
		unitFiles = new ArrayList<File>();
		if (isSingleUnitFile) {
			unitFiles.add(unitFile);
		} else {
			// Get the list of files
				Scanner sc = new Scanner(unitFile);
				while (sc.hasNextLine()) {
					String s = sc.nextLine();
					System.out.println(s);
					unitFiles.add(new File(s));
				}
				sc.close();
		}

	}

	/**
	 * Process a unit or a list of units
	 *
	 * @param templateDir
	 * @param outputFormat
	 * @throws IOException
	 */
	public void process(String templateDir, OutputFormat outputFormat)
			throws IOException {
		// Open coursebuilder files and output headers
		
		for (File unitFile : unitFiles) {
			Unit unit = new Unit(unitFile, templateDir, outputFormat);
			unit.generateFiles();
		}
		
		// Close coursebuilder files 
	}

}
