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
	"<b>1.</b> To auto-populate the update dialog with an item, we needed to query for only that item. How do we do that?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Specify a selection (where clause) with the id", true, "Correct. Aren't you glad you saved the ID in the model object when it was inserted?" ],
				["Specify a projection (columns) with the id", false, "Try again. That just tells you which columns to return - it doesn't affect which table row(s) you get in the Cursor." ],
		]
	},
	"<br><br>",
	"<b>2.</b> What value does the database's update() method return?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Nothing. It is a void method, which is why we didn't assign a return value to a variable.", false, "Try again. Look it up." ],
				["A boolean telling whether or not it was successful.", false, "Try again. " ],
				["An int telling how many rows were updated.", true, "Correct. " ],
		]
	},
];
