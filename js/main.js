function start(){
    var sections = document.getElementsByClassName("section")
    var xhr = new XMLHttpRequest();
    
    var sliders = [
        {
            url: "./src/1.json",
            pictures: [],
            display: function(pictures) {
                
                var slides = document.querySelectorAll('#slides .slide');
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
            display: function(pictures) {
                var slidewrapper = document.getElementById("slidewrapper");
                for(var i in pictures){
                    slidewrapper.innerHTML+='<li class="slide2"><img src="' + pictures[i].img + '" class="slide-img"></li>'
                }
                
                var slideNow = 1;
                var slideCount = $('#slidewrapper').children().length;
                var slideInterval = 2000;
                var navBtnId = 0;
                var translateWidth = 0;

                $(document).ready(function() {
                    var switchInterval = setInterval(nextSlide, slideInterval);

                    $('#viewport').hover(function() {
                        clearInterval(switchInterval);
                    }, function() {
                        switchInterval = setInterval(nextSlide, slideInterval);
                    });
                });


                function nextSlide() {
                    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
                        $('#slidewrapper').css('transform', 'translate(0, 0)');
                        slideNow = 1;
                    } else {
                        translateWidth = -$('#viewport').width() * (slideNow);
                        $('#slidewrapper').css({
                            'transform': 'translate(' + translateWidth + 'px, 0)',
                            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                        });
                        slideNow++;
                    }
                }

                function prevSlide() {
                    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
                        translateWidth = -$('#viewport').width() * (slideCount - 1);
                        $('#slidewrapper').css({
                            'transform': 'translate(' + translateWidth + 'px, 0)',
                            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                        });
                        slideNow = slideCount;
                    } else {
                        translateWidth = -$('#viewport').width() * (slideNow - 2);
                        $('#slidewrapper').css({
                            'transform': 'translate(' + translateWidth + 'px, 0)',
                            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                        });
                        slideNow--;
                    }
                }
                
            }
        },
        {
            url: "./src/3.json",
            pictures: [],
            display: function(pictures) {
                var slider = document.getElementById("slid3");
                for(var i in pictures){
                    var img = document.createElement("img");
                    slider.appendChild(img);
                    img.setAttribute("src", pictures[i].img)
                }
                $(function() {
                    $('.slider').tilesSlider({ effect: 'switchlr', auto: true, loop: true })
                })
            }
        },
        {
            url: "./src/4.json",
            pictures: [],
            display: function(pictures) {
               $(function(){
                    var photos = [ ];
                    
                    for (p in pictures) {
                        photos[p] = pictures[p].img;
                    }
                    
                    var slideshow = $('#slideShow').bubbleSlideshow(photos);
                    
                    slideshow.autoAdvance(1000);
            })
            }
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

    }
}

start();