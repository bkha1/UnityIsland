#pragma strict

var bullet : Rigidbody;

var power : float = 1500;

var moveSpeed : float = 5;

var currentTime : float;
var ray : Ray;
var hit : RaycastHit;

function Start() {
	currentTime = Time.time;
}

function Update () {

 currentTime += Time.deltaTime;
 
 //if (currentTime > 3 && 

 var h : float = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;

 var v : float = Input.GetAxis("Vertical") * Time.deltaTime * moveSpeed;

 transform.Translate(h, v, 0);

 if(Input.GetButtonUp("Fire1")) {

  var instance: Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
  instance.name = "bullet";
  var fwd: Vector3 = transform.TransformDirection(Vector3.forward);
  
  ray = Camera.main.ScreenPointToRay(Input.mousePosition);
  
  instance.AddForce(ray.direction * power);
  /*if (Physics.Raycast(ray, out hit, 100.0f) && Input.GetMouseButtonDown(0)) {
  	
  }

  instance.AddForce(fwd * power);*/

 }

}