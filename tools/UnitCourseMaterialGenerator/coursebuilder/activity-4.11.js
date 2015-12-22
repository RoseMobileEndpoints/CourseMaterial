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
	"<b>1.</b> When we selected a document, we added the replace transaction to the backstack. Why did we do that? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "The fragment backstack is used to manage all fragment replacements in the app.", "The Activity backstack is managed for us, but we need to manage the fragment backstack.", "Otherwise, when we go back from the doc detail fragment, we exit the app instead of going back to the list"],
					correctIndex : [1,2]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>2.</b> When we switch to a top level fragment, what do we need to do with the backstack so that the back button works properly?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Clear it", true, "Correct. " ],
				["Push the current fragment transaction onto the stack", false, "Try again. " ],
				["Pop the current transaction from the stack", false, "Try again. That might work here, but it is better just to clear it." ],
		]
	},
];
