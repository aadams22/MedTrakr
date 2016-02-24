

//add an ajax request to obtain all medicine with the value
//of true and change it back to false dependent midnight.

// localStorage.currentUser = "false";

$(function() {


//=======================================================
//APPENDS APPROPRIATE LINKS AFTER LOGIN
//=======================================================

var $loginButton = $('#login-button');
// console.log($loginButton);

var $endSessionButton = $('#end-session');
// console.log($endSessionButton);

$loginButton.click(function(){
	// checkLoggin();
	// console.log("login button pressed");
	loggedIn();
	localStorage.currentUser = "true"; 
	// console.log(localStorage.currentUser);
	// console.log('button click works');
});

$endSessionButton.click(function(){
	localStorage.currentUser = "false";
});


var determineUser = function (){
	if(localStorage.currentUser === "true"){
		loggedIn()
	}
};

determineUser();








// var addMed = function() {
// 	$.ajax({
// 		url: window.location.pathname + '/json/meds',
// 	}).done(function(result){
// 		$("<div><li>name</li></div>").appendTo("#home-container")
// 	})
// }; //<--addMed


// $('#addMed').click(function(){
// 	// addMed();
// 	console.log('addMed click works');
// })


// //thought process. needs to be either in the controller or server.js
// if(Date.now == (data.meds.takenTimes + data.meds.frequency)) {
// 	data.meds.taken = false;
// }

// var makeTrue = function(data){
// 		for (var i = 0; i < data.length; i++) {
// 			if(data[i].name ==  )
// 		}
// } //<--makeTrue

var someOtherFunction = function(data) {

}



var findMedTaken = function(data, e) {
	$.ajax(window.location.pathname + '/json/meds').done(someOtherFunction);
} //<--takenData



var takenData = function() {
	$.ajax(window.location.pathname + '/json/meds').done(maketrue);
} //<--takenData

$('tr').click(function(e){
	
	// console.log('addMed click works');
	console.log(this);

	var firstChild = $(this).children().first().toString();
	console.log(typeof firstChild);
	takenData(e);

})




var changeTaken = function() {
	$.ajax(window.location.pathname + '/json/meds').done(function(result){
		var currentTime = new Date().getTime();
		console.log(currentTime);
		var lastTimeTaken = result.meds.takenTimes[0];
		console.log(lastTimeTaken);
		var frequency = result.meds.frequency;
		console.log(frequency);

		if(currentTime + (frequency * 10000) >= lastTimeTaken){
			result.meds.taken = false;
		}

	})
}; //<--changeTaken

// changeTaken();



//===============================================================
//EDIT FORM: this appends edit form after edit button is clicked.
//===============================================================



var someFunction = function(data){

	// console.log("someFunction works");
	var theMed = $('#editMed').val();
	var pathToString = window.location.pathname.split('/');
	// console.log("this is pathToString ", pathToString);
	// console.log("this is pathToString2 ", pathToString[2]);
	for (var i = 0; i < data.length; i++) {
		console.log("this is data.name ", data[i].name);
		console.log(typeof data[i].name)
		// console.log("this is entered value ", theMed);
			// console.log('new run');
		if(data[i].name == theMed) {	
			console.log('success!');
			var form = $("<div id='meds-edit-form'><form id='theForm' action='/users/" + pathToString[2] + "' method='POST'></form></div>");
			$('body').append(form);
			

				var inputVals = $("<input type='text' name='name' value='" + data[i].name + "'>" +
					"<input type='text' name='rx' value='" + data[i].rx + "'>" +
					"<input type='text' name='dosage' value='" + data[i].dosage + "'>" +
					"<input type='text' name='directions' value='" + data[i].directions + "'>" +
					"<input type='text' name='refills' value='" + data[i].refills + "'>" +
					"<input type='text' name='frequency' value='" + data[i].frequency + "'>" +
					"<input type='text' name='pillNum' value='" + data[i].pillNum + "'>" +
					"<input type='hidden' name='id' value='" + data[i]._id + "'>" +
					"<input type='hidden' name='_method' value='PUT'/>" +
					"<button id='send-med-edit' type='submit'>Edit</button>").appendTo("#theForm");
		}
	};
}

var editMed = function(){
	var theMed = $('#editMed').val();
	$.ajax(window.location.pathname + '/json/meds').done(someFunction);
} //<--editMed

$('#editButton').bind('click', function(e){
	editMed();
	console.log('editMed click works');
})

//===============================================================

}); //<--end of container function





//APPENDING OF LINKS OT NAVBAR CONT.


var loggedIn = function() {
			var pathToString = window.location.pathname.split('/');
			// console.log(pathToString);
			// console.log(pathToString[2]);
		$("<li><a href='/users/" + pathToString[2] + "/myprofile'>Profile</a></li>").appendTo('#headerList');
		$("<li><a href='/users/" + pathToString[2] + "'>My Meds</a></li>").appendTo('#headerList');
} //<---loggedIn



