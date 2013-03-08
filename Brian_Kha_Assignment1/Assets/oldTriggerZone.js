#pragma strict

function OnTriggerEnter(col : Collider) {
	if(col.gameObject.tag == "Player") {
	transform.FindChild("door").SendMessage("DoorCheck");
	}
}