const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement('img');
image.setAttribute('src', 'https://picsum.photos/200');
image.setAttribute('alt', 'Random Photo');
document.body.appendChild(image);

const newsection = document.createElement('section')
document.body.appendChild(newsection)