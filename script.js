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
    .forEach(radio => {
        if (radio.checked) {
            localStorage.setItem('ls_experience_lvl', radio.value);
        }
    }); 
    
    localStorage.setItem('ls_motivational_q.?', motivational_q);
}

// to call the id of the form and, link the data of the value of the form to the google sheet which we created
var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {    // to call the submit button of the form and give it the orders 
    e.preventDefault();    // access the data
    fetch(form.action, {    // to catch the form data (code) and activating it 
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(    // to do next
        response => response.json()   // active the data and send them 
    ).then((html) => {    // to call the "html" files direction 
      // you can put any JS code here
      window.open('index-out.html', '_blank');  // to open new window and display other information
      // also we can do this --> alert('Signed Up Successfully✅')

    });
  });

