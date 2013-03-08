#pragma strict

var beep : AudioClip;
var menuSkin : GUISkin;
var menuArea : Rect;
private var menuAreaNormalized : Rect;
var playButton : Rect;
var instructionsButton : Rect;
var quitButton : Rect;
var instructions : Rect;
private var menuPage : String = "main";
private var mainSceneName : String = "Brian_Kha_A1";


function Start () {
	menuAreaNormalized = Rect(menuArea.x * Screen.width - (menuArea.width * 0.5f), 
	menuArea.y * Screen.height - (menuArea.height * 0.5f), 
	menuArea.width, menuArea.height);
}

function OnGUI() {

 GUI.skin = menuSkin;

 GUI.BeginGroup (menuAreaNormalized);

 if(menuPage == "main") {

  

  if(Application.CanStreamedLevelBeLoaded(mainSceneName)) {

   if(GUI.Button(Rect(playButton),"Play")) {

    ButtonAction(mainSceneName);

   }

  }  else {

   var percentLoaded : float = Application.GetStreamProgressForLevel(1) + 99;

   GUI.Box(new Rect(playButton), "Loading..." + percentLoaded.ToString("f0") + "% Loaded.");

  }

  if(GUI.Button(Rect(instructionsButton), "Instructions")) {

   audio.PlayOneShot(beep);

   menuPage = "instructions";

  }

  //This checks if we are running on the desktop, and if so, shows the quit button

  if(Application.platform != RuntimePlatform.OSXWebPlayer && Application.platform != RuntimePlatform.WindowsWebPlayer) {

   if(GUI.Button(Rect(quitButton), "Quit")) {

    ButtonAction("quit");

   }

  }

 }  else if (menuPage == "instructions") {

  GUI.Label(Rect(instructions), 

  "You awake on a mysterious island...Find a way to get into the outpost or face certain doom!");

  if(GUI.Button(Rect(quitButton), "Back")){

   audio.PlayOneShot(beep);

   menuPage="main";

  }

 }

 GUI.EndGroup();

}

function ButtonAction(levelName : String) {

 audio.PlayOneShot(beep);

 yield new WaitForSeconds(0.35f);

 if(levelName != "quit") {

  Application.LoadLevel(levelName);

 }  else {

  Application.Quit();

  Debug.Log("Have Quit");

 }

}

@script RequireComponent(AudioSource)