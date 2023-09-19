const main = document.querySelector('main')
const textarea = document.getElementById('text')

const data3 = [
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-100-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-91-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-92-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-93-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-94-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-95-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-96-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-97-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-98-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-99-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-72-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-73-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-77-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-82-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-16-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-28-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-29-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-75-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-70B-min.jpg',
      text: 'They took out we put back in!',
    },
    {
      image: './images/RePopulate/longScrolIndigi/Australian_indigenous_people_in_landscape-71-min.jpg',
      text: 'They took out we put back in!',
    },
  ]
  
  data3.forEach(createBox)
  
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
  
