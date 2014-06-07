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

    '<b>1.</b> When creating a new project, I would like you to add what info to the name of each project?<br>',
    
	{
		questionType : 'multiple choice',
		choices : [
				['Nothing', false, 'No, there was something.' ],
				['Your name or initials', true, 'Yes, that will help me much while grading!' ],
				['The name of the CEO of Google', false, 'Interesting, but seeing the name Larry Page on your app is not helpful to me.' ]
				]	
	},

    '<br><br>',
    '<b>2.</b> What naming convention is used for packages?<br>',
    
	{
		questionType : 'multiple choice',
		choices : [
				['Always use just your initials', false, 'Nope. That was for the last question.' ],
				['use findViewById', false, 'No, but we will learn about that in an upcoming video!' ],
				['reverse URL', true, 'Exactly. Please use something like edu.rosehulman.yourusername.theappname' ]]
	},
	
    '<br><br>',

    '<b>3.</b> What can you find in the AndroidManifest.xml file? (Choose all that apply.)<br>',
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '',
					choices : [ 'The package name', 'The Activity that will be launched', 'What versions of Android your app supports' ],
					correctIndex : [0,1,2]
				}
				],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hint: look back at that file for each of these.',
	}
];

