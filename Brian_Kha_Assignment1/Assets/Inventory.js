#pragma strict
static var charge : int = 0;
var collectSound : AudioClip;
//HUD
var hudCharge : Texture2D[];
var chargeHudGUI : GUITexture;

// Generator
var meterCharge : Texture2D[];
var meter : Renderer;

function Start () {
	charge = 0;
}

function Update () {

}

function CellPickup() {
	HUDon();
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	charge++;
	chargeHudGUI.texture = hudCharge[charge];
	meter.material.mainTexture = meterCharge[charge];
}
function HUDon() {
	if(!chargeHudGUI.enabled) {
		chargeHudGUI.enabled = true;
	}
}