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
	"<b>1.</b> What is the type of the parameter that is passed to the InsertQuoteTask's doInBackground()  method?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Long", false, "Try again. " ],
				["String", false, "Try again. That's the type of the parameter that is passed to the DeleteQuoteTask's doInBackground() method." ],
				["Void", false, "Try again. We are passing an argument, so it isn't Void." ],
				["MovieQuote", true, "Correct. " ],
				["MovieQuoteCollection", false, "Try again. Our API only allows us to insert a single quote at a time." ],
		]
	},
	"<br><br>",
	"<b>2.</b> What is wrong with this code to update the quotes after one is inserted? <code style=\"font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;\"> // ... ready to insert<br>(new InsertQuoteTask()).execute(currentQuote);<br>updateQuotes()<br>//...</code><br>",
	{
		questionType : "multiple choice",
		choices : [
				["Nothing. Updating after an insertion is good since it moves the newly inserted quote up to the top of the list.", false, "Try again. Updating is good, but you should do it in the InsertQuoteTask's onPostExecute() method." ],
				["insert isn't guaranteed to finish before the UI is updated.", true, "Correct. You are calling updateQuotes from the UI thread, which is happening concurrently with the InsertQuoteTask. (Actually, in practice, it would still probably work most of the time.)" ],
		]
	},
];
