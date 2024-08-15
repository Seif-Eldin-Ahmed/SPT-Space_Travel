function myfunc(event) {
    event.preventDefault();

    // calling the data of the form and set them to variables
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nationality = document.getElementById("nationality").value;
    var gender = document.getElementById("gender");
    var motivational_q = document.getElementById("motivational_q").value;

    //                       - value -          - value -
    gender.checked ? gender = "Male" : gender = "Female";

    // to set the values of the data and send them all to local storage in inspect page(de bug) 
    localStorage.setItem('ls_full_name', name);
    localStorage.setItem('ls_email', email);
    localStorage.setItem('ls_nationality', nationality);
    localStorage.setItem('ls_gender', gender);

    document.getElementsByName('data[Experience LvL]')
    .forEach(radio => {   // Calls a function for each element in radio
        if (radio.checked) {
            localStorage.setItem('ls_experience_lvl', radio.value);
        }
    }); 
    
    localStorage.setItem('ls_motivational_q.?', motivational_q);
}

// to call the id of the form and, link the data of the value of the form to the google sheet which we created
var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {    // Setting a function that will be called whenever the specified data is delivered to the target 
    e.preventDefault();    // if something wrong happens in the fill the form, default action should not be taken
    fetch(form.action, {    // to send a request to the Web API URL and get a response. 
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(    // if the process is correct and clean from any error, do next...
        response => response.json()   // processes the response data from a web request. It reads all the data and then converts it into a JavaScript object
    ).then((html) => {    // to call the "html" files direction 
      // you can put any JS code here
      window.open('index-out.html', '_blank');  // to open new window and display other information
      // also we can do this --> alert('Signed Up Successfully✅')

    });
  });

