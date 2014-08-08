import java.io.File;
import java.io.FileNotFoundException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Scanner;

import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import javax.swing.filechooser.FileFilter;

/**
 * Runs the unit course material generator.
 * 
 * @author Matt Boutell. Created Jun 6, 2014.
 */
public class Main {

	private String unitName;
	private String templateDir;

	private enum RunMode {
		BATCH, INTERACTIVE
	}

	private RunMode runMode;

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
			File unitFile;
			if (runMode == RunMode.BATCH) {
				System.out.println("Batch mode");
				 unitFile = new File(unitName);
			} else {
				// Gets locations from the user using file choosers
				unitFile = getInputFile();
				getOutputPath();
			}
			
			
			Unit unit = new Unit(unitFile, templateDir);
			unit.generateFiles();

			final Class<?> referenceClass = Main.class;
			final URL url = referenceClass.getProtectionDomain()
					.getCodeSource().getLocation();

			String s = String.format("Running in %s mode\n", runMode.toString()
					.toLowerCase());
			final File jarPath = new File(url.toURI()).getParentFile();
			s += String.format("Running from %s\n", jarPath); // this is the
																// path you want
			s += "Completed generating pages for unit";
			JOptionPane.showMessageDialog(null, s);

		} catch (final URISyntaxException exception) {
			// no-op
		} catch (NoFileSelectedException exception) {
			signalToUser("No file selected.  Exiting.");
		} catch (Exception exception) {
			signalToUser(exception.getMessage());
		}
	}

	private void parseConfigFile() throws FileNotFoundException {
		File configFile = new File("unitGeneratorConfiguration.txt");
		Scanner scanner = new Scanner(configFile);
		String runString = scanner.nextLine();
		runMode = runString.toLowerCase().contains("batch") ? RunMode.BATCH
				: RunMode.INTERACTIVE;
		unitName = scanner.nextLine();
		templateDir = scanner.nextLine();
		scanner.close();
	}

	/**
	 * Thrown when no file is selected for input.
	 */
	private static class NoFileSelectedException extends Exception {
		private static final long serialVersionUID = -2223580988540439305L;
		// nothing to see here
	}

	/**
	 * Reports the given message to the user in the best way. Currently always
	 * goes to a dialog.
	 * 
	 * @param msg
	 */
	private static void signalToUser(String msg) {
		boolean useDialog = true;
		if (useDialog) {
			JOptionPane.showMessageDialog(null, msg);
		} else {
			System.out.println(msg);
		}
	}

	/**
	 * Prompts the user for an input file to process.
	 * 
	 * @return the selected file
	 * @throws NoFileSelectedException
	 *             if user declines to select a file
	 */
	private static File getInputFile() throws NoFileSelectedException {
		JFileChooser ch = new JFileChooser();
		ch.setDialogTitle("Select Input File");
		ch.setFileFilter(new FileFilter() {

			@Override
			public boolean accept(File f) {
				return f.isDirectory() || f.getName().endsWith(".txt");
			}

			@Override
			public String getDescription() {
				return "text files";
			}

		});
		int result = ch.showOpenDialog(null);
		if (result == JFileChooser.APPROVE_OPTION) {
			return ch.getSelectedFile();
		}

		throw new NoFileSelectedException();
	}

	/**
	 * Prompts the user for an output directory.
	 * 
	 * @return the selected directory
	 * @throws NoFileSelectedException
	 *             if user declines to select a folder
	 */
	private static File getOutputPath() throws NoFileSelectedException {
		JFileChooser ch = new JFileChooser();
		ch.setDialogTitle("Select Output Directory");
		ch.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
		ch.setFileFilter(new FileFilter() {

			@Override
			public boolean accept(File f) {
				return f.isDirectory();
			}

			@Override
			public String getDescription() {
				return "directories";
			}

		});
		int result = ch.showOpenDialog(null);
		if (result == JFileChooser.APPROVE_OPTION) {
			return ch.getSelectedFile();
		}

		throw new NoFileSelectedException();
	}

}
