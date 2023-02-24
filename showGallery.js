const routeImageGallery = images;
const container = document.getElementById('gallery');

const promises = [];

for(const img of routeImageGallery){
    promises.push(fetch(img.src));
}

Promise.all(promises).then( answers => {
    Promise.all(answers.map( answer => answer.blob()))
    .then(blobs => {
        const fragment = document.createDocumentFragment();
        for(const blob of blobs){
            const imgURL = URL.createObjectURL(blob);
            const imgHTML = document.createElement('img');
            imgHTML.src = imgURL;
            fragment.appendChild(imgHTML);
        }
        return fragment;
    })
    .then(fragment=> container.appendChild(fragment))
    
});

