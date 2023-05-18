"use strict";
console.log('hey');

let addBtn = document.getElementById('addBtn');
let clearBtn = document.getElementById('clearBtn');
const imageFilesSelector = document.getElementById('categorySelector');
const imgDiv = document.getElementById('imgDiv');


let selectedImages = [];

// Place image descriptions in an array named imageFiles
let imageFiles = [
  { name: "./images/img1.jpg", description: "A cute dog" },
  { name: "./images/img2.jpg", description: "Work" },
  { name: "./images/img3.jpg", description: "Under water" },
  { name: "./images/img4.jpg", description: "Type writer" },
  { name: "./images/img5.jpg", description: "Blur" }
];

// Loop through imageFiles and create option elements for each
imageFiles.forEach((imageFile) => {
  const option = document.createElement('option');
  option.value = imageFile.name;
  option.textContent = imageFile.description;
  imageFilesSelector.appendChild(option);
});

// Add button click event handler
addBtn.addEventListener('click', () => {
  const selectedFile = imageFiles.find((imageFile) => imageFile.name === imageFilesSelector.value);
  if (selectedFile) {
    selectedImages.push(selectedFile);
    const imageElement = document.createElement('img');
    imageElement.src = selectedFile.name;
    imgDiv.appendChild(imageElement);
    imgDiv.style.display = 'block'; // Show the image container
  }
});

// Clear button click event handler
clearBtn.addEventListener('click', () => {
  selectedImages = [];
  imgDiv.innerHTML = '';
  imgDiv.style.display = 'none'; // Hide the image container
});
