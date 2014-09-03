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
	"<b>1.</b> To make it easier later on to distinguish which button was pressed, how do we store the 9 buttons in code?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["as an array", false, "Try again. That is possible, but you would need to convert from a (row,column) pair to an index." ],
				["as a 2d array", true, "Correct. Tables work well as 2d arrays." ],
				["as 9 separate variables", false, "Try again. That would work but is cumbersome." ],
		]
	},
	"<br><br>",
	"<b>2.</b> Which class responded to the button clicks?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Each button", false, "Try again. You would need to override the Button class to do that, since Buttons are not OnClickListeners." ],
				["An anonymous listener for each button", false, "Try again. That could work, but it is not what we did." ],
				["MainActivity", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>3.</b> Because of that choice, onClick must use getId() to distinguish between how many buttons?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["1", false, "Try again. That was only the new game button." ],
				["9", false, "Try again. You forgot the new game button!" ],
				["10", true, "Correct. 9 tic tac toe buttons plus the new game button." ],
		]
	},
];
