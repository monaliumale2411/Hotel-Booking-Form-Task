const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

const today = new Date().toISOString().split("T")[0];

checkin.setAttribute("min", today);
checkout.setAttribute("min", today);

checkin.addEventListener("change", function(){

checkout.value="";
checkout.setAttribute("min", checkin.value);

});

form.addEventListener("submit", function(e){

e.preventDefault();

let valid=true;

document.querySelectorAll(".error").forEach(el => el.innerHTML="");
document.getElementById("successMessage").innerHTML="";

if(checkin.value===""){
document.getElementById("checkinError").innerHTML="Check-in date required";
valid=false;
}

if(checkout.value===""){
document.getElementById("checkoutError").innerHTML="Check-out date required";
valid=false;
}

if(checkin.value && checkout.value){

if(new Date(checkout.value)<=new Date(checkin.value)){
document.getElementById("checkoutError").innerHTML="Check-out must be after Check-in";
valid=false;
}

}

if(document.getElementById("roomType").value===""){
document.getElementById("roomError").innerHTML="Select room type";
valid=false;
}

const guests=document.getElementById("guests").value;

if(guests==="" || guests<=0){
document.getElementById("guestError").innerHTML="Enter valid guest number";
valid=false;
}

if(valid){

document.getElementById("successMessage").innerHTML="Booking Successful!";
form.reset();

}

});