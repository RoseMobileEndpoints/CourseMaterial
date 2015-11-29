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
	"<b>1.</b> Was your name used in the demo?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yes", true, "Correct. Hope you enjoyed that. I'm glad you signed up early for the course!" ],
				["No", true, "Correct. Sorry - I used those people who signed up earliest for the summer class." ],
		]
	},
	"<br><br>",
	"<b>2.</b> Which new Eclipse shortcut did we learn?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Ctrl-space", false, "Try again. Hopefully content-assist is an old friend." ],
				["Alt-shift R", false, "Try again. That's for refactor/renaming - hopefully you already knew that one." ],
				["Alt-shift A, S", true, "Correct. Makes it convenient to code when we don't know all the string resources we will need ahead of time." ],
		]
	},
	"<br><br>",
	"<b>3.</b> What layout did we use for a row in the ListView?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["android.R.simple_list_item_1", true, "Correct. " ],
				["R.simple_list_item_1", false, "Try again. We used a built-in resource." ],
		]
	},
	"<br><br>",
	"<b>4.</b> Which one is these is NOT a parameter to the ArrayAdapter constructor?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Array", false, "Try again. It needs a data source." ],
				["Context", false, "Try again. It needs the context too to create views." ],
				["Layout", false, "Try again. It needs the layout of a single view." ],
				["ListView", true, "Correct. You bind the adapter to a ListView by calling setAdapter()." ],
		]
	},
];
