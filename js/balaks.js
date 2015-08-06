Parse.initialize("1dlfQyT8N0OrUJXzRWk9gtWz3fXHYNgKnZNOhWyY", "OTs8JFyPYJ3yrm03qc1jgY9NGCFJBXqsxsNCKT8E");


var DB = "Test";



$(".tester").click(function(){
    var centers;

    (function(global) {
        centers =  global.localStorage.getItem("centers");
    }(window));

    console.log(centers);


    var div = document.getElementById("searchResults");

    var searcher = Parse.Object.extend(DB);
    var query = new Parse.Query(searcher);
    query.startsWith("center", centers);
    event.preventDefault();
    query.find({
        success: function(results) {
        // alert("Successfully retrieved " + results.length + " scores.");
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
              // alert(object.id + ' - ' + object.get('email') + "name" : object.get('name'));

                var myDiv = document.createElement("div");

                var t = document.createTextNode(object.get('center') + ' - ' + "\n name :" + object.get('name'));

                var btn = document.createElement("button");
                var essay = document.createElement("button");
                var app = document.createElement("button");

                btn.setAttribute("id", object.id);
                btn.setAttribute('onclick','check(id);');
                btn.setAttribute('class', 'btn btn-default');
                btn.setAttribute("style","text-align: center", "margin = '50px auto'");

                btn.appendChild(t);

                essay.setAttribute("id", object.id);
                essay.innerHTML= 'Grade Essay';
                essay.setAttribute('onclick','essay(id);');
                essay.setAttribute('class', 'btn btn-default small');
                essay.setAttribute("style","text-align: center", "margin = '50px auto'");

                app.setAttribute("id", object.id);
                app.innerHTML= 'View Application';
                app.setAttribute('onclick','app(id);');
                app.setAttribute('class', 'btn btn-default small');
                app.setAttribute("style","text-align: center", "margin = '50px auto'");
                
            
                myDiv.appendChild(btn);
                myDiv.appendChild(essay);
                myDiv.appendChild(app);

                div.appendChild(myDiv);

            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
    


})

function essay(id) {
    (function(global) {
            global.localStorage.setItem("id", id);
    }(window));

    window.location="essay.html";
}