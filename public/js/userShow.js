

//add an ajax request to obtain all medicine with the value
//of true and change it back to false dependent midnight.



$(function() {


//If (user  == true) is signed in run this function
	//Append links to navbar.



var loggedIn = function() {
	$.ajax({
		url: window.location.pathname + '/json',
		method: 'GET',
	}).done(function(result){
		$window.load("<li><a href='/users/<%=result.id%>/myprofile'>Profile</a></li>").appendTo('#headerList');
		$("<li><a href='/users/<%=result.id%>'>My Meds</a></li>").appendTo('#headerList');


	}) //<---done
} //<---loggedIn

// $('.button').click(function(){
// 	// loggedIn();
// 	console.log('button click works');
// });

// var checkLoggin = function(){
// 	if(req.isAuthenticated() == true) {
// 		loggedIn();
// 	}
// }
// checkLoggin();
// loggedIn();



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

var createTaken = function() {
	$.ajax(window.location.pathname + '/json/meds').done(function(result){
		
	})

} //<--createTaken

$('td').bind('click', function(e){
	// createTaken();
	console.log('addMed click works');
	console.log(this);
})



var changeTaken = function() {
	$.ajax({
		url: window.location.pathname + '/json',
		method: 'GET',
	}).done(function(result){
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



//====================
//EDIT FORM: this appends edit form after edit button is clicked.
//====================



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
	// console.log("this is theMed in editMed" + theMed);
	$.ajax(window.location.pathname + '/json/meds').done(someFunction);
} //<--editMed

$('#editButton').bind('click', function(e){
	editMed();
	console.log('editMed click works');
})


//click event to remove edit form

$('#send-med-edit').click(function(){

});




}); //<--end of container function





