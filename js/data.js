var activityData = {
	headerTitle: "Tutorial 2-Preliminary Assessment Exercise",
	activityTitle: "Tic Tac Toe",
	screenCount: 2,
	firstScreen: 1,
	screen1_data: {
		welcomeTxt:"Welcome to Tic-tac-toe, the game<br> to test your understanding of what you've learned so far!",
		rulesListTxt:[
			"Read the rules below. When you are ready to start the game, click the on start button.",
			"You will be playing against the computer to get the most points by answering questions correctly and winning squares.",
			"Each correct answer is worth 100 points.",
			"If you do not answer the question correctly, the computer wins the square and 	also wins the points.",
			"Good Luck!"
		],
		buttonTxt:"Start"
	},
	screen2_data: {
		scrn2InstructText:[
		"<span style='font-family:calibri_bold;'>Player: </span>You will get 60 seconds to read and answer the question. Choose a square to proceed.",
		"Computer will automatically choose a square. </br>Select <span style='font-family:calibri_bold;'>Next</span> to proceed."
		],
		playerScoreTxt:"Player Score",
		computerScoreTxt:"Computer Score",
		initialScore: 0,
		scoreIncreement: 100,
		quesInsTitle:"Instruction:",
		quesInsContent:[
			"<span style='font-family:calibri_bold;'>Player: </span>Please select the correct option",
			"<span style='font-family:calibri_bold;'>Computer </span>will automatically select the option"
		],
		timerTxt:"Time Left:",
		timerCount:60,
		winnerTxt: [
			"Game Over!",
			"Player Won",
			"Computer Won",
			"Player Score:<span class='fnlPlyScore'></span>",
			"Computer Score:<span class='fnlCmpScore'></span>"
		],
		correctTicTac:[
			{
			type1:[0,1,2]
			},			
			{
			type2:[0,3,6]
			},
			{
			type3:[0,4,8]
			},			
			{
			type4:[1,4,7]
			},
			{
			type5:[2,4,6]
			},			
			{
			type6:[3,4,5]
			},
			{
			type7:[2,5,8]
			},			
			{
			type8:[6,7,8]
			}
		],
		scrn2BtnTxt:[
			"Next",
			"Play Again"
		],
		feedBackCrtTxt:[
			"<span style='font-family:calibri_bold;color:green;'>Correct!</span>",
			"Click <span style='font-family:calibri_bold;'>Next</span> to Proceed."
		],
		feedBackWrngTxt:[
			"<span style='font-family:calibri_bold;color:red;'>Incorrect!</span>",
			"<span style='font-family:calibri_bold;'>Correct Answer: </span><span class='ansTxt'></span>",
			"Click <span style='font-family:calibri_bold;'>Next</span> to Proceed."
		],		
		feedBackTimeUpTxt:[
			"<span style='font-family:calibri_bold;color:red;'>Time Up!</span>",
			"<span style='font-family:calibri_bold;'>Correct Answer: </span><span class='ansTxt'></span>",
			"Click <span style='font-family:calibri_bold;'>Next</span> to Proceed."
		],
		quesSet : [
			{
				question:"General strain theory was:",
				option:["developed by Robert Agnew",
				"intended to be an updated revision of Robert Merton's anomie theory",
				"concerned with pain-avoidance behavior",
				"all of the above"],
				ans:"4",
				qusSetVal:"0"
			},
			{
				question:"The three subcultures discussed by Cloward and Ohlin in their work on illegitimate opportunity structures were:",
				option:["the subculture of violence, the rebel subculture and the street corner subculture",
				"the criminal subculture, the conflict subculture and the retreatist subculture",
				"the delinquent subculture, the deviant subculture and the defiance subculture",
				"None of the above"],
				ans:"2",
				qusSetVal:"1"
			},
			{
				question:"Institutional-anomie theory was introduced by:",
				option:["Robert Merton",
				"Emile Durkheim",
				"Messner and Rosenfeld",
				"Cloward and Ohlin"],
				ans:"3",
				qusSetVal:"2"
			},
			{
				question:"Aversive and noxious stimuli are:",
				option:["the central features of Robert Merton's anomie theory",
				"part of  general strain theory",
				"only effective for behavior modification programs that employ classical conditioning methods",
				"the main contributors to anomic suicide"],
				ans:"2",
				qusSetVal:"3"
			},
			{
				question:"Social learning theory includes:",
				option:["elements of Robert Merton's anomie theory and W. I. Thomas's social disorganization theory",
				"elements of Albert Cohen's illegitimate opportunity structures and W. I. Thomas's social disorganization theory",
				"elements of Cesare Lombroso's and William Sheldon's thinking about metamorphism",
				"elements of Sutherland's differential association theory and B. F. Skinner's operant conditioning"],
				ans:"4",
				qusSetVal:"4"
			},
			{
				question:"The three main contributory factors in the path model for a revised strain theory of delinquency are:",
				option:["social disorganization, gang formation and the transmission of subcultural values",
				"status frustration, reaction formation and juvenile delinquency",
				"environmental aversion, social control and subcultural deviance",
				"internal pushes, external pulls and subcultural conflict"],
				ans:"3",
				qusSetVal:"5"
			},
			{
				question:"According to institutional-anomie theory, the social institution that presently has the greatest influence over other institutions is:",
				option:["the political system, or the polity",
				"the family",
				"the economy",
				"education"],
				ans:"3",
				qusSetVal:"6"
			},
			{
				question:"Status frustration and status deprivation are associated with:",
				option:["Albert Cohen's middle-class measuring rod",
				"Robert Merton's rebellion mode of adaptation",
				"Emile Durkheim's anomic division of labor",
				"Terrence Thornberry's interactional theory"],
				ans:"1",
				qusSetVal:"7"
			},
			{
				question:"In chronological terms, Robert Merton's anomie theory:",
				option:["came after Durkheim's anomie theory",
				"came before Cloward and Ohlin's work on illegitimate opportunity structures",
				"came before general strain theory and institutional-anomie theory",
				"all of the above"],
				ans:"4",
				qusSetVal:"8"
			}
		]
	}

};