

//add an ajax request to obtain all medicine with the value
//of true and change it back to false dependent midnight.

// localStorage.currentUser = "false";

$(function() {


//=========================================================================
//APPENDS APPROPRIATE LINKS AFTER LOGIN: uses a boolean in local storage.
//=========================================================================

var $loginButton = $('#login-button');
// console.log($loginButton);

var $signupButton = $('#signup-button');
// console.log($signupButton);

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

$signupButton.click(function(){
  loggedIn();
  localStorage.currentUser = "true"; 
})



$endSessionButton.click(function(){
  localStorage.currentUser = "false";
});


var determineUser = function (){
  if(localStorage.currentUser === "true"){
    loggedIn()
  }
};

determineUser();





// //thought process. needs to be either in the controller or server.js
// if(Date.now == (data.meds.takenTimes + data.meds.frequency)) {
//  data.meds.taken = false;
// }


//===============================================================
//CLICK FOR MED TAKEN = TRUE: 
//---------------------------
//this is the onclick that grabs the name from the .click event and compares it
//with the data of the meds returned from the ajax request.
//===============================================================

var theAttempt = function(trueOrFalseData, dataId) {
  // console.log('theAttempt is being run');
  // console.log('this is falseData: ', falseData);
    $.ajax({
      url: window.location.pathname + '/json/meds/' + dataId,
      method: 'PUT',
      data: {taken : !trueOrFalseData},
    }).done(function(response) {
      // redirect . . . . //location.reload is choppy and takes too long. 
      //find a better method.
      location.reload();
      // console.log('theAttemt ajax is done');
    })
}



$('tr').click(function(e){
  // console.log('addMed click works');
  var firstChild = $(this).children().first();
  var firstChildString = $(firstChild).html();
  // console.log(firstChildString);
    $.ajax(window.location.pathname + '/json/meds')
    .done(function(data, e) {
      for (var i = 0; i < data.length; i++) {
        // console.log("this is data.name ", data[i].name);
        // console.log(typeof firstChild);
        // console.log(typeof data[i].name)
          // console.log('new run');
        if(data[i].name == firstChildString) {  
          // console.log('success! ', data[i].taken);
          // return data[i].taken = true;
          var trueOrFalseData = data[i].taken; 
          var dataId = data[i]._id;
          // console.log('this is dataId: ', dataId)
          // console.log('this is falseData: ',falseData);
          return theAttempt(trueOrFalseData, dataId);
        } //<-- if statement
      } //<--for loop
    }); //<--ajax request

}) //<-- <tr> click




var changeTakenValue = function() {
  $.ajax(window.location.pathname + '/json/meds')
  .done(function(result){
    var currentTime = new Date().getTime();
    // console.log(currentTime);
    var lastTimeTaken = result.meds.takenTimes[0];
    // console.log(lastTimeTaken);
    var frequency = result.meds.frequency;
    // console.log(frequency);

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
    // console.log("this is data.name ", data[i].name);
    // console.log(typeof data[i].name)
    // console.log("this is entered value ", theMed);
      // console.log('new run');
    if(data[i].name == theMed) {  

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
};

var editMed = function(){
  var theMed = $('#editMed').val();
  $.ajax(window.location.pathname + '/json/meds').done(someFunction);
}; //<--editMed

$('#editButton').bind('click', function(e){
  editMed();
  // console.log('editMed click works');
});


//===============================================================
//APPENDS EDIT PROFILE AND ADD DOCTOR ON /myprofile: adds new class name

$('#profile-list').children().click(function(){
  // console.log('profile click works');
  $(this).removeClass('list').addClass('active');
});


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





//===============================================================
//===============================================================
//OLD CODE
//===============================================================
//===============================================================


//SCRIPT THAT SETS ALL UNDEFINED BOOLEANS IN MEDS TO FALSE:



// var allFalse = function(takenData){
//  $.ajax({
//    url: window.location.pathname + '/json/meds',
//    method: 'POST',
//    data: takenData,
//  })
// } //<--allFalse

// var checkUndefined = function(data){
//  console.log(data.taken);
//  for (var i = 0; i < data.length; i++) {
//    if(data[i].taken == undefined) {
//      var takenData = data[i].taken;
//      console.log(takenData);
//      // allFalse(takenData);
//    }
//  };

// } //<--checkUndefined

// var ajaxAllFalse = function() {
//  $.ajax(window.location.pathname + '/json/meds').done(checkUndefined);
// } //<--ajaxAllFalse


