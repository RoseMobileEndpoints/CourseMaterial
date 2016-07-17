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
	"<b>1.</b> How do we tell Firebase to only listen for additions/deletions/or edits to students who are associated with a certain course? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "Use a Query", "Save the course key in the Student", "Use a ChildEventListener on the Query"],
					correctIndex : [0,1,2]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>2.</b> To get the name of a course for which we have the key, we called addListenerForSingleValueEvent. What is the signficance of the word Single? If you aren't sure, read <a href='https://www.firebase.com/docs/android/api/#query_methods' target='_blank'>this</a><br>",
	{
		questionType : "multiple choice",
		choices : [
				["It fires only once.", true, "Correct. That is the only difference between that listener and a regular ValueEventListener." ],
				["It only gets a single value instead of all its children like a ChildEventListener", false, "Try again. Good guess, but no. Any old ValueEventListener gets a 'single value'. Although, that single value is a path, so could contain lots of data!" ],
				["There is no signficance", false, "Try again. Silly answer." ],
		]
	},
];
