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
	"<b>1.</b> What argument must you pass when creating a View?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The context", true, "Correct. For example, new Button(this), where this is the Activity." ],
				["The view's text", false, "Try again. You use setText for that." ],
				["The size of the view", false, "Try again. That's set by the layout parameters. We haven't yet seen how to do that in code." ],
		]
	},
	"<br><br>",
	"<b>2.</b> What did we use to determine which LightsOut button was pressed?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["ID", false, "Try again. Normally you would, but these buttons created in code don't have IDs." ],
				["tag", true, "Correct. " ],
				["text", false, "Try again. That would work, but isn't as elegant." ],
		]
	},
];
