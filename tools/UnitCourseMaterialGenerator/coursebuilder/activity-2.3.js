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
	"<b>1.</b> What are the three types of rules? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ ".logic", ".login", ".read", ".validate", ".write"],
					correctIndex : [2,3,4]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>2.</b> What is the $ used for in a rule?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["It designates an object", false, "Try again. " ],
				["It denotes that the designated object is used to store currency", false, "Try again. " ],
				["It is a wildcard", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>3.</b> What variable is used to store login data for a user such as their user ID?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["auth", true, "Correct. " ],
				["login", false, "Try again. Although it is used in conjunction with login." ],
				["$auth", false, "Try again. $ is for user-defined variables, not built-in ones." ],
				["$login", false, "Try again. $ is for user-defined variables, not built-in ones." ],
		]
	},
	"<br><br>",
	"<b>4.</b> Which one of these is _not_ an advantage of Bolt?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Simpler format", false, "Try again. That's the main advantage." ],
				["The ability to define types so it generate validation rules", false, "Try again. That's a huge advantage of bolt. Once you have model objects, you can determine the types easily." ],
				["Bolt is more expressive; that is, you can define rules in Bolt that can't be defined in json", true, "Correct. Bolt is compiled into json, so it can only do what json can do." ],
		]
	},
];
