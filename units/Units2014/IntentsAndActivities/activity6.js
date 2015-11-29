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
	"<b>1.</b> What is the format of an Intent extra?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["An array element", false, "Try again. " ],
				["A key-value pair", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> What method do we use to start an activity that we expect will pass back data?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["startActivityForResult", true, "Correct. " ],
				["startActivityForReturn", false, "Try again. " ],
				["onActivityResult", false, "Try again. " ],
				["onActivityReturn", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>3.</b> What method is called when the activity that holds the return data has finished?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["startActivityForResult", false, "Try again. " ],
				["startActivityForReturn", false, "Try again. " ],
				["onActivityResult", true, "Correct. " ],
				["onActivityReturn", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>4.</b> Note that the callback uses two codes: a request code and a result code.<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Got it", true, "Correct. The calling activity sets the request code to flag which activity it is calling (REQUEST_CODE_someactivity) and the result code sets the result code to RESULT_OK if it finishes normally or RESULT_CANCELLED if the back button was pressed." ],
				["Huh?", false, "Try again. The calling activity sets the request code to flag which activity it is calling (REQUEST_CODE_someactivity) and the result code sets the result code to RESULT_OK if it finishes normally or RESULT_CANCELLED if the back button was pressed." ],
		]
	},
];
