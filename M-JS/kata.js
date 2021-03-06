// console.log('Hola, desde el index.js');
// const button = document.getElementById('main-button');
// button.style.backgroundColor = 'blue';
// button.addEventListener('click', () => alert('Hola'));
// const grid = document.getElementById('grid-container');
// grid.innerHTML = ' ';
// fetch(
//   'https://api.thedogapi.com/v1/images/search?api_key=a1f3e802-1e6c-44a9-b231-bb7491d82530&limit=9&size=small'
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.lo(g(error));
function llenarFotos() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = ' ';
    fetch(
      'https://api.thedogapi.com/v1/images/search?api_key=a1f3e802-1e6c-44a9-b231-bb7491d82530&limit=9&size=small'
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          const dogImage = document.createElement('img');
          dogImage.setAttribute('src', element.url);
          dogImage.setAttribute('class', 'grid-item');
          grid.appendChild(dogImage);
          //console.log(dogImage);
        });
      })
      .catch((error) => console.log(error));
  }
  const button = document.getElementById('main-button');
  button.addEventListener('click', llenarFotos);