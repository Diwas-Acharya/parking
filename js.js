function valid(){
	var x=document.getElementById('name').value;
	var y=document.getElementById('id').value;
	var z=document.getElementById('date').value;
if (x=="" || y=="" || z==""){
	alert("please fill all the field");
	return false;
}
if(y.length<4 || y.length>4){
	alert("Please enter 4 digit Employee id");
	return false;
}

return true;
}