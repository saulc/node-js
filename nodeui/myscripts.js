
function calc() {
	var t =  document.getElementById("type").value;
    var s =  document.getElementById("scells").value; 

    var usec = document.getElementById("usec").checked;

        document.getElementById("mdc").disabled = !usec;
        document.getElementById("dc").disabled = !usec;

        document.getElementById("mda").disabled = usec;
        document.getElementById("da").disabled = usec;

    if(!usec){
    document.getElementById("md").innerHTML = (mda * p).toFixed(2);
    document.getElementById("mdc").value = mda/c;


    }
    else{
			//

    }





}
