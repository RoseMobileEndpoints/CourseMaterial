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
	"<b>1.</b> Which class does MovieQuote directly extend? (Big hint: it's a class inside the Endpoints Proto Datastore code you downloaded.)<br>",
	{
		questionType : "multiple choice",
		choices : [
				["EndpointsModel", true, "Correct. " ],
				["ndb.model", false, "Try again. EndpointsModel extends ndb.model, so that is the 'super-super' class." ],
				["GoogleAppEngineModel", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> What does ndb stand for?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Non-directional beacon", false, "Try again. True, but not in this context. Did you look this up in wikipedia?" ],
				["No-SQL database", true, "Correct. " ],
				["Nucleic acid database", false, "Try again. True, but not in this context." ],
		]
	},
	"<br><br>",
	"<b>3.</b> We used all these property types in MovieQuotes except which one?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["DateTimeProperty", false, "Try again. We used that for the time the movie was last touched." ],
				["IntegerProperty", true, "Correct. " ],
				["StringProperty", false, "Try again. We used two string properties" ],
				["None: we used them all", false, "Try again. " ],
		]
	},
];
