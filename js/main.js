//console.log("js has been loaded");

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

//"event name", callback function
menuBtn.addEventListener('click', function () {
  //console.log("cliiiiiiicked")
  mobileMenu.classList.add('active');
}); //end of menuBtn click

closeBtn.addEventListener('click', function () {
  //console.log("cliiiiiiicked")
  mobileMenu.classList.remove('active');
}); //end of menuBtn click

//variables
// const roomName = 'Luxury King Room';
// const roomPrice = 300;
// const roomGuests = 2;
// const roomDescription =
//   'A beuatiful room with a king sized bed , private bathroom, and a balcony with a view of the ocean';

// const room = {
//   title : 'Luxury King Room',
//   price: 300,
//   guests: 2,
//   description:
//     'A beuatiful room with a king sized bed , private bathroom, and a balcony with a view of the ocean',
// };
// console.log(room.title)
//const roomsArr = [];

//array of objects
// const rooms = [
//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beatiful room with a king sized bed , private bathroom, and a balcony with a view of the ocean',
//   },
//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beuatiful room with a king sized bed , private bathroom, and a balcony with a view of the ocean',
//   },
//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description:
//       'A beautiful room with a king sized bed , private bathroom, and a balcony with a view of the ocean',
//   },
// ];
//room ends

function renderProperties(properties) {
  properties.forEach((room) => {
    //rooms.forEach(function (room)

    const roomArticle = document.createElement('article');
    roomArticle.classList.add('room');

    const roomNameElement = document.createElement('h3');
    roomArticle.classList.add('room--name');
    roomNameElement.textContent = room.name;

    const roomDescriptionElement = document.createElement('p');
    roomDescriptionElement.textContent = room.description;
    roomArticle.classList.add('room--description');

    const roomPriceElement = document.createElement('p');
    roomPriceElement.textContent = `Price: ${room.price}`;

    const roomGuestsElement = document.createElement('p');
    roomGuestsElement.textContent = `Guests: ${room.guests}`;

    roomArticle.appendChild(roomNameElement);
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);
    document.body.appendChild(roomArticle);
  });
  // end of forEach
} // end of renderProperties

// fetch("./js/properties.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     //console.log(data);
//     renderProperties(data)
//   });

const displayCategory = (category, properties) => {
  //console.log('display category!');
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('category');

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = category.label.plural;

  sectionElement.appendChild(sectionTitle);
  //end of displayCategory

  console.log(category.label.singular);

  // 1. filter properties
  const filteredProperties = properties.filter((property) => {
    //return true or false
    return category.label.singular === property.type;
  });

  filteredProperties.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  // console.log({filteredProperties});
  filteredProperties.forEach((property) => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('property');

    let propertyHtml = `
   <h3 class = "property--title">${property.name}</h3>
   <p class = "property--description">${property.description}</p>
   <p class = "property--price">${property.price}</p>`;

    articleElement.innerHTML = propertyHtml;

    selectionElement.appendChild(articleElement);
  });

  //end of forEach

  //2. appened properties
  document.body.appendChild(sectionElement);
};

Promise.all([
  // fetch 1
  fetch('js/properties.json').then((response) => response.json()),
  // fetch 2
  fetch('js/categories.json').then((response) => response.json()),
])
  .then(([properties, categories]) => {
    //console.log({ properties });
    //console.log({ categories });
    categories.forEach((category) => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error('There was a problem fetching the data:', error);
  });
