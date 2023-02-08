console.log('%c HI', 'color: firebrick')

let breedsList;

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(images => images.message.forEach(renderImage))



fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(breedsObj => {
    breedsList = breedsObj.message;
    for (breeds in breedsList) {
        renderBreeds(breeds)
    }

})

// breeds[0] === e.target.value
//breedsObj.message.map(breeds => renderBreeds)

const renderImage = (imageUrl) => {
    const div = document.querySelector('#dog-image-container')
    const img = document.createElement('img')
    img.src = imageUrl;
    div.append(img)
} 

const renderBreeds = (breedsName) => {
    const ul = document.querySelector('#dog-breeds')
    const li = document.createElement('li')
    li.innerText = breedsName;
    ul.appendChild(li)

    li.addEventListener('click', () => {
        console.log('click')
        li.style.color = 'green';
    })
}

const dropDown = document.querySelector("#breed-dropdown")
dropDown.addEventListener("change", (e) => {
    const ul = document.querySelector('#dog-breeds')
    ul.innerHTML = ""
// object => array
    for (breeds in breedsList) {
        console.log(breeds[0])
        if (breeds[0] === e.target.value) {
            renderBreeds(breeds)
        }
    }
})



    // breedsObj.message[breeds]