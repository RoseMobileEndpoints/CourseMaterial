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
	"<b>1.</b> What is the main reason we place our strings in the strings.xml values file?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["We like doing more work", false, "Try again. But we admit that may be true for you." ],
				["Android complains if we use hardcoded strings", false, "Try again. That isn't the main reason, although that is true." ],
				["It makes it easier to maintain the strings", true, "Correct. Especially if we want to do localization (swap languages) later." ],
		]
	},
	"<br><br>",
	"<b>2.</b> For English, what two items do we need to put in a plurals string? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "zero", "one", "two", "few", "many", "other"],
					correctIndex : [1,5]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>3.</b> What is true of the format of colors in colors.xml? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "RGB can each be 1 digit", "RGB can each be 2 digits", "Alpha (transparency) is optional", "They must start with #", "They can use decimal instead of hex"],
					correctIndex : [0,1,2,3]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>4.</b> If you want a view to stretch across the screen, what value should you use for android:layout_width?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["matchParent", true, "Correct. " ],
				["fillParent", false, "Try again. That is what it used to be called. (And it will work fine if you use it, so you still get full credit.)" ],
				["wrapContent", false, "Try again. That will only be as large as the text within it." ],
		]
	},
	"<br><br>",
	"<b>5.</b> When it is important to give an ID to a widget in the layout? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "To refer to it in code", "Every widget needs an ID", "To specify where another widget is located relative to this widget"],
					correctIndex : [0,2]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
];
