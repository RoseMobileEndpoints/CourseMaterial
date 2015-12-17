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
	"<b>1.</b> Which UI element was NOT used in the demo app?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Button", false, "Try again. There were two buttons." ],
				["TextView", false, "Try again. The message -I drank 4 cups- was displayed in a TextView." ],
				["Slider", true, "Correct. " ],
				["ImageView", false, "Try again. That is how the photo of the coffee cups was displayed." ],
		]
	},
	"<br><br>",
	"<b>2.</b> Where in the app did we set an OnClickListener to respond to Button presses?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["activity_main.xml", false, "Try again. That was for the layout." ],
				["MainActivity.java", true, "Correct. " ],
				["AndroidManifest.xml", false, "Try again. We have not used that file yet." ],
		]
	},
	"<br><br>",
	"<b>3.</b> How can you change the TextSize (font size in a TextView)? (There is more than one correct answer, so try different ones - there is no panelty for taking a question multiple times.)<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Edit the raw .xml", true, "Correct. Experienced developers often do that. But it is not the only way." ],
				["Change the properties in the GUI editor", true, "Correct. That is what I did in the video. Very convenient especially when you are looking for a certain property." ],
				["Capture the TextView using findViewByID and then call .setTextSize()", true, "Correct. I used the GUI editor, but you can do it in code." ],
				["Change the AndroidManifest file", false, "Try again. We haven't used that file yet. Any of the other options work, though." ],
		]
	},
];
