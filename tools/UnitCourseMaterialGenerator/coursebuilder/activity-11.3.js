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
	"<b>1.</b> What command must be run to generate the Android client code?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["{google appengine location}\\endpointscfg.py", true, "Correct. " ],
				["{google appengine location}\\generateAndroidCode", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> Take a look at the generated code. Which file has a getItems() method?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Moviequotes", false, "Try again. This one is the Service object - we'll use it next time." ],
				["MovieQuote", false, "Try again. Similar name as the first. But this is a single quote." ],
				["MovieQuoteCollection", true, "Correct. We'll use this when we query the backend for all the quotes." ],
		]
	},
	"<br><br>",
	"<b>3.</b> Take a look at the generated code. Which file has a getEntityKey() method?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Moviequotes", false, "Try again. This one is the Service object - we'll use it next time." ],
				["MovieQuote", true, "Correct. Each quote has an entity key. We'll use this when we delete quotes." ],
				["MovieQuoteCollection", false, "Try again. We'll use this when we query the backend for all the quotes." ],
		]
	},
];
