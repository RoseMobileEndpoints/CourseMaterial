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
	"<b>1.</b> If you make an ArrayAdapter<SomeObject>, what will be displayed in each view?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["the results of the array's toString()", false, "Try again. Unfortunately, the array class' toString method isn't very helpful." ],
				["each item's getView()", false, "Try again. " ],
				["the result of each item's toString()", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> How do you get the parts of an object to display in a two line view?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Override getView() and call getItem() to access the object", true, "Correct. " ],
				["Annotate your class with the .text1 and .text2 identifiers.", false, "Try again. We haven't used annotations yet in this course. But we will when we study Google Cloud Endpoints!" ],
				["It just works automatically", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>3.</b> Do we need to test to see if convertView is null when we override ArrayAdapter's getView()?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yes", false, "Try again. The call to super.getView() already checks for that." ],
				["No", true, "Correct. " ],
		]
	},
];
