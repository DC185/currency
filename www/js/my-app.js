// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

function convert(){

   // set endpoint and your access key
    endpoint = 'live'
    access_key = '8ece0602d1864bf394759fad3e554e66';

    // get the most recent exchange rates via the "live" endpoint:
    $.ajax({
        url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {

        // exchange rata data is stored in json.quotes
        alert(json.quotes.USDGBP);
        
        // source currency is stored in json.source
        alert(json.source);
        
        // timestamp can be accessed in json.timestamp
        alert(json.timestamp);
        
    }
});

    var num1=+document.getElementById('usd').value;
    var result=num1*json.quotes;
    document.getElementById('gdp').innerHTML = result;
}