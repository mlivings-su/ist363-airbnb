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
//   name: 'Luxury King Room',
//   price: 300,
//   guests: 2,
//   description:
//     'A beuatiful room with a king sized bed , private bathroom, and a balcony with a view of the ocean',
// };

//array of objects
const rooms = [
  {
    name: 'Luxury King Room',
    price: 300,
    guests: 2,
    description:
      'A beuatiful room with a king sized bed , private bathroom, and a balcony with a view of the ocean',
  },
  {
    name: 'Luxury King Room',
    price: 300,
    guests: 2,
    description:
      'A beuatiful room with a king sized bed , private bathroom, and a balcony with a view of the ocean',
  },
  {
    name: 'Luxury King Room',
    price: 300,
    guests: 2,
    description:
      'A beautiful room with a king sized bed , private bathroom, and a balcony with a view of the ocean',
  },
]; //room ends

rooms.forEach(function (room) {
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

// create elements
