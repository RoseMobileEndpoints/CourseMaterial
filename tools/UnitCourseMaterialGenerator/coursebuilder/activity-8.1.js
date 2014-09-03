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
	"<b>1.</b> What is a ContentValues?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["A constuct that binds a data source to an xml layout file to replicate views", false, "Try again. That is an adapter. We will learn about CursorAdapters later in this unit." ],
				["A row in a database table that corresponds to a single model object", true, "Correct. " ],
				["A pointer to a result set returned by a query", false, "Try again. That is a Cursor." ],
		]
	},
	"<br><br>",
	"<b>2.</b> What is a Cursor?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["A constuct that binds a data source to an xml layout file to replicate views", false, "Try again. That is an adapter. We will learn about CursorAdapters later in this unit." ],
				["A row in a database table that corresponds to a single model object", false, "Try again. That is a ContentValues (see previous question)" ],
				["A pointer to a result set returned by a query", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>3.</b> Are Cursors iterable?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yes", true, "Correct. That's why they have methods like moveToFirst() and moveToNext()" ],
				["No", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>4.</b> What does CRUD stand for in computing?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["A dirty or greasy substance", false, "Try again. That's the dictionary definition - our CRUD is much more useful than that!" ],
				["Create/Read/Update/Delete", true, "Correct. This concept is broader than SQLite or even databases - you have implemented these operations before, say using arrays, although without persistance." ],
		]
	},
	"<br><br>",
	"<b>5.</b> What SQLIte method is used to implement the R in CRUD?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["delete", false, "Try again. That's the D." ],
				["insert", false, "Try again. That's the C, for Create." ],
				["query", true, "Correct. Query Reads the database and returns the Cursor of results that satisfy the query condition" ],
				["update", false, "Try again. That's the U." ],
		]
	},
];
