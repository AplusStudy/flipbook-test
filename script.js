let currentPage = 1;

function nextPage() {
    if (currentPage === 1) {
        document.getElementById('page1').style.transform = 'rotateY(-180deg)';
        document.getElementById('page2').style.transform = 'rotateY(0deg)';
        currentPage = 2;
    } else if (currentPage === 2) {
        document.getElementById('page2').style.transform = 'rotateY(-180deg)';
        document.getElementById('page3').style.transform = 'rotateY(0deg)';
        currentPage = 3;
    }
}

function prevPage() {
    if (currentPage === 3) {
        document.getElementById('page3').style.transform = 'rotateY(-360deg)';
        document.getElementById('page2').style.transform = 'rotateY(-180deg)';
        currentPage = 2;
    } else if (currentPage === 2) {
        document.getElementById('page2').style.transform = 'rotateY(0deg)';
        document.getElementById('page1').style.transform = 'rotateY(0deg)';
        currentPage = 1;
    }
}
