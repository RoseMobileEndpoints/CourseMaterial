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
	"<b>1.</b> How do we listen to long clicks on views in a ListView?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["OnItemClickListener()", false, "Try again. That isn't the one we used, but it does listen for regular clicks on ListView items" ],
				["onClickListener()", false, "Try again. That was for single clicks on single views." ],
				["onItemLongClickListener()", true, "Correct. " ],
				["onLongClickListener()", false, "Try again. That was for single views." ],
		]
	},
	"<br><br>",
	"<b>2.</b> Which class holds the list of data managed by the adapter?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The custom BaseAdapter", true, "Correct. That is cleanest." ],
				["The MainActivity (where the data is displayed)", false, "Try again. It's possible to do that, just not as clean." ],
				["The AppCompatActivity", false, "Try again. You shouldn't update the superclass." ],
		]
	},
	"<br><br>",
	"<b>3.</b> Which class actually mutates the list of data (say, by adding, removing, or editing)?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The custom BaseAdapter", true, "Correct. That is cleanest." ],
				["The MainActivity (where the data is displayed)", false, "Try again. Again, it's possible to do that, just not as clean." ],
				["The AppCompatActivity", false, "Try again. You shouldn't update the superclass." ],
		]
	},
	"<br><br>",
	"<b>4.</b> Which class holds the onItemLongClickListener()?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The custom BaseAdapter", false, "Try again. Unfortunately, no. It would be clean for each view to listen for a clicks on itself - this flaw was remedied with RecyclerAdapters." ],
				["The MainActivity (where the data is displayed)", true, "Correct. Unfortunately so. It would be clean for each view to listen for a clicks on itself - this flaw was remedied with RecyclerAdapters." ],
				["The AppCompatActivity", false, "Try again. You shouldn't update the superclass." ],
		]
	},
];
