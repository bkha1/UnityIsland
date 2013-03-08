var lockedSound :AudioClip;

function OnTriggerEnter(col : Collider) {
      if(col.gameObject.tag == "Player") {
	if(Inventory.charge == 4) {
		transform.FindChild("door").SendMessage("DoorCheck");

	}  else {
		transform.FindChild("door").audio.PlayOneShot(lockedSound);
	}
  }
}