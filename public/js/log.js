// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });

function validateform(){
		var user=document.myform.user.value;
		var password=document.myform.password.value;
		var cpassword = document.myform.cpassword.value;

		if (user==null || user==""){
			alert("Username can't be blank");
			return false;
		}
		var x=document.myform.email.value;
		var atposition=x.indexOf("@");
		var dotposition=x.lastIndexOf(".");

		if (atposition<1 ||dotposition<atposition+2 || dotposition+2>=x.length) {
			alert("Please enter a valid email address");
			return false;
		}
		
		if (password.length<8) {
			alert("Password must be at least 8 characters long.");
			return false;
		}else if (cpassword.length<8 ) {
			alert("Confirm Password must be at least 8 characters long.");
			return false;
		}

		
	}

function login(){
	var email=document.form.email.value;
	var password=document.form.password.value;

	if (email==null || email=="" || password==null || password=="") {
		alert("Either the username or password you entered is incorrect.\nPlease try again.");
		form.username.focus();
	}else{
		self.location.href = page;
	}
}