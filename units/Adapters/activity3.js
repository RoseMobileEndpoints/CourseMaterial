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
	"<b>1.</b> Which is NOT an abstract method in BaseAdapter?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["getContext()", true, "Correct. " ],
				["getCount()", false, "Try again. " ],
				["getItem()", false, "Try again. " ],
				["getItemId()", false, "Try again. " ],
				["getView()", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> Why do we test to see if convertView is null?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Efficiency", true, "Correct. There is no need to recreate objects that have already been allocated in memory." ],
				["The code is cleaner and easier to maintain that way", false, "Try again. Not necessarily." ],
		]
	},
	"<br><br>",
	"<b>3.</b> What method is used to tell the adapter that it needs to update?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["notifyAll()", false, "Try again. That Java method is used when multithreading." ],
				["notifyDataSetChanged()", true, "Correct. " ],
				["notifyDataSetInvalidated()", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>4.</b> How do we listen to clicks on views in a ListView?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["onItemClickListener()", true, "Correct. " ],
				["onClickListener()", false, "Try again. That was for single views." ],
				["OnItemLongClickListener()", true, "Correct. That isn't the one we used, but it does listen for (long) clicks on ListView items" ],
		]
	},
];
