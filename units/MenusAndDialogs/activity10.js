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
	"<b>1.</b> Context menus are very similar to options (toolbar) menus. What is the new method definition or call you must add for context menus to appear?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["onContextItemSelected()", false, "Try again. That's very similar to onOptionsItemSelected(), so not new." ],
				["onCreateContextMenu()", false, "Try again. That's very similar to onCreateOptionsMenu(), so not new." ],
				["registerForContextMenu()", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> Add item and edit item dialogs are very similar. How are they different? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "Edit must show different widgets in the dialog", "Edit must prepopulate the widgets", "Edit must only mutate the current item"],
					correctIndex : [1,2]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
];
