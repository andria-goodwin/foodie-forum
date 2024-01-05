// start with empty array in queued images
let queuedImagesArray = [];
// access HTML elements
savedForm = document.querySelector('#saved-form');
queuedForm = document.querySelector('#queued-form');
savedDiv = document.querySelector('.saved-div');
queuedDiv = document.querySelector('.queued-div');
inputDiv = document.querySelector('.input-div');
input = document.querySelector('.input-div input');
serverMessage = document.querySelector('.server-message');
// start with empty array in deleted images
deleteImages = [];

// Saved in Server images

// Queued in Frontend images
// event listener for image upload via browse
input.addEventListener('change', () => {
    const files = input.files;
    for(let i = 0; i < files.length; i++) {
        queuedImagesArray.push(files[i]);
    }
    queuedForm.reset();
    displayQueuedImages();
})

// event listener for image upload via drag and drop
inputDiv.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    for(let i = 0; i < files.length; i++) {
        if (!files[i].type.match('image')) continue;

        if (queuedImagesArray.every(image => image.name !== files[i].name))
            queuedImagesArray.push(files[i]);
    }
    displayQueuedImages();
})

// displays images that are queued in front end
function displayQueuedImages() {
    let images = '';
    queuedImagesArray.forEach((image, index) => {
        images += `<div class="image">
                    <img src="${URL.createObjectURL(image)}" alt="image">
                    <span onclick="deleteQueuedImage(${index})">&times;</span>
                </div>`;
    })
    queuedDiv.innerHTML = images;
}

// allows user to delete images that are queued in front end
function deleteQueuedImage(index) {
    queuedImagesArray.splice(index, 1);
    displayQueuedImages();
}

// event listener for when the user clicks 'upload'
// sends the queued images to the server/"saves" them
queuedForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendQueuedImagesToServer();
})

function sendQueuedImagesToServer() {
    const formData = new FormData(queuedForm);

    queuedImagesArray.forEach((image, index) => {
        formData.append(`file[${index}]`, image)
    })

    fetch('upload', {
        method: 'POST',
        body: formData
    })

    .then(response => {
        if (response.status !== 200) throw Error(response.statusText);
        location.reload();
    })

    .catch(error => {
        serverMessage.innerHTML = error;
        serverMessage.style.cssText = 'background-color: #f8d7da; color: #b71c1c';
    })
}