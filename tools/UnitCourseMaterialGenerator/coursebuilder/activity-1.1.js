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
	"<b>1.</b> When you create new projects in this unit, what type of Activity do you select?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["No activity", false, "Try again. There was something." ],
				["Empty Activity", true, "Correct. That is the most basic one and we'll use it in this unit. Later you will use others." ],
				["Blank Activity", false, "Try again. That will be for the next unit, when we need menus." ],
				["Navigation Drawer Activity", false, "Try again. We'll use that later this term. Of course, you are free to play around with Nav Drawers or others now if you like." ],
		]
	},
	"<br><br>",
	"<b>2.</b> What naming convention is used for packages?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["just use your initials", false, "Try again. That isn't descriptive enough" ],
				["use findViewById", false, "Try again. We will learn about that in an upcoming video." ],
				["reverse URL", true, "Correct. By choosing a company name of yourusername.rosehulman.edu, your package will be edu.rosehulman.yourusername.theappname" ],
		]
	},
	"<br><br>",
	"<b>3.</b> What can you find in the AndroidManifest.xml file? Look at the file if you aren't sure. (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "The package name", "The Activity that will be launched", "What versions of Android your app is written for"],
					correctIndex : [0,1]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>4.</b> In which values file does our screen text go?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["colors.xml", false, "Try again. Next lesson, we'll learn about specifying RGB colors" ],
				["dimens.xml", false, "Try again. That's for margins and other dimensions you need to be re-used." ],
				["strings.xml", true, "Correct. " ],
				["styles.xml", false, "Try again. That's for specifying themes." ],
		]
	},
];
