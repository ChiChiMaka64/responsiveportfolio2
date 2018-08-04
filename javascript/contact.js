var config = {
    apiKey: "AIzaSyCW8jAx_cmOXSyknFunYWyXJLU7nZfdCOI",
    authDomain: "contact-page-database.firebaseapp.com",
    databaseURL: "https://contact-page-database.firebaseio.com",
    projectId: "contact-page-database",
    storageBucket: " ", //contact-page-database.appspot.com
    messagingSenderId: "44308729866"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  $("button").on("click", function (e) {
    e.preventDefault()
    console.log($(this).text());
    var name=$("#name").val().trim()
    console.log(name);
    var email=$("#email").val().trim()
    console.log(email);
    var message=$("#message").val().trim()
    console.log(message);
    database.ref().push({
        name:name,
        email:email,
        message:message,
    })
  });
  database.ref().on("child_added", function (snapshot) {
    console.log(snapshot);
    var Name = snapshot.val().name;
    console.log(Name);
    var Email = snapshot.val().email;
    console.log(Email);
    var Message = snapshot.val().message;
    console.log(Message);
  },
  function(err) {
    console.log(err);
});
