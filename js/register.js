


Parse.initialize("dkIOa239YEj8p5VxlmnvQje4yJ9u5J0fTVzoBMv9", "n4KsOJHBIZVXOPDR29EErW9kPnXHE18nIMhb1EsG");
var DB = "Test";



$(".register").click(function(e){



    // get values for next page
    var values = $(this).parent().serializeArray();
    console.log(values);

    var centers =[];
    var email;
    var password;
    var name;
    for (var prop in values) {
        console.log(values[prop].name);
        console.log(values[prop].value);

        if(values[prop].name=== "center") {
            console.log(values[prop].value);
            centers.push(values[prop].value);
        } else if (values[prop].name=== "username") {
            name = values[prop].value;
        } else if (values[prop].name=== "email") {
            name = values[prop].value;
        } else if (values[prop].name=== "password") {
            password = values[prop].value;
        };

    };

    console.log(centers);



    var user = new Parse.User();
    user.set("username", name);
    user.set("email", email);
    user.set("password", password);

    // other fields can be set just like with Parse.Object
    user.set("centers", centers);

    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
    
    e.preventDefault();
    window.location="../index.html";

})


$(".home").click(function(e){
    e.preventDefault();
    window.location="../index.html";

})