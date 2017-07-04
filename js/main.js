function start(){
    var sections = document.getElementsByClassName("section")
    var xhr = new XMLHttpRequest();
    
    var sliders = [
        {
            url: "./src/1.json",
            pictures: [],
            display: function(pictures) {
                
                var slides = document.querySelectorAll('#slides .slide');
                //console.log(pictures, slides)
                for( var i = 0; i < slides.length; i++){
                    
                    slides[i].innerHTML = '<img src="' + pictures[i].img + '"/>';
                }
                var currentSlide = 0;
                var slideInterval = setInterval(nextSlide,2000);
                function nextSlide() {
                    slides[currentSlide].className = 'slide';
                    currentSlide = (currentSlide+1)%slides.length;
                    slides[currentSlide].className = 'slide showing';
                }
            }
        },
        {
            url: "./src/2.json",
            pictures: [],
            display: function(pictures) {}
        },
        {
            url: "./src/3.json",
            pictures: [],
            display: function(pictures) {}
        },
        {
            url: "./src/4.json",
            pictures: [],
            display: function(pictures) {}
        },
        {
            url: "./src/5.json",
            pictures: [],
            display: function(pictures) {}
        },
        {
            url: "./src/6.json",
            pictures: [],
            display: function(pictures) {}
        }
    ]
    
    for(var i in sliders){
        (function(i){
            var xhr = new XMLHttpRequest()
            xhr.open("GET", sliders[i].url, true);
            xhr.onload = function() {
                openPage(xhr.responseText, i);
            }
            xhr.send();            
        })(i)
        
    }
    var openPage = function(text, n){
        
            sliders[n].pictures = JSON.parse(text);
            sliders[n].display(sliders[n].pictures)
            console.log(sliders[n].pictures)

    }
}

start();