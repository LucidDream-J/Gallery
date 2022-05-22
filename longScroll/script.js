const main = document.querySelector('main')
const textarea = document.getElementById('text')


const data1 = [
  {
    image: './img-virus/v-22.jpg',
    text: 'version 22',
  },
  {
    image: './img-virus/v-11.jpg',
    text: 'version 11',
  },
  {
    image: './img-virus/v-1.jpg',
    text: 'version 1',
  },
  {
    image: './img-virus/v-21.jpg',
    text: 'version 21',
  },
  {
    image: './img-virus/v-2.jpg',
    text: 'version 2',
  },
  {
    image: './img-virus/v-6.jpg',
    text: 'version 6',
  },
  {
    image: './img-virus/v-24.jpg',
    text: 'version 24',
  },
  {
    image: './img-virus/v-15.jpg',
    text: 'version 15',
  },
  {
    image: './img-virus/v-34.jpg',
    text: 'version 34',
  },
  {
    image: './img-virus/v-28.jpg',
    text: 'version 28',
  },
  {
    image: './img-virus/v-40.jpg',
    text: 'version 40',
  },
  {
    image: './img-virus/v-20.jpg',
    text: 'version 20',
  },
  {
    image: './img-virus/v-12.jpg',
    text: 'version 12',
  },
  {
    image: './img-virus/v-5.jpg',
    text: 'version 5',
  },
  {
    image: './img-virus/v-27.jpg',
    text: 'version 27',
  },
  {
    image: './img-virus/v-19.jpg',
    text: 'version 19',
  },
  {
    image: './img-virus/v-43.jpg',
    text: 'version 43',
  },
]

data1.forEach(createBox)

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div')

  const {
    image,
    text
  } = item

  box.classList.add('box')

  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `
  main.appendChild(box)
}
