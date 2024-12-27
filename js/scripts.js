/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// JavaScript Zoom Functionality
const galleryImages = document.querySelectorAll('.gallery img');
const zoomOverlay = document.getElementById('zoomOverlay');
const zoomImage = document.getElementById('zoomImage');

// Menampilkan gambar zoom ketika gambar galeri diklik
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        zoomImage.src = image.src;
        zoomOverlay.classList.add('active');
    });
});

// Menutup overlay zoom ketika layer overlay diklik
zoomOverlay.addEventListener('click', () => {
    zoomOverlay.classList.remove('active');
});
