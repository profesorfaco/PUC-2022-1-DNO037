/*!
 * Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

var showcase = [
    {
        img: "assets/img/bg-showcase-1.jpg",
        title: "Fully Responsive Design",
        text: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
        img: "assets/img/bg-showcase-2.jpg",
        title: "Updated For Bootstrap 5",
        text: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
        img: "assets/img/bg-showcase-3.jpg",
        title: "Easy to Use & Customize",
        text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    }
];

showcase.forEach((s, i) => {
    if (i % 2 == 0) {
        document.querySelector("#magia").innerHTML +=
            '<div class="row g-0"><div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url(' +
            s.img +
            ')"></div><div class="col-lg-6 order-lg-1 my-auto showcase-text"><h2>' +
            s.title +
            '</h2><p class="lead mb-0">' +
            s.text +
            "</p></div></div>";
    } else {
        document.querySelector("#magia").innerHTML +=
            '<div class="row g-0"><div class="col-lg-6 order-lg-1 text-white showcase-img" style="background-image: url(' +
            s.img +
            ')"></div><div class="col-lg-6 order-lg-2 my-auto showcase-text"><h2>' +
            s.title +
            '</h2><p class="lead mb-0">' +
            s.text +
            "</p></div></div>";
    }
});