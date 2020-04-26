document.getElementById('burger-menu').addEventListener('click', function() {
    if(this.classList.contains('active')) {
        // closes menu
        this.classList.remove('active');
        document.getElementById('resp-menu').classList.remove('active')
    } else {
        // opens menu
        this.classList.add('active');
        document.getElementById('resp-menu').classList.add('active')
    }
});



var listBtn = document.getElementById('list');
var gridBtn = document.getElementById('grid');
var newBox = document.getElementsByClassName('news-box');

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