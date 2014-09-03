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
	"<b>1.</b> Why do we need to give the radio group an ID when building the layout?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["So that we can detect which button was pressed", false, "Try again. To do that, we'd give each radio button an ID." ],
				["So that we can put the TextView above it in a RelativeLayout", true, "Correct. " ],
				["It is good practice to put IDs on everything in a layout", false, "Try again. That may be the case, but it's not why we *need* it." ],
		]
	},
	"<br><br>",
	"<b>2.</b> What type of listener is used to respond to radio buttons?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["onRadioClickListener", false, "Try again. That's too specific." ],
				["onClickListener", true, "Correct. Just like any other button." ],
				["There is no such listener", false, "Try again. There is one. Hint: it's the same one as used for any other button." ],
		]
	},
];
