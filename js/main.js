const accordion1 = document.getElementsByClassName('contentBx');

for (let i = 0; i < accordion1.length; i++) {
    accordion1[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}
