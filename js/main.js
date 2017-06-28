function start(){
    var slider_1 = document.getElementById("slider_1");
    var xhr = new XMLHttpRequest();
    
    var sliders = [
        {
            url: "./src/1.json",
            pictures: [],
            display: function(pictures) {}
        },
        {
            url: "./src/1.json",
            pictures: [],
            display: function(pictures) {}
        },
        {
            url: "./src/1.json",
            pictures: [],
            display: function(pictures) {}
        },
        {
            url: "./src/1.json",
            pictures: [],
            display: function(pictures) {}
        },
        {
            url: "./src/1.json",
            pictures: [],
            display: function(pictures) {}
        },
        {
            url: "./src/1.json",
            pictures: [],
            display: function(pictures) {}
        }
    ]
    
    for(var i in sliders){
        xhr.open("GET", sliders[i].url, true);
        xhr.onload = function() {
            openPage();
        }
        xhr.send();
    }
    var openPage = function(){
        for( var j in sliders){
            sliders[j].pictures = JSON.parse(xhr.responseText);
            console.log(sliders[j].pictures)
        }
    }
    
}

start();