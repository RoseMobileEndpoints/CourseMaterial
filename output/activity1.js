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

    '<b>1.</b> Example multiple choice question <br>',
    
	{
		questionType : 'multiple choice',
		choices : [
				['Option A', false, 'Please try again.' ],
				['Option B', false, 'Please try again.' ],
				['Option C', true, 'Correct!' ],
				['Option D', false, 'Please try again.' ] ]
	},

	
    '<br><br>',
	'<b>2.</b> Example multiple choice group<br>',
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '<b>a.</b> Question A',
					choices : [ 'Option 1', 'Option 2', 'Option 3' ],
					correctIndex : 1
				},
				{
					questionHTML : '<b>b.</b> Question B',
					choices : [ 'Option 1', 'Option 2', 'Option 3' ],
					correctIndex : 2
				},
				{
					questionHTML : '<b>c.</b> Question C',
					choices : [ 'Option 1', 'Option 2', 'Option 3' ],
					correctIndex : 0
				}, {
					questionHTML : '<b>d.</b> Question D',
					choices : [ 'Option 1', 'Option 2', 'Option 3' ],
					correctIndex : [ 1, 2 ]
				} ],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hints: ...',
	},


  '<br><br>',
  '<b>3.</b> Sample free text question with code<br>',
  
	'<code style="font-weight: bold; padding: 5px; background: rgb(234, 248, 248); display: inline-block;">if (x == 7) {<br>&nbsp; &nbsp;printf("x is 7\\n");<br>}</code>',
	'<br>',

	{
		questionType : 'freetext',
		correctAnswerRegex : /Delay10KTCYx\(\s*250\s*\);/i,
		correctAnswerOutput : 'Correct!',
		incorrectAnswerOutput : 'Please try again.',
		showAnswerOutput : 'Here is the answer'
	},


];

