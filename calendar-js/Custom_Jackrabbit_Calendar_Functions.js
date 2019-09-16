// Value for jackrabbit data pool ID
var jackrabbitID;

// Value for raw data from jackrabbit
var rawData;

// Values of parsed event data seperated by age:
var ageOne = [];
var ageTwo = [];
var ageThree = [];
var ageFour = [];
var ageFive = [];
var schoolAge = [];

document.addEventListener('DOMContentLoaded', function() {
    
    // Gathers custom location data from the custom element located at the top of each html page.
    const JS_Data_Element = document.querySelector('#TG_Custom_Data_Element');
 
    // Sets title of schedule using title value in custom element.
    document.getElementById("schedule_title_container").innerHTML = JS_Data_Element.dataset.title;
    // Sets origin ID for jackrabbit using identifier value in custom element.
    jackrabbitID = JS_Data_Element.dataset.identifier;

    // Gather data from Jackrabbit at specified location ID
    $.post('https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJson', {
    	"orgid": jackrabbitID // This id specifies which Tumblegym location will be accessed.
    }).done(function (resp) {
    	rawData = JSON.parse(JSON.stringify(resp.rows));
    	
    	console.log(rawData);
    
    	// Iterates through raw data and collects values into specific variables
    	for (var i = 0; i < rawData.length; i++) {
    		var eventStartDate = rawData[i]["start_date"];
    		var eventEndDate = rawData[i]["end_date"];
    		var cat1 = rawData[i]["category1"];
    		var eventName = rawData[i]["name"];
    		var regDate = rawData[i]["reg_start_date"];
    		var open = rawData[i]["openings"]["calculated_openings"]; 
    		var sTime = rawData[i]["start_time"];
    		var eTime = rawData[i]["end_time"];
    		var regLink = rawData[i]["online_reg_link"];
    		var eventFee = "$"+rawData[i]["tuition"]["fee"];
    		var desc = rawData[i]["description"];
    
    		// An array for days of the week.
    		// Value 0 represents Sunday. Value 6 represents Saturday.
    		// The events will be listed under each day of the week they occur.
    		var dOW = [];
    		// Array with day names to display for repeating events.
    		var dayNames = [];
    
    		if (rawData[i]["meeting_days"]["sun"] == true) {
    			dOW.push("0");
    			dayNames.push("Sun");
    		}
    		if (rawData[i]["meeting_days"]["mon"] == true) {
    			dOW.push("1");
    			dayNames.push("Mon");
    		}
    		if (rawData[i]["meeting_days"]["tue"] == true) {
    			dOW.push("2");
    			dayNames.push("Tue");
    		}
    		if (rawData[i]["meeting_days"]["wed"] == true) {
    			dOW.push("3");
    			dayNames.push("Wed");
    		}
    		if (rawData[i]["meeting_days"]["thu"] == true) {
    			dOW.push("4");
    			dayNames.push("Thu");
    		}
    		if (rawData[i]["meeting_days"]["fri"] == true) {
    			dOW.push("5");
    			dayNames.push("Fri");
    		}
    		if (rawData[i]["meeting_days"]["sat"] == true) {
    			dOW.push("6");
    			dayNames.push("Sat");
    		}
    		
    		// Parses start and end time values and converts them from a 24 hour clock to a 
    		// 12 hour clock with AM and PM values for readability.
    		sTime = sTime.split(':');
      		if ((sTime[0].charAt(0) == 1 && sTime[0].charAt(1) > 2) || (sTime[0].charAt(0) == 2)) {
        		sTime = (sTime[0] - 12) + ':' + sTime[1] + ' PM';
      		} else {
        		sTime = sTime.join(':') + ' AM';
      		}
    		
    		eTime = eTime.split(':');
    		if ((eTime[0].charAt(0) == 1 && eTime[0].charAt(1) > 2) || (eTime[0].charAt(0) == 2)) {
        		eTime = (eTime[0] - 12) + ':' + eTime[1] + ' PM';
      		} else {
        		eTime = eTime.join(':') + ' AM';
      		}
      		
      		// Compile new event object
      		var eventObject = {
    			name: eventName,
    			cat: cat1,
    			startDate: eventStartDate,
    			endDate: eventEndDate,
    			startTime: sTime,
    			endTime: eTime,
    			regURL: regLink,
    			Tuition: eventFee,
    			openings: open,
    			registrationDate: regDate,
    			Descript: desc,
    			daysOW: dOW,
    			repeatingDays: dayNames
    		};
    		
    		// Keep event name lowercase until after it's added to the array object so it displays correctly for the user.
    		// After it's been added to the object set the value to uppercase so that an accidental lowercase or uppercase letter
    		// stored in the name value will not result in the event being omitted from the list displayed to the user.
    		eventName = eventName.toUpperCase();
    		
    		// Pushes event into the corrisponding age array if there are spots still available.
    		if (open > 0){
        		if (eventName.indexOf("TUMBLE BABIES")!= -1){
        			ageOne.push(eventObject);
        		}
        		if (eventName.indexOf("TINY TUMBLERS")!= -1){
        			ageTwo.push(eventObject);
        		}
        		if (eventName.indexOf("KINDER TUMBLERS")!= -1){
        			ageThree.push(eventObject);
        		}
        		if (eventName.indexOf("SUPER TUMBLERS")!= -1){
        			ageFive.push(eventObject);
        			ageFour.push(eventObject);
        		}
        		if (eventName.indexOf("ADVANCED GYMNASTICS")!= -1 || eventName.indexOf("CHEERNASTICS") != -1 || eventName.indexOf("GREEN TUMBLING") != -1 || eventName.indexOf("GYMNASTICS") != -1 || eventName.indexOf("PARKOUR") != -1){
        			schoolAge.push(eventObject);
        			ageFive.push(eventObject);
        		}
        		if (eventName.indexOf("BLUE TUMBLING") != -1 || eventName.indexOf("BLACK TUMBLING") != -1 || eventName.indexOf("STARS") != -1 || eventName.indexOf("ADVANCED PARKOUR") != -1){
        			schoolAge.push(eventObject);
        		}
        		if (eventName.indexOf("FUN SKOOL") != -1){
        			schoolAge.push(eventObject);
        			ageFive.push(eventObject);
        			ageFour.push(eventObject);
        			ageThree.push(eventObject);
        		}
        		if (eventName.indexOf("BIRTHDAY") != -1){
        			schoolAge.push(eventObject);
        			ageFive.push(eventObject);
        			ageFour.push(eventObject);
        			ageThree.push(eventObject);
        			ageTwo.push(eventObject);
        			ageOne.push(eventObject);
        		}
        		if (eventName.indexOf("DAY CAMP") != -1 || eventName.indexOf("PARENTS") != -1 || eventName.indexOf("SUMMER CAMP")!= -1){
        			schoolAge.push(eventObject);
        			ageFive.push(eventObject);
        			ageFour.push(eventObject);
        		}
    		}
    	}
    });
    
}, false);

// HANDLE PARENTS SELECTION*************************************************

// Variables for partent age and gender selection from dropdown.
var age_index;
var gender_index;

// Arrays for selected age - all events, and selected age - events from category.
// These are necessary for reparsing when a new selection is made.
var selectedAgeArray = [];
var eventsInCategory = [];

// Values for elements to be added to the HTML document.
var weekdayContainer;
var curTable;
var curTableRowCount;
var cellReg;
var cellClassName;
var cellDescription;
var cellDays;
var cellTimes;
var cellGender;
var cellOpenings;
var cellClassStart;
var cellClassEnd;
var cellTuition;
// Array for preparing or clearing tables.
var clearedTablesArray = [];

// Functions that are called each time the parent makes a new selection in either 
// drop down menu. When both dropdowns have a selected value the program displays new data.
function genderSelection(genSelection){
	clearEventBtns();
	gender_index = genSelection.selectedIndex;
	if (gender_index!=null && age_index!=null){
		eventOptions();
	}
}
function ageSelection(mySelection){
	clearEventBtns();
	age_index = mySelection.selectedIndex;
	if (gender_index!=null && age_index!=null){
		eventOptions();
	}
}

// Clears buttons when a new selection has been made from the dropdown menus.
function clearEventBtns(){
    document.getElementById("tumblingBtn").style.display = "none";
	document.getElementById("birthdayPartyBtn").style.display = "none";
	document.getElementById("dayCampBtn").style.display = "none";
	document.getElementById("summerCampBtn").style.display = "none";
	document.getElementById("gymnasticsBtn").style.display = "none";
	document.getElementById("parkourBtn").style.display = "none";
	document.getElementById("cheernasticsBtn").style.display = "none";
	document.getElementById("parentsNightBtn").style.display = "none";
	document.getElementById("starsTeamBtn").style.display = "none";
}

// Displays only the buttons of events available to the selected age group
function eventOptions(){
    switch(age_index){
        case 1:
            document.getElementById("tumblingBtn").style.display = "inline-block";
	        document.getElementById("birthdayPartyBtn").style.display = "inline-block";
	        selectedAgeArray = ageOne.slice(0);
            break;
        case 2:
            document.getElementById("tumblingBtn").style.display = "inline-block";
	        document.getElementById("birthdayPartyBtn").style.display = "inline-block";
	        selectedAgeArray = ageTwo.slice(0);
            break;
        case 3:
            document.getElementById("tumblingBtn").style.display = "inline-block";
	        document.getElementById("birthdayPartyBtn").style.display = "inline-block";
	        selectedAgeArray = ageThree.slice(0);
            break;
        case 4:
            document.getElementById("tumblingBtn").style.display = "inline-block";
	        document.getElementById("birthdayPartyBtn").style.display = "inline-block";
	        document.getElementById("dayCampBtn").style.display = "inline-block";
	        document.getElementById("summerCampBtn").style.display = "inline-block";
	        selectedAgeArray = ageFour.slice(0);
            break;
        case 5:
            document.getElementById("tumblingBtn").style.display = "inline-block";
	        document.getElementById("birthdayPartyBtn").style.display = "inline-block";
	        document.getElementById("dayCampBtn").style.display = "inline-block";
	        document.getElementById("summerCampBtn").style.display = "inline-block";
	        document.getElementById("gymnasticsBtn").style.display = "inline-block";
	        document.getElementById("parkourBtn").style.display = "inline-block";
	        document.getElementById("cheernasticsBtn").style.display = "inline-block";
	        selectedAgeArray = ageFive.slice(0);
            break;
        case 6:
            document.getElementById("tumblingBtn").style.display = "inline-block";
	        document.getElementById("birthdayPartyBtn").style.display = "inline-block";
	        document.getElementById("dayCampBtn").style.display = "inline-block";
	        document.getElementById("summerCampBtn").style.display = "inline-block";
	        document.getElementById("gymnasticsBtn").style.display = "inline-block";
	        document.getElementById("parkourBtn").style.display = "inline-block";
	        document.getElementById("cheernasticsBtn").style.display = "inline-block";
	        document.getElementById("parentsNightBtn").style.display = "inline-block";
	        selectedAgeArray = schoolAge.slice(0);
            break;
    }
    
    // Stars girl team.
    if (age_index == 6 && gender_index == 2){
        document.getElementById("starsTeamBtn").style.display = "inline-block";
    }
}

var numOfEventsInCategory; // This returns 0 so that a message will pop up letting customer know there are no events in selected category at selected location.

// DISPLAY EVENTS BASED ON SELECTION****************************************
// Called when an event button is clicked and returns the category.
function getEvents(eventCategory){
    // clear any rows from a previous selection.
    clearRows();
    // Iterate through the array
    numOfEventsInCategory = 0; // Set value to 0 upon new search.
	for (var i = 0; i < selectedAgeArray.length; i++){
	    // If a category in the array matches the selected category:
	    if (selectedAgeArray[i]["name"].indexOf(eventCategory) != -1){
	        // Iterate through the days of the week the current event occurs.
	        // Set the current table to specified day.
	        for (var j = 0; j < selectedAgeArray[i]["daysOW"].length; j++){
	            numOfEventsInCategory++;//AddToEventNum
	            // Sets table html element to js variables.
	            iterateThroughDays(parseInt(selectedAgeArray[i]["daysOW"][j]));
	            
	            // Get the current number of rows in that table so that the new
	            // row can be added to the bottom of the list.
	            curTableRowCount = curTable.rows.length;
	            
	            // Add the event to the table.
	            addRow(i);
	            
	            // Make the current table visible on the HTML document.
	            // Tables are hidden by default to avoid page clutter.
	            weekdayContainer.style.display = "inline-block";
	        }
	    }
	}
	// Displays a "no events of this category at selected location" message
	if (numOfEventsInCategory == 0){
        document.getElementById("empty_message_container").style.display = "block";
    }
}

// Clears rows when a new selection has been made.
 function clearRows(){
     for (var i = 0; i < 7; i++){
         
         // Sets table html element to js variables.
         iterateThroughDays(i);
         
        // Clear any rows currently in the table.
        while(curTable.hasChildNodes())
        {
           curTable.removeChild(curTable.firstChild);
        }
		
		// Make the current table invisible on the HTML document.
	    // Tables are hidden by default to avoid page clutter.
	    weekdayContainer.style.display = "none";
	    document.getElementById("empty_message_container").style.display = "none";
     }
}

function addRow(i){
    // Create a new row and cells on the HTML doc.
	newRow = curTable.insertRow(curTableRowCount);
	cellReg = newRow.insertCell(0);
	cellClassName = newRow.insertCell(1);
	cellDescription = newRow.insertCell(2);
	cellTimes = newRow.insertCell(3);
	cellOpenings = newRow.insertCell(4);
	cellClassStart = newRow.insertCell(5);
	cellClassEnd = newRow.insertCell(6);
	cellTuition = newRow.insertCell(7);
	
	styleCells();
		
	// Add the event data to the new row and cells.
	cellReg.innerHTML = "<a href=\" " + String(selectedAgeArray[i]["regURL"] + " \" style=\"color:#FFD801; text-shadow:0 2px 9px rgba(0,0,0,0.5);\" > Register Here! </a>");
	cellClassName.innerHTML = String(selectedAgeArray[i]["name"]);
	cellDescription.innerHTML = String(selectedAgeArray[i]["Descript"]);
	cellTimes.innerHTML = String(selectedAgeArray[i]["startTime"]) + " - " + String(selectedAgeArray[i]["endTime"]);
	cellOpenings.innerHTML = String(selectedAgeArray[i]["openings"]);
	cellClassStart.innerHTML = String(selectedAgeArray[i]["startDate"]);
	cellClassEnd.innerHTML = String(selectedAgeArray[i]["endDate"]);
	cellTuition.innerHTML = String(selectedAgeArray[i]["Tuition"]);
}

// Dynamic styling for newly added cells and rows
function styleCells(){ 
    if (curTable.rows.length % 2 == 0){
        newRow.style.background = "	#485FD4";
    }else{
        newRow.style.background = "#4F64E4";
    }
    
    newRow.style.height = "50px";
    newRow.style.width = "100%";
    cellClassName.style["width"] = "20%";
	cellDescription.style["width"] = "30%";
}

function iterateThroughDays(dayNumVal){
    switch(dayNumVal){
        case 0:
            curTable = document.getElementById("sun_table");
            weekdayContainer = document.getElementById("sun");
            break;
        case 1:
            curTable = document.getElementById("mon_table");
            weekdayContainer = document.getElementById("mon");
            break;
        case 2:
            curTable = document.getElementById("tue_table");
            weekdayContainer = document.getElementById("tue");
            break;
        case 3:
            curTable = document.getElementById("wed_table");
            weekdayContainer = document.getElementById("wed");
            break;
        case 4:
            curTable = document.getElementById("thurs_table");
            weekdayContainer = document.getElementById("thurs");
            break;
        case 5:
            curTable = document.getElementById("fri_table");
            weekdayContainer = document.getElementById("fri");
            break;
        case 6:
            curTable = document.getElementById("sat_table");
            weekdayContainer = document.getElementById("sat");
            break;
    }
}