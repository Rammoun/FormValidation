document.getElementById("form-sub").addEventListener("click", verify, false );
document.getElementById("full-name").focus();
function verify(e){
	var email=document.getElementById("email").value; 
	var pwd=document.getElementById("pwd").value;
	var mailpat=/^[^.][a-zA-Z0-9!#$%&'*+-/=?^_`{|}~][^..]+@[\w\d.-_~]+[^!#$%&'*+/=?^"`{@|}..].[a-z]{2,4}[^\-]$/g;
	var pwdpat=/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/g;
	var mtchmail=email.match(mailpat);
	var mtchpwd=pwd.match(pwdpat);
	if ((document.getElementById("full-name").value=="")||(document.getElementById("email").value=="")||(document.getElementById("address").value=="")||(document.getElementById("pwd").value=="")){
		window.alert("One or more fields are empty, please check");
		e.preventDefault();
	}
	else if (mtchmail==null){
		window.alert("Email address should be like this example: abc123@domain.com, please verify")
		e.preventDefault();
		document.getElementById("email").focus();
	}
	else if (mtchpwd==null){
		window.alert("Password should be at least eight characters long and contain lowercase letters and at least one uppercase letter, one number and one special charecter, example: abC1/d!E please verify")
		e.preventDefault();
		document.getElementById("pwd").focus();
	}
	else window.alert("All form fields are valid!")		
}