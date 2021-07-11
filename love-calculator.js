var firebaseConfig = {
    apiKey: "AIzaSyCXyLelGhJD2F4IpUXouJp8GZeq8rZKR0U",
    authDomain: "love-calc-abin.firebaseapp.com",
    databaseURL: "https://love-calc-abin-default-rtdb.firebaseio.com",
    projectId: "love-calc-abin",
    storageBucket: "love-calc-abin.appspot.com",
    messagingSenderId: "530983451208",
    appId: "1:530983451208:web:1696563e4e8145a171367d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function element(){
var Uname = document.getElementById("Uname").value
var Lname = document.getElementById("Lname").value
console.log(Uname)
console.log(Lname)

				if(Uname =="") {
								document.getElementById("sh").innerHTML="Enter Your Name";
				}else  {
								
				if(Lname =="") { 
								
				
								document.getElementById("sh").innerHTML="Enter Your Lover Name";
				}else{
								
				if(Uname == Lname) {
				document.getElementById("sh").innerHTML="Enter a Valid Name"
}else{
	document.getElementById("fst").innerHTML = '<u><h1 id="names"><span id="URname"></span><i class="fa fa-heart" aria-hidden="true" style="color:#ff000a;text-shadow:2px 2px #f800ff; padding:9px; font-size:50px;"></i><span id="LRname"></span></h1></u><h2 id="2head">To Know The Depth Of Love Between You And Your Lover Click The <i>Share To View </i> Button And Share This To 5 Chats </h2><br><div id="txt"></div><div id="nm"><button onclick="getRandomNumber()" class="btn btn-primary" id="button"><b>Tap To View</b></button></div><br><h2 id="good"></h2>';
	
var database = firebase.database();
var ref = firebase.database().ref("users");
ref.once("value")
  .then(function(snapshot) {
    let number = snapshot.numChildren();
    console.log(number)
var number1 = number+1

  
  				
console.log(number1)
   				var title = 
   				
   				database.ref("users/"+number1).set({
   				   
   				   UName:Uname,
   				   LName:Lname
   				});
   })
   
   
        }
	
	document.getElementById("URname").innerHTML =Uname;
	document.getElementById("LRname").innerHTML =Lname;
	
	}
			}}

	
function getRandomNumber(){

  var text = Math.floor(Math.random() * 100); 
 
location.replace("whatsapp://send?text=*Do You Want To Know The Depth Of Love ❤️  Between You And Your Lover💖💖......?💞*%0a %0a*Click The Link Below And Check It Out👩‍❤️‍💋‍👨👩‍❤️‍👨......*%0a %0a %0a*http://bit.ly/love-calculater-for-you*")
 
  setTimeout(function(){ 
  document.getElementById("nm").innerHTML = text+"%"; document.getElementById("nm").style.backgroundColor="#aafff4";

document.getElementById("nm").style.border="4px solid #ff0088";
  document.getElementById("nm").style.borderRadius="16px";
  
  if(text<"50") {
				document.getElementById("good").innerHTML = "BAD";
				document.getElementById("good").style.color="#ff0a00";

document.getElementById("good").style.textShadow ="2px 2px white"
}

if(text > "50" && text  < "70" ) {
				document.getElementById("good").innerHTML = "medium";
				
				document.getElementById("good").style.color = "#ff9d00";
				document.getElementById("good").style.textShadow ="2px 2px white"
}
				if(text>"70") {
				document.getElementById("good").innerHTML = "GOOD";
				document.getElementById("good").style.color = "#00ff81";
				document.getElementById("good").style.textShadow ="2px 2px white"
}
				

if(text>"90") {
				document.getElementById("good").innerHTML = "Extremely Good";
				document.getElementById("good").style.color = "#00ff81";
				document.getElementById("good").style.textShadow ="2px 2px white"
}


  
   }, 5000)
  
   }
