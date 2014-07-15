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
	"<b>1.</b> What is the main reason we use AsynchTasks in our apps?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["To keep our apps responsive during network or database calls.", true, "Correct. " ],
				["Because AsynchTask is such a cool-sounding class name.", false, "Try again. It is, but that's not the main reason." ],
				["Because we can.", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> What method in an AsynchTask must always be implemented?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["onPreExecute", false, "Try again. This is where you set up a ProgressBar if you want one - totally optional." ],
				["doInBackground", true, "Correct. " ],
				["onProgressUpdate", false, "Try again. This is where you update the ProgressBar - totally optional." ],
				["onPostExecute", false, "Try again. We often do this to examine the results of the task and to update the UI. But it isn't required to do this." ],
		]
	},
	"<br><br>",
	"<b>3.</b> What is used for a parameter type in an AsynchTask if there is no parameter?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["null", false, "Try again. " ],
				["Null", false, "Try again. At least you remembered that class names are capitalized." ],
				["void", false, "Try again. Close." ],
				["Void", true, "Correct. " ],
		]
	},
];
