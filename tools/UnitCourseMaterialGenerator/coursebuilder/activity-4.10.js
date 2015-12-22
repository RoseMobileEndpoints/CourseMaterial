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
	"<b>1.</b> Why should one use the newInstance() method rather than a constructor to create a fragment that needs info passed to it? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "When recreating a fragment, Android doesn't call constructors with arguments", "Setting the bundle arguments on your own is OK, but can be problematic if you forget to do it", "newInstance() takes the place of all Fragment constructors"],
					correctIndex : [0,1]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>2.</b> True or false: AndroidStudio gives good support for implementing the Parcelable interface.<br>",
	{
		questionType : "multiple choice",
		choices : [
				["True", true, "Correct. Abolutely. It only takes 2-3 clicks to tell it to do it for you." ],
				["False", false, "Try again. I hope you aren't doing it all on your own - it's very tedious." ],
		]
	},
	"<br><br>",
	"<b>3.</b> What does the app do when a document is selected?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Highlights that document in the list by boldfacing it and changing the background color of the ViewHolder in that position in the RecyclerAdapter", false, "Try again. Cool idea, but we didn't do that." ],
				["Creates a new detail fragment with that document and swaps it in in place of the list fragment.", true, "Correct. This was in the Callback's onDocSelected()" ],
		]
	},
];
