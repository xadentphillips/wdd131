const articles = [
	{
		id: 1,
		title: 'Five Kingdoms: Sky Radiers',
		date: 'March 11, 2014',
		description:
			`Sky Raiders is the first book in the Five Kingdoms series. It is one of Mull's best works. The book follows the main character Cole who ends up in a magical world far from home when he tries to save his friends who get kidnapped by slavers. Read about his adventures as he fights monsters, befriends a princess, and tries to save his friends from both worlds from ever present danger. `,
		imgSrc: 'skyraiders.jpg',
		imgAlt: 'Book cover for Five Kingdoms 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐',
		imageid: 'skyraiders',
	},
	{
		id: 2,
		title: 'The Edge Chronicles: Beyond the Deepwoods',
		date: 'October 1, 1998',
		description: 'Beyond the Deepwoods is the first book in the Edge Chronicles Series. Explore the Edge with Twig, a human who strays from the all important path of his woodtroll family. Join him for his growth through a series of misadventures as he discovers that the world is much bigger than he could have ever known. ',
		imgSrc: 'deepwoods.jpg',
		imgAlt: 'Book cover for Edge Chronicles 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐',
		imageid: 'twig',
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]
console.log('Test 1')
const container = document.querySelector('.maingrid');
console.log('test2')
articles.forEach(function (item) {
	console.log('github are you working?')
	let book = document.createElement('article');

	book.setAttribute('class', 'books');

	let html = `
				<div class="bookinfo">
                    <p class="publish">${item.date}</p>
                    <p class="ages">${item.ages}</p>
                    <p class="genre">${item.genre}</p>
                    <p class="star">${item.stars}</p>
                </div>
                <div class="bookmain">
                    <h3 class="booktitle">${item.title}</h3>
                    <img class="coverimage" id="${item.imageid}" src="${item.imgSrc}" alt="${item.imgAlt}">
                    <p class="description">${item.description}<button class="expander">Read More...</button></p>

                </div>`;
	book.innerHTML = html;

	container.appendChild(book);
	console.log('Hopefully there are three of these')
})