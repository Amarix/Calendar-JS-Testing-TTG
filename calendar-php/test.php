<!DOCTYPE html>


<head>
<link rel="stylesheet" type="text/css" href="css4.css">

</head>

<?php include("headnav.php"); ?>


<!--////////////////////////////////////////////////////////////////////////////-->
<!--//////////////////////////__________TITLE__________/////////////////////////-->
<!--////////////////////////////////////////////////////////////////////////////-->

            <div id="welcome" style="font-size:30px; text-align:center; margin-left:26%;margin-top:60px;">Wake Forest Calendar 2016-2017</div>

<p><div id="wrapper" style="display:table;width:95%;margin:0 auto;margin-bottom:0;margin-top:-30px;border-spacing:40px;">
    
    




<!--////////////////////////////////////////////////////////////////////////////-->
<!--////////////////////__________REGISTRATION BOX__________////////////////////-->
<!--////////////////////////////////////////////////////////////////////////////-->


<?php include("registrationbox.php"); ?>


</td>


<td style="vertical-align:top;">

<!--////////////////////////////////////////////////////////////////////////////-->
<!--///////////////////////__________LEFT TEXT__________////////////////////////-->
<!--////////////////////////////////////////////////////////////////////////////-->


           <div style="width:auto;margin:30px;margin-top:0px;position:relative;text-align:center;">
<p><i><font style="font-size:20px;">(Click the age categories below for class details!)</i></font>




<div id="showInfo"><p><a style="cursor:pointer"><font style="font-size:18px;"><b>Preschool Classes</b></font></a></div></p>

<p><div id="classInfo" style="display:none">
<p><b>Tumble Babies (walking - 24 months)</b>
    <br />Monday 8:30
    <br />Tuesday 9:30
    <br />Saturday 8:30</p>

<p><b>Tiny Tumblers (2 year olds)</b>
    <br />Monday 9:30
    <br />Tuesday 8:30
    <br />Thursday 10:30
    <br />Saturday 9:30</p>

<p><b>Kinder Tumblers (3 year olds)</b>
    <br />Monday 10:30
    <br />Tuesday 11:30
    <br />Wednesday 3:30
    <br />Thursday 5:30
    <br />Saturday 9:30
</p>

<p><b>Super Tumblers (4-5 year olds)</b>
    <br />Monday 11:30 & 5:30
    <br />Tuesday 10:30
    <br />Wednesday 4:30 
    <br />Thursday 9:30 & 6:30
    <br />Saturday 10:30</p>

</div>








<div id="showInfo2"><p><a style="cursor:pointer"><font style="font-size:18px;"><b>Gymnastics Classes (Ages 5 and up)</b></font></a></div></p>


<p><div id="classInfo2" style="display:none">
<p><b>Girls' Gymnastics</b>
    <br />Monday 3:30, 4:30, 5:30 & 6:30
    <br />Tuesday 6:30
    <br />Wednesday 3:30, 4:30 & 5:30
    <br />Thursday 11:30 & 6:30
    <br />Saturday 11:30 & 12:30</p>

<p><b>Boys' Gymnastics</b>
    <br />Wednesday 6:30
    <br />Thursday 4:30
</p>

<p><b>Advanced Girls' Gymnastics</b>

    <br />Monday 4:30
    <br />Thursday 3:30 & 5:30</p>
     
</div>








<div id="showInfo3"><p><a style="cursor:pointer"><font style="font-size:18px;"><b>Tumbling (Ages 5 and up)</b></font></a></div></p>


<p><div id="classInfo3" style="display:none">
<p><b>Green Tumbling</b>
    <br />Monday 3:30, 5:30 & 7:30
    <br />Tuesday 6:30
    <br />Wednesday 5:30 & 6:30
    <br />Thursday 3:30 & 4:30
    <br />Saturday 10:30 & 12:30</p>

<p><b>Blue Tumbling</b>
    <br />Monday 6:30
    <br />Wednesday 3:30 & 6:30
    <br />Thursday 5:30 & 6:30</p>

<p><b>Black Tumbling</b>
    <br />Tuesday 7:30</p>

</div>





	



<div id="showInfo4"><p><a style="cursor:pointer"><font style="font-size:18px;"><b>Specialty Classes (Ages 5 and up)</b></font></a></div></p>


<p><div id="classInfo4" style="display:none">
<p><b>Cheernastics</b>
    <br />Monday 6:30
    <br />Thursday 4:30 & 7:30
</p>

<p><b>Parkour</b>
<br /><i>Ages 7 & under</i>
    <br />Saturday 11:30
    <br />Wednesday 4:30
</p>

<p><i>Ages 8 & up</i>
    <br />Tuesday	6:30
    <br />Wednesday 5:30
</p>

<p><b>Little Ninjas</b>
<br /><i>Ages 7 & under</i>
    <br />Wednesday 3:30
</p>

<p><i>Ages 8 and up</i>
    <br />Monday 4:30
</p>


<p><b>STARS</b>
    <br />(See front desk)
</p>

<p><b>Strength & Flexibility</b>
    <br />Monday 7:30
</p>
</div>



</div></p>




<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=503369"></script>

     
</div>
</div>

 <div style="vertical-align:bottom;text-align:center;background: rgba(75, 50, 255, 0.6);"><font size=2px>All content &#169;The Tumble Gym 2014. All rights reserved.</font size></div>


</body>




<script src="http://code.jquery.com/jquery-latest.js"></script>

<script type="text/javascript">

$(document).ready(function() {
$("#classinfo").hide();
$("#showInfo").click( function(){ 
$("#classInfo").slideToggle(500); 
});
});

</script>

<script type="text/javascript">

$(document).ready(function() {
$("#classinfo2").hide();
$("#showInfo2").click( function(){ 
$("#classInfo2").slideToggle(500); 
});
});

</script>

<script type="text/javascript">

$(document).ready(function() {
$("#classinfo3").hide();
$("#showInfo3").click( function(){ 
$("#classInfo3").slideToggle(500); 
});
});

</script>

<script type="text/javascript">

$(document).ready(function() {
$("#classinfo4").hide();
$("#showInfo4").click( function(){ 
$("#classInfo4").slideToggle(500); 
});
});

</script>



