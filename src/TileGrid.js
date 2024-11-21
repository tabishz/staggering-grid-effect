import { useState, useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

function TileGrid() {
  // const wrapper = document.getElementById('tiles');
  const tileWrapper = useRef(null);
  const [tiles, setTiles] = useState([]);
  const [toggled, setToggled] = useState(false);
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();
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

  const toggle = () => {
    setToggled(!toggled);
    document.body.classList.toggle("toggled");
  }

  const handleOnClick = index => {
    toggle();
    anime({
      targets: '.tile',
      opacity: toggled ? 1 : 0.5,
      delay: anime.stagger(50, { grid: [columns, rows], from: index }),
    });
  }

  const createGrid = () => {
    const size = document.body.clientWidth > 800 ? 64 : 48;
    setColumns(Math.floor(document.body.clientWidth / size));
    setRows(Math.floor(document.body.clientHeight / size));
    if (tileWrapper.current) {
      tileWrapper.current.style.setProperty("--columns", columns);
      tileWrapper.current.style.setProperty("--rows", rows);
    }
    const dimension = columns * rows;
    const newTiles = Array.from({ length: dimension }, (_, i) => i);
    setTiles(newTiles);
    // createTiles(dimension);
  }

  useEffect(() => {
    createGrid();
    const handleResize = () => createGrid();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [columns, rows]);

  useEffect(() => {
    let animationInterval;

    const animateTiles = () => {
      const numTilesToAnimate = Math.floor(tiles.length * 0.02);
      const randomIndices = [];
      while (randomIndices.length < numTilesToAnimate) {
        const randomIndex = Math.floor(Math.random() * tiles.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }

      randomIndices.forEach(index => {
        anime({
          targets: `.tile[data-index="${index}"]`, // Target individual tiles
          opacity: Math.random(),
          duration: 500, // Animation duration
          easing: 'easeInOutQuad',
        });
      });
    };

    if (tiles.length > 0) { // Start animation only after tiles are created
      animateTiles(); // Initial animation
      animationInterval = setInterval(animateTiles, 2500); // Repeat every 1000ms (1 second)
    }

    return () => clearInterval(animationInterval); // Clear interval on unmount
  }, [tiles]);


  return (
    <div id="tiles" ref={tileWrapper}>
      {tiles.map(index => (
        <div
          key={index}
          data-index={index}
          className="tile"
          onClick={() => handleOnClick(index)}
        />
      ))}
    </div>
  );
}

export default TileGrid;
