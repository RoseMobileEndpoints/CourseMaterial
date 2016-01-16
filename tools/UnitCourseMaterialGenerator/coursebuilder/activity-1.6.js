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
	"<b>1.</b> What does JSON stand for?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["An educational non-profit organization encouraging K-12 students to pursue STEM careers.", false, "Try again. That's JASON." ],
				["JavaScript Object Notation", true, "Correct. " ],
				["JavaScript On Netbeans", false, "Try again. Although that happens to be what you get if Google completes the phrase 'JavaScript on n...'" ],
		]
	},
	"<br><br>",
	"<b>2.</b> Which annotation put before the key field will tell Jackson to ignore the key stored in our model?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["@JsonIgnore", true, "Correct. " ],
				["@JacksonIgnoreKey", false, "Try again. Good guess." ],
				["@IgnoreField", false, "Try again. " ],
				["@JsonProperty('ignore')", false, "Try again. You can use @JsonProperty to map Android Java field names to firebase JSON field names if they differ. We didn't need to since we chose the same names for our fields." ],
		]
	},
	"<br><br>",
	"<b>3.</b> What does push() do? (Choose all that apply.)",
	{
		questionType : "multiple choice group",
		questionsList : [
				{
					questionHTML : "",
					choices : [ "Creates a new key", "Returns a Firebase reference to that key", "Adds a new item to the Firebase stack"],
					correctIndex : [0,1]
				}
				],
		allCorrectOutput : "Well done!",
		someIncorrectOutput : "Please ignore the previous feedback line. Then try again.",
	},
	"<br><br>",
	"<b>4.</b> What type parameter does setValue() take?<br>",
	{
		questionType : "multiple choice",
		choices : [
				["A HashMap", false, "Try again. It can, but that's not what we used, because another way is more convenient." ],
				["A MovieQuote model object", true, "Correct. Good. Jackson then serializes the object into json." ],
				["Object", false, "Try again. It can, but would need to be typecast to a map. See the first response." ],
		]
	},
];
