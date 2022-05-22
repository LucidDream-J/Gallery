const main = document.querySelector('main')
const textarea = document.getElementById('text')

const data2 = [
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-30-48 Gallery West GW - WA.png',
      text: 'hello',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-35-53 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-36-16 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-37-00 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-34-21 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-47-04 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-47-17 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-47-41 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-47-56 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-48-09 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-51-46 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-52-04 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-52-15 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-52-25 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 12-52-40 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 13-00-24 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 13-00-34 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 13-00-57 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 13-01-10 Gallery West GW - WA.png',
      text: '',
    },
    {
      image: './img-infinite-possible/Screenshot 2022-01-14 at 13-01-22 Gallery West GW - WA.png',
      text: '',
    },
  ]
  
  data2.forEach(createBox)
  
  // Create speech boxes
  function createBox(item) {
    const box = document.createElement('div')
  
    const { image, text } = item
  
    box.classList.add('box')
  
    box.innerHTML = `
      <img src="${image}" alt="${text}" />
      <p class="info">${text}</p>
    `
    main.appendChild(box)
  }
  
