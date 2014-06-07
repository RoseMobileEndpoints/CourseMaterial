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





    '<b>1.</b> What is the main reason we place our strings in the strings.xml values file?<br>',
    
	{
		questionType : 'multiple choice',
		choices : [
				['We like doing more work', false, 'No, although that may be true for you.' ],
				['Android complains if we use hardcoded strings', false, 'No. Not the main reason, although that is true' ],
				['It makes it easier to maintain the strings', true, 'Correct. Especially if we can to do localization (swap languages) later.' ]
				]	
	},

    '<br><br>',

Q2: Colors follow what format? RGB can each be 1 digit. Can be 2 digits, Can include transparency. Must start with #. Can use decimal instead of hex.

    '<b>3.</b> What is true of the format of colors in colors.xml? (Choose all that apply.)<br>',
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '',
					choices : [ 'RGB can each be 1 digit', 'RGB can each be 2 digits', 'Alpha (transparency) is optional', 'They must start with #', 'They can use decimal instead of hex' ],
					correctIndex : [0,1,2,3]
				}
				],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hint: look back at the slides.',
	},

    '<br><br>',
    '<b>3.</b> If you want a view to stretch across the screen, what value should you use for android:layout_width?<br>',
    
	{
		questionType : 'multiple choice',
		choices : [
				['matchParent', true, 'Correct.' ],
				['fillParent', false, 'No, that is not the current best practice although it will work fine.' ],
				['wrap content', false, 'No, that will only be as large as the text within it.' ]]
	}
	
];

