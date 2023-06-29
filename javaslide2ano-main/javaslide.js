'use strict';

const images = [
    { 'id': '1', 'url':'./img/transferir1.jfif' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/tenchi.jpg' },
    { 'id': '4', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '5', 'url':'./img/transferir.jfif' },
    { 'id': '6', 'url':'./img/mt09.jpg' },
    { 'id': '7', 'url':'./img/160.jpg' },
    { 'id': '8', 'url':'./img/xj6.png' },
    { 'id': '9', 'url':'./img/xre.jpg' },
    { 'id': '10', 'url':'./img/bmw.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);