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
	"<b>1.</b> Which of these is NOT a model object within the GradeRecorder Firebase?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Owner", false, "Try again. " ],
				["Course", false, "Try again. " ],
				["Assignment", false, "Try again. " ],
				["GradeEntry", false, "Try again. " ],
				["Assistant", true, "Correct. Teaching assistants are just owners, just like the instructors." ],
		]
	},
	"<br><br>",
	"<b>2.</b> A single course can have multiple assignments. How is this represented in the Firebase?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["There is a table that maps course keys to assignment keys; we then do a join to get all the assignments for a course", false, "Try again. Sorry, Firebase uses a no-SQL database, so there are no joins." ],
				["Each assignment stores the key of its course", true, "Correct. That allows us to write a Query for only the assignments that have that key." ],
				["Each course has a set of keys of its assignments", false, "Try again. Good idea, and that's what we did to relate courses and owners. But what we did here allows for simpler Firebase code." ],
		]
	},
	"<br><br>",
	"<b>3.</b> If a student in the GradeRecorder app takes multiple courses, are they represented uniquely in Firebase?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Yes", false, "Try again. Unfortunately not. We make the simplifying assumption that since this is an instructor-centric app, then the students in one course are considered distinct from those in another course. So a student is only associated with a single course." ],
				["No", true, "Correct. We make the simplifying assumption that since this is an instructor-centric app, then the students in one course are considered distinct from those in another course. So a student is only associated with a single course." ],
		]
	},
];
