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
    '<b>1.</b> What value do we use for the stretchColumns property to cause all columns in the table to stretch?<br>',
	{
		questionType : 'multiple choice',
		choices : [
				['*', true, 'Yes, that is a wildcard.' ],
				['?', false, 'No. That is a wildcard character in some instances, but not here.' ],
				['all', false, 'No.' ]
				]	
	},

    '<br><br>',
    '<b>2.</b> What color is Rose-Hulman red?<br>',
	{
		questionType : 'multiple choice',
		choices : [
				['FFFFFF', false,  'No. That is white'],
				['#0939B5', false, 'No. Since the third hex pair has the largest numerical value, that would be blue - see colorpicker.com to see what shade if you are curious.'], 
				['#B50939.', true, 'Yes. Good memory. Want a job in Communications?']]	
	},

    '<br><br>',
    "<b>3.</b> What method would we use to align the bottom edge of a button with the bottom of the RelativeLayout it is part of? If you aren't sure, type it in the xml editor and read the documentation that pops up.<br>",
	{
		questionType : 'multiple choice',
		choices : [
				['android:layout_alignBaseline', false, 'No. But that is a valid xml property.' ],
				['android:layout_alignBottom', false, 'No. That aligns the bottom of two sibling views.' ],
				['android:layout_alignParentBottom', true, 'Correct. Since the layout contains the button, it is the parent of the button.' ]]
	},
	    
 	'<br><br>',
    '<b>4.</b> To specify the position of view A relative to view B, what must be true? (Choose all that apply.)',
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '',
					choices : [ 'view A must have an ID', 'view B must have an ID', 'view A must be declared before view B in the xml', 'view B must be declared before view A in the xml'],
					correctIndex : [1, 3]
				}
				],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again.',
	}
	];

