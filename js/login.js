


Parse.initialize("dkIOa239YEj8p5VxlmnvQje4yJ9u5J0fTVzoBMv9", "n4KsOJHBIZVXOPDR29EErW9kPnXHE18nIMhb1EsG");
var DB = "Test";
var centers;


$(".login").click(function(e){



    // get values for next page
    var values = $(this).parent().serializeArray();
    console.log(values);

    var email;
    var password;
    var name;
    for (var prop in values) {
        console.log(values[prop].name);
        console.log(values[prop].value);

        if (values[prop].name=== "user") {
            name = values[prop].value;
        } else if (values[prop].name=== "email") {
            name = values[prop].value;
        } else if (values[prop].name=== "pass") {
            password = values[prop].value;
        };

    };


    Parse.User.logIn(name, password, {
      success: function(user) {
        // Do stuff after successful login.
        console.log(user.get('centers'));
        centers = user.get('centers');

        (function(global) {
            global.localStorage.setItem("centers", centers);
        }(window));
        

        e.preventDefault();
        window.location="pages/balaks.html";


        // alert("centers: " + centers);
        console.log(centers);

      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert("Error: " + error.code + " " + error.message);
      }

    });
    

      event.preventDefault();

})



