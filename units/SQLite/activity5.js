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
	"<b>1.</b> What is a database projection?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["A list of which rows from the database you are querying for", false, "Try again. That's the selection (the where clause)." ],
				["A list of which columns from the database you are querying for", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> How do you tell the CursorAdapter which database columns should be displayed in which text views?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The columns and TextViews are parameters to the constructor", true, "Correct. " ],
				["There is a default ordering based on ID", false, "Try again. It gives you more flexibility than that." ],
		]
	},
	"<br><br>",
	"<b>3.</b> When we first setup the CursorAdapter, it didn't show a recently added item until the app was re-launched or rotated. What did we do to show an item that was just added?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["We added the item to an ArrayList as well and called notifyDataSetChanged() on the adapter.", false, "Try again. Not a bad idea. We didn't do that here, but we could in the lab." ],
				["We requeried the database and passed the new Cursor to the adapter.", true, "Correct. " ],
				["We didn't add that functionality.", false, "Try again. " ],
		]
	},
];
