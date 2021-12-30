var menuarray=["THE MERCURY PROGRAM","THE GEMINI PROGRAM","THE APOLLO PROGRAM", "SPACE SHUTTLE PROGRAM","THE COMMERCIAL CREW PROGRAM",];


   function getmenu(){
      var htmldata="";
      
      for(var i=0;i<menuarray.length;i++)
      {
          htmldata=htmldata+ menuarray[i] + "<br>"
      }
      
      document.getElementById("king").innerHTML = htmldata;
      console.log(htmldata);
   

  }
 



  function add_item(){
    var htmldata;
    var imgtags='<img id="im1" src="star.gif">';
   
    htmldata="";
    for(var i=0;i<menuarray.length;i++){
        htmldata=htmldata+imgtags+ menuarray[i]+'<br>';
    }
     document.getElementById("king1").innerHTML = htmldata;
    
}

function add_top(){
var sand=document.getElementById("input").value;
menuarray.push(sand);
add_item();
}
