document.getElementById("form1").onsubmit=function() {
	   
	   
    skill = parseInt(document.querySelector('input[name = "skill"]:checked').value);  
   
   time = parseInt(document.querySelector('input[name = "time"]:checked').value);
    
   guests = parseInt(document.querySelector('input[name = "guests"]:checked').value);
    
 fruits = parseInt(document.querySelector('input[name = "fruits"]:checked').value);
 
    total= skill + time + guests + fruits;
    
   
    document.getElementById("answer").innerHTML = total;	   

    if(total < 5) {
document.getElementById("answer2").innerHTML = "We would recommend to try out the Quick & Easy Menu!";
}

if(total >=5 && total < 10) {
document.getElementById("answer2").innerHTML = "You will LOVE the Summery Picnic Menu!";
}
 
 if(total >=10) {
document.getElementById("answer2").innerHTML = "The Fancy Celebration Menu seems perfect for you tonight.";
}   
    
    return false; // required to not refresh the page; just leave this here
    }// end the submit function