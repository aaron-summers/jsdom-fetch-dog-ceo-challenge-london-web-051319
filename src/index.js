// console.log('%c HI', 'color: firebrick')
// CHALLENGE 1
let ptag = document.getElementById('urls');
let ul = document.getElementById('dog-breeds');
let div = document.getElementById('dog-image-container')
// let childUl = document.createElement('ol');

function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/5')
        .then(images => images.json())
        .then(imageArray => renderImages(imageArray.message));
}


function renderImages(imgarr) {
    for (let i = 0; i < imgarr.length; i++) {
        let img = new Image();
        img.src = imgarr[i];
        img.className = 'image-class'
        div.appendChild(img);
    }
}

// CHALLENGE 2
function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(breedData => breedData.json())
        .then(breedList => renderBreed(breedList.message));
}

// CHALLENGE 4
function renderBreed(breeds) {
    // console.log(Object.keys(breeds)[i].indexOf(Object.values(breeds)[i]) > -1)
    
    let selectors = document.getElementsByClassName("alphabet");

    for (let k = 0; k < selectors.length; k++) {
        selectors[k].addEventListener('click', event => {
            if (event.target && event.target.nodeName == 'LI') {
                console.log(event.target.innerText);
                let letter = event.target.innerText;
                filterBreed(letter);
            }
        });   
    }

    function filterBreed(userinput) {
        // debugger

        for (let x = 0; x < Object.keys(breeds).length; x++) {
            if (Object.keys(breeds)[x].charAt(0) == userinput.toLowerCase()) {
                // console.log(Object.keys(breeds)[x]);
                if (!(Object.keys(breeds)[x].indexOf(Object.values(breeds)[x]) > -1)) {
                    const li = document.createElement('li')
                    li.innerText = Object.keys(breeds)[x];
                    console.log(Object.values(breeds)[x]);
                    ul.appendChild(li);

                    let childUl = document.createElement('ul');
                    let childLi = document.createElement('li');

                    li.appendChild(childUl);
                    childLi.innerText = Object.values(breeds)[x];
                    childUl.appendChild(childLi);
                } else {
                    const li = document.createElement('li');
                    li.innerText = Object.keys(breeds)[x];
                    ul.appendChild(li);
                    }
                }
            }
        }

        // if (!(Object.keys(breed)[i].indexOf(Object.values(breed)[i]) > -1)) {
        //     li.innerText = Object.keys(breed)[i];
        //     console.log(Object.values(breed)[i]);
        //     ul.appendChild(li);

        //     let childUl = document.createElement('ul');
        //     let childLi = document.createElement('li');

        //     li.appendChild(childUl);
        //     childLi.innerText = Object.values(breed)[i];
        //     childUl.appendChild(childLi);
        // } else {
        //     li.innerText = Object.keys(breed)[i];
        //     ul.appendChild(li);
        // }
        // }
    }

    // CHALLENGE 3
    ul.addEventListener('click', event => {
        if (event.target && event.target.nodeName == 'LI') {
            event.target.style.color = `${'#' + parseInt(Math.random() * 0xffffff).toString(16)}`;
        }
    });

    // fetches 5 images of dogs at random when page loads
    document.addEventListener('DOMContentLoaded', () => {
        fetchImages();
        fetchBreeds();
    });






