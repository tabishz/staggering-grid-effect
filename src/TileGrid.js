import anime from 'animejs/lib/anime.es.js';

function TileGrid() {
  const wrapper = document.getElementById('tiles');
  let columns = 0, rows = 0, toggled = false;
  // const colors = [
  //   'rgb(255,160,122)', // light salmon
  //   'rgb(107,142,35)', // olive drab
  //   'rgb(102,205,170)', // medium aqua marine
  //   'rgb(64,224,208)', // turquoise
  //   'rgb(250,235,215)', // antique white
  //   'rgb(255,228,196)', // bisque
  //   'rgb(176,196,222)', // light steel blue
  //   'rgb(255,127,80)', // coral
  //   'rgb(46,139,87)', // sea green
  // ];

  const handleOnClick = index => {
    toggled = !toggled;
    anime({
      targets: '.tile',
      opacity: toggled ? 0.5 : 1,
      delay: anime.stagger(25, {
        grid: [columns, rows],
        from: index,
      }),
    })
  }

  const createTile = index => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.onclick = e => handleOnClick(index);
    return tile;
  }

  const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index));
      return null;
    });
  }

  const createGrid = () => {
    wrapper.innerHTML = '';
    const size = document.body.clientWidth > 800 ? 100 : 50;
    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    createTiles(columns * rows);
  }

  window.onresize = () => createGrid();
  window.onload = () => createGrid();
}

export default TileGrid;
