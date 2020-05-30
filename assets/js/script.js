// document.getElementById('burger-menu').addEventListener('click', function() {
//     if(this.classList.contains('active')) {
//         this.classList.remove('active');
//         document.getElementById('resp-menu').classList.remove('active')
//     } else {
//         this.classList.add('active');
//         document.getElementById('resp-menu').classList.add('active')
//     }
// });

// burger menu with jquery syntax 
$(document).ready(function(){
    $('#burger-menu').click(function(){
        if( $(this).hasClass('active') ) {
            $(this).removeClass('active');
            $('#resp-menu').removeClass('active');
        } else {
            $(this).addClass('active');
            $('#resp-menu').addClass('active');
        }
    });


    $('#news-datepicker').datepicker();
});




var listBtn = document.getElementById('list');
var gridBtn = document.getElementById('grid');
var newBox = document.getElementsByClassName('news-box');
if(listBtn && gridBtn) {

    listBtn.addEventListener('click', function() {
        gridBtn.classList.remove('active');
        listBtn.classList.add('active');

        for (let i = 0; i < newBox.length; i++) {
            newBox[i].classList.add('full-width');
        }

        saveNewsStyle('list');
    });

    gridBtn.addEventListener('click', function() {
        listBtn.classList.remove('active');
        gridBtn.classList.add('active');

        for (let i = 0; i < newBox.length; i++) {
            newBox[i].classList.remove('full-width');
        }

        saveNewsStyle('grid');
    });


    function saveNewsStyle(styleType) {
        localStorage.setItem('newsStyleType', styleType);
    }

    function setNewsStyle() {
        if(localStorage.getItem('newsStyleType') != null) {
            if(localStorage.getItem('newsStyleType') == 'list') {
                for (let i = 0; i < newBox.length; i++) {
                    newBox[i].classList.add('full-width');
                }
                listBtn.classList.add('active');
                gridBtn.classList.remove('active');
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        setNewsStyle();
    });
}



if(document.getElementById('book-visit-modal-open')) {

    document.getElementById('book-visit-modal-open').addEventListener('click', function() {
        let modal = document.getElementById('book-visit-modal');
        modal.style.visibility = 'visible';
        modal.style.opacity = 1;
    });

    document.getElementById('book-visit-modal-close').addEventListener('click', function() {
        let modal = document.getElementById('book-visit-modal');
        modal.style.visibility = 'hidden';
        modal.style.opacity = 0;
    });
    
}



function createStatistics(obj) {
    var max = obj.getAttribute('data-number')
    var spanEl = obj.querySelector('span');
    var k = 0;
    
    var interval = setInterval(function() {

        if(k == max) {
            clearInterval(interval);
        } else {
            var val = spanEl.innerText;
            spanEl.innerText = parseInt(val) + 1;
            k++;
        }
       
    }, 20);
    

}

function startCount() {
    var statistics = document.getElementsByClassName('cnt');
    for (let i = 0; i < statistics.length; i++) {
        createStatistics(statistics[i]);
    }
}



var statisticsDiv = document.getElementById('statistics');

if(statisticsDiv){
    var visible = false;
    document.addEventListener('scroll', function() {
        var position = statisticsDiv.getBoundingClientRect()
        var windowHeight = window.innerHeight;
        
        if(position.top <= windowHeight) {
            if(visible == false) {
                startCount();
            }
            visible = true;
        }
    });
}



var swiper = new Swiper('.about-swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
});