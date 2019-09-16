<!DOCTYPE html>


<head>
<link rel="stylesheet" type="text/css" href="css4.css">


<script async src="http://mobileinventor.com/v5/library/mobileDetector.php?appname=The_Tumble_Gym" type="text/javascript"></script>

</head>




<?php include("headnav.php"); ?>


<script>
function imag() {
  var x = 1;
  var c = '\<p><center><img src="http://thetumblegym.com/panorama.jpg" style="width:93%; margin-top:40px; border-radius:25px;"\/\></center></p>';
  var d = '\<p><center><img src="http://thetumblegym.com/fallbanner.png" style="width:80%; margin-top:10px; margin-bottom:-40px;"\/\></center></p>';
  var current= new Date()
  var July=current.getMonth()
  var Week=current.getDate()
  var CurrYear=current.getFullYear()

  var arr = [];
  for (var i = 0; i < x; i++) {
    if ((July=7) && (Week >= 4 && Week <=9) && (CurrYear=2018)) arr.push(d);
    else arr.push(c);
    document.getElementById("demo").innerHTML = arr;
  }

}

</script>

<body onload="imag()">


<!--////////////////////////////////////////////////////////////////////////////-->
<!--//////////////////////////___________PIC___________/////////////////////////-->
<!--////////////////////////////////////////////////////////////////////////////-->




<table style="margin-left:auto; margin-right:auto; text-align:left;">
   <tr><td>

<div id="demo"></div>


<!--<p><center><img id="pano" src="panorama.jpg" style="width:93%; margin-top:40px; border-radius:25px;">-->


<div id="wrapper" style="display:block;width:95%;margin:auto;border-spacing:50px;">


<!--////////////////////////////////////////////////////////////////////////////-->
<!--////////////////////__________REGISTRATION BOX__________////////////////////-->
<!--////////////////////////////////////////////////////////////////////////////-->


<?php include("registrationbox.php"); ?>



<!--////////////////////////////////////////////////////////////////////////////-->
<!--///////////////////////_________GYM UPDATES_________////////////////////////-->
<!--////////////////////////////////////////////////////////////////////////////-->

<div style="vertical-align:top; display:table-cell; z-index:2; border-radius:25px; background: rgba(75, 50, 255, 0.6); padding:30px 30px 40px 30px; width:30%;">
<p class="center"><font style="font-size:22px;">Gym Updates</font></p>

<!--FOR JENNIFER: GYM UPDATES TEXT: <p> is to start a new paragraph, which will put some space between the old paragraph and the new one; <br> is to put something on the next line down without creating space in between. <a href="URL here">link text here</a> is the snippet of code for creating links. <i>italic text here</i> is for italicizing text; <b>bold text here</b> is the same for bold.--> 
<p>

<!--Change the text immediately below this comment line to change the Gym Updates box contents.-->

No classes the week of July 4th, but Summer Camp & Open Gym all day!! 

</b>
</a>


<!--THIS IS THE END OF THE GYM UPDATES TEXT-->

</div>

<!--////////////////////////////////////////////////////////////////////////////-->
<!--///////////////////////__________LEFT BOX___________////////////////////////-->
<!--////////////////////////////////////////////////////////////////////////////-->
<div style="vertical-align:top; display:table-cell; z-index:2; border-radius:30px; background: rgba(75, 50, 255, 0.6); padding:30px 30px 40px 30px; width:30%;">
                  <p class="center"><font style="font-size:22px;">Gym Times</font>
                  <p><b>Open Gym:</b>


                  <p><b>Falls River</b>
                     <br>Mon, Wed, Thurs 12:30PM- 3:30PM
                     <br>Fri 9:30AM-4:30PM
                     <br>Sun 11:30AM-4:30PM</p>

                     <p><b>Wake Forest</b>
                     <br>Tues/Wed/Fri 9:30AM- 3:30PM
                     <br>Fri 6:30-8:30 PM
                     <br>Sun 11:30 AM-4:30 PM</p>


                  <p><b>Chapel Hill</b>
                     <br>Mon/Tues/Wed/Fri 12:00 PM- 1:00PM
                     <br>Sun 12:00-5:00 PM


                  <p><b>Lake Boone Trail</b> 
                     <br>Tues/Wed 10:30-3:30 PM
                     <br>Fri 9:30 AM-3:30 PM 
                     <br>Sun 11:30 AM-4:30 PM</p>


                  <p><b>Holly Springs</b> 
                     <br>Mon/Tues/Thurs 12:30 PM-3:30 PM
                     <br>Wed/Fri 9:30 AM- 4:00PM
                     <br>Sun 11:30 AM-4:30 PM</p>


                  <p><b>Strickland Road</b> 
                     <br>Wed 9:30 AM-3:30 PM
                     <br>Fri 9:30 AM-4:30 PM
                     <br>Sun 11:30 AM-4:30 PM





</div>

</td></tr></table>

     
</div>




<?php include("footer.php"); ?>




</body>




