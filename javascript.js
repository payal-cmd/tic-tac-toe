/*========================= toggle icon navbar =========================*/
Let menuIcon = document.querySelector('#menu-icon');
Let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========================= scroll section avtive link =========================*/
Let sections= document.querySelectorAll('section');
Let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    /*========================= sticy navbar =========================*/
    Let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*=========================remove toggle icon ad navbar when click navbar link  =========================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
