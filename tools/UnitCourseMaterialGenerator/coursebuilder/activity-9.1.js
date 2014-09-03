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
	"<b>1.</b> What can AppEngine be used for? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "Creating web apps", "Creating backends for Android apps", "Creating Android apps", "Creating backends for iOS apps", "Creating iOS apps"],
					correctIndex : [0,1,3]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>2.</b> If I have a web app with a Project ID of cluekeeperweb, must I use http://cluekeeperweb.appspot.com as my URL?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yes", false, "Try again. The nice thing is no one has to know that your app is hosted by google." ],
				["No", true, "Correct. Isn't that convenient? They use http://cluekeeper.com. Did you know that even www.angrybirds.com is really an alias for an appspot app?" ],
		]
	},
];
