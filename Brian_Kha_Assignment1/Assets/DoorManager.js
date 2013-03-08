#pragma strict
private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0f;
var doorOpenTime : float = 3.0f;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;

function Start () {
	doorTimer = 0.0f;
}

function Update () {
	if(doorIsOpen) {
		doorTimer += Time.deltaTime;
		if(doorTimer > doorOpenTime) {
			Door(doorShutSound, false, "doorshut");
			doorTimer = 0.0f;
		}
	}
}

function DoorCheck() {
	if(!doorIsOpen) {
		Door(doorOpenSound, true, "dooropen");
	}
}

function Door(aClip : AudioClip, openCheck : boolean, animName : String) {
	audio.PlayOneShot(aClip);
	doorIsOpen = openCheck;
	transform.parent.gameObject.animation.Play(animName);
}