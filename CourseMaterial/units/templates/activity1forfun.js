var activity = [

    '<b>1.</b> Q text<br>',
    
	{
		questionType : 'multiple choice',
		choices : [
				['Nothing', true, 'No, there was something.' ],
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

    '<b>3.</b> Choose all that apply.<br>',
	{
		questionType : 'multiple choice group',
		questionsList : [
				{
					questionHTML : '<b>a.</b> What can you find in the AndroidManifest.xml file? ',
					choices : [ 'The package name', 'The Activity that will be launched', 'What versions of Android your app supports' ],
					correctIndex : [0,1,2]
				}
				],
		allCorrectOutput : 'Well done!',
		someIncorrectOutput : 'Please try again. Hint: look back at that file for each of these.',
	}
];

