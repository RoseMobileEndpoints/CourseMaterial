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
	"<b>1.</b> How do you refer to a string in code?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["getResources().getColor(R.color.somename)", false, "Try again. " ],
				["getString(R.string.somename)", true, "Correct. " ],
				["findViewById(R.id.somename)", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> How do you refer to a color in code?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["getResources().getColor(R.color.somename)", true, "Correct. " ],
				["getString(R.string.somename)", false, "Try again. " ],
				["findViewById(R.id.somename)", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>3.</b> How do you refer to a view in code?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["getResources().getColor(R.color.somename)", false, "Try again. " ],
				["getString(R.string.somename)", false, "Try again. " ],
				["findViewById(R.id.somename)", true, "Correct. " ],
		]
	},
	"<br><br>",
	"<b>4.</b> You use findViewById to get a Button. However, that method returns a View, so what else do you need to do to assign it to a Button?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Nothing, just assign to a Button", false, "Try again. They are different types, so it won't compile." ],
				["Pass the View returned by findViewById to the Button constructor", false, "Try again. " ],
				["Cast it", true, "Correct. For example, Button b = (Button)findViewById(R.id.someid);" ],
		]
	},
	"<br><br>",
	"<b>5.</b> What method is used to add a listener to a Button?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["addListener()", false, "Try again. Right idea, though. What kind of listener? There are several." ],
				["addActionListener()", false, "Try again. That is from the Swing library in Java." ],
				["setOnClickListener()", true, "Correct. " ],
		]
	},
];
