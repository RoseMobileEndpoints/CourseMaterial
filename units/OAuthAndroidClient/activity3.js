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
	"<b>1.</b> What is the only change we did NOT have to make to use authentication?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["Make sure the package name matches what you used to generate the Android client id", false, "Try again. " ],
				["Add the client id of the Android client to the credentials object", true, "Correct. " ],
				["Add the client id of the web client to the credentials object", false, "Try again. " ],
				["Add permissions for credentials, internet, and account pickers to the manifest", false, "Try again. " ],
				["Use the credentials when building the service", false, "Try again. " ],
		]
	},
	"<br><br>",
	"<b>2.</b> Which client ID do we need to add to the credentials object?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["The id of the Android client", false, "Try again. This id isn't needed because it was generated from the package name and SHA-1 fingerprint." ],
				["The id of the web client", true, "Correct. This is because it is used for the audience." ],
		]
	},
];
