// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Usage instructions: Create a single array variable named 'activity'. This
// represents explanatory text and one or more questions to present to the
// student. Each element in the array should itself be either
//
// -- a string containing a set of complete HTML elements. That is, if the
//    string contains an open HTML tag (such as <form>), it must also have the
//    corresponding close tag (such as </form>). You put the actual question
//    text in a string.
//
// -- a JavaScript object representing the answer information for a question.
//    That is, the object contains properties such as the type of question, a
//    regular expression indicating the correct answer, a string to show in
//    case of either correct or incorrect answers or to show when the student
//    asks for help. For more information on how to specify the object, please
//    see http://code.google.com/p/course-builder/wiki/CreateActivities.

var activity = [
	"<b>1.</b> Which methods are called as part of the Activity lifecycle? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "onCreate()", "onDestroy()", "onStart()", "onStop()", "onResume()", "onPause()", "onDie()"],
					correctIndex : [0,1,2,3,4,5]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>2.</b> Which is the only thing that the new Activity wizard will NOT do for you?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Create a new class that extends Activity", false, "Try again. It does this." ],
				["Create an intent to launch the Activity", true, "Correct. Plus, you need to call startActivity. It does all the others." ],
				["Create a new layout file for the new Activity", false, "Try again. It does this, although you still need to modify it." ],
				["Register the Activity in the AndroidManifest", false, "Try again. It does this." ],
		]
	},
	"<br><br>",
	"<b>3.</b> What theme did we use for the About Activity?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Holo Light", false, "Try again. That was the App Theme." ],
				["Theme.Dialog", true, "Correct. " ],
				["Theme.Toast", false, "Try again. That is for Toast messages, which you saw in an earlier lab." ],
		]
	},
	"<br><br>",
	"<b>4.</b> How can you test an activity in isolation of the rest of the app?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Move the intent filter with the MAIN action and LAUNCHER category to that activity.", true, "Correct. " ],
				["From that activity's java file, choose ctrl-F11 to run the app.", false, "Try again. That will still launch whichever activity is set as the main/launcher activity." ],
				["Create the activity in the Android Manifest", false, "Try again. Creating it isn't enough. You must do something else in the Manifest." ],
		]
	},
	"<br><br>",
	"<b>5.</b> Which is NOT a parameter passed to the Intent constructor?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The layout of the activity to be launched", true, "Correct. The activity to be launched specifies its own layout by calling setContentView()." ],
				["The class of the activity to be launched", false, "Try again. This is the second parameter, for example, AboutActivity.class." ],
				["The context", false, "Try again. This is the first parameter, for example, this." ],
		]
	},
];
