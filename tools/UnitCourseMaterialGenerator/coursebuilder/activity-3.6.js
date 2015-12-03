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
	"<b>1.</b> What is the argument value of 2 do in GridLayoutManager(this, 2)<br>",
	{
		questionType : "multiple choice",
		choices : [
				["A layout with two rows", false, "Try again. The number of rows also depends on the number of items managed by the adapter." ],
				["A layout with two columns", true, "Correct. " ],
				["A compound row view with two views", false, "Try again. No, you can get two views using your row view .xml layout." ],
		]
	},
	"<br><br>",
	"<b>2.</b> What type of view did I use to get a distinct area, with rounded corners, for each item?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["CardView", true, "Correct. " ],
				["ImageView", false, "Try again. " ],
				["RecyclerView", false, "Try again. " ],
		]
	},
];
