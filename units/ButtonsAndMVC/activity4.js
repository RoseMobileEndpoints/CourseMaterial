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
    '<b>1.</b> Consider the model-view-controller (MVC) design pattern. By using xml layouts, you are separating which two?<br>',
	{
		questionType : 'multiple choice',
		choices : [
				['M&V', false, 'No. The xml is the view, but it is our responsibility to separate out the model from the controller if needed.' ],
				['M&C', false, 'No. That is our job.' ],
				['V&C', true, 'Correct.' ]
				]	
	},

    '<br><br>',
    '<b>2.</b> Which two tend to get put together in simple apps?<br>',
	{
		questionType : 'multiple choice',
		choices : [
				['M&V', false, 'No. The view is separated by using xml layouts.' ],
				['M&C', true, 'Correct. Consider HelloButton: the only thing that would go in the model is the click counter.'],
				['V&C', false, 'No. These are separated by using xml layouts.' ]
				]	
	},

    '<br><br>',
    '<b>3.</b> Which model method should you call to get the game state string?<br>',
	{
		questionType : 'multiple choice',
		choices : [
				['stringForGameState()', true, 'Correct.' ],
				['ticTacToeState()', false, 'No. Look back at the given code.' ],
				['getGameStateString()', false, 'No, although that sounds reasonable. Look back at the given code.' ]]
	},
	
    '<br><br>',
    '<b>4.</b> Which model method should you call when a button is pressed?<br>',
	{
		questionType : 'multiple choice',
		choices : [
				['setOnClickListener()', false, 'No. Later we will use that to listen to button clicks.' ],
				['buttonPressedForModel()', false, 'No. Good guess. But do not guess. Look at the code.' ],
				['pressedButtonALocation()', true, 'Correct.']]
	}	
];

