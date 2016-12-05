var tauCohortArray = [];
var searchUrl = 'http://devjana.net/support/tau_students.json';

$( document ).ready( function(){
  console.log('JQ');
  $("#studentButton").on("click", function(){
  $.ajax({
    url: 'http://devjana.net/support/tau_students.json' ,
    dataType: 'JSON',
    success: function( data){
      console.log( 'success, received:', data );

      console.log( 'in success:', data.tau );
      tauStudents = data.tau;
       for (var i = 0; i<data.tau.length; i++){
         tauCohortArray.push(data.tau[i]);
         showStudent(data.tau);
      }
    studentButton();
    }//end success function
  }); //end ajax call
}); //end studentData function

      // var outputText = ''
      //  for (var i = 0; i<data.tau.length; i++){
      //    tauStudents.push(data.tau[i]);
      //    displayStudents(tauStudents);
      //             }
      //         }
      //     });
      // });
// var studentButton = function(){
//   for (var i = 0; i < tauStudents.length; i++) {
//     $('#buttons').append("<button onClick='showStudent(" + i + ")' class='btn btn-info'>" + tauStudents[i].first_name + " " + "</button>");
//   }
// });

      var showStudent = function(tauStudents){
        $('#outputDiv').empty();
        for (var i = 0; i < tauStudents.length; i++) {
        outputText += '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' +  tauStudents[i].first_name + ' ' +  tauStudents[i].last_name  + '</p>';
        outputText += '<p>' +  "Info:" + tauStudents[i].info + '</p>' ;
        outputText += '<img src = "' + tauStudents[i].picUrl + ' "/>';

        $( '#outputDiv' ).html( outputText);
}
};
});
