

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

$('.button').click(function(){
	loggedIn();
	console.log('button click works');
});

var checkLoggin = function(){
	if(req.isAuthenticated() == true) {
		loggedIn();
	}
}
checkLoggin();
loggedIn();



var addMed = function() {
	$.ajax({
		url: window.location.pathname + '/json',
		method: 'GET',
	}).done(function(result){
		$("<div><li><%=result.meds.name%></li></div>").appendTo("#home-container")
	})
}; //<--addMed


$('#addMed').click(function(){
	addMed();
	console.log('addMed click works');
})


// //thought process. needs to be either in the controller or server.js
// if(Date.now == (data.meds.takenTimes + data.meds.frequency)) {
// 	data.meds.taken = false;
// }

var createTaken = function() {
	$.ajax({
		url: window.location.pathname + '/json',
		method: 'GET',
	}).done(function(result){
		result.meds.taken = true;
	})

} //<--createTaken

$('td').click(function(){
	createTaken();
	console.log('addMed click works');
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

changeTaken();




}); //<--end of container function





