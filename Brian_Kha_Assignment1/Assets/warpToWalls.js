#pragma strict

var levelToLoad : String;
var warpSound : AudioClip;

function OnTriggerEnter(col : Collider) {
	if(col.gameObject.tag == "Player") {
	audio.PlayOneShot(warpSound);
	//transform.FindChild("Spotlight").audio.PlayOneShot(warpSound);
	yield new WaitForSeconds (3);
	Application.LoadLevel(levelToLoad);
	}
}

@script RequireComponent(AudioSource)