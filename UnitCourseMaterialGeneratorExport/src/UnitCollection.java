import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;

/**
 * Contains a list of units and methods for operating on them.
 *
 * @author Matt Boutell. Created Aug 23, 2014.
 */
public class UnitCollection {

	private ArrayList<File> unitFiles;

	public UnitCollection(boolean isSingleUnitFile, File unitFile)
			throws FileNotFoundException {
		unitFiles = new ArrayList<File>();
		if (isSingleUnitFile) {
			unitFiles.add(unitFile);
		} else {
			// Get the list of files
			Scanner sc = new Scanner(unitFile);
			while (sc.hasNextLine()) {
				String s = sc.nextLine();
				if (Main.DEBUG) {
					s = "../CourseMaterial/plans/" + s;
				}
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
		PrintWriter cbUnitWriter = null;
		PrintWriter cbLessonWriter = null;
		if (outputFormat == OutputFormat.COURSE_BUILDER) {
			// CONSIDER: Where should I write these two files? Add a path?
			cbUnitWriter = new PrintWriter(new File("unitGenerated.csv"));
			String unitHeader = "id,type,unit_id,title,release_date,now_available";
			cbUnitWriter.println(unitHeader);

			cbLessonWriter = new PrintWriter(new File("lessonGenerated.csv"));
			String lessonHeader = "unit_id,unit_title,lesson_id,lesson_title,lesson_activity,lesson_activity_name,";
			lessonHeader += "lesson_notes,lesson_video_id,lesson_objectives";
			cbLessonWriter.println(lessonHeader);
		}

		for (int i = 0; i < unitFiles.size(); i++) {
			File unitFile = unitFiles.get(i);
			Unit unit = new Unit(unitFile, templateDir);
			unit.generateFiles();
			if (outputFormat == OutputFormat.COURSE_BUILDER) {
				unit.generateCourseBuilderFiles(cbUnitWriter, cbLessonWriter,
						i + 1);
			}
		}

		if (outputFormat == OutputFormat.COURSE_BUILDER) {
			cbUnitWriter.close();
			cbLessonWriter.close();
		}
	}

}
