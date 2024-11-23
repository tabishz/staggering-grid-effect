import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './App.css';
import TileGrid from './TileGrid';

function App() {
  useEffect(() => {
    anime({
      targets: '#xeidy',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      // delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <div className="App">
      <div className="tiles-wrapper">
        <TileGrid />
      </div>
      <div className="title-wrapper">
        {/* <h1 id="title" className="centered">Title</h1> */}
        <svg id='title' className="centered" viewBox="-4 -4 480 180">
          <path id='xeidy' stroke="white" stroke-width="4" fill="none" d="M 94.6 0 L 62.4 67.2 L 94.6 136.2 L 68.8 136.2 L 48.2 86 L 47 86 L 25.8 136.2 L 0 136.2 L 31.4 67.2 Q 23.8 50.6 15.7 33.6 Q 7.6 16.6 0 0 L 25.8 0 L 47 43.4 L 48.2 43.4 Q 50.6 38.2 53.2 32.8 Q 55.8 27.4 58.4 21.8 L 68.8 0 L 94.6 0 Z M 446.2 34.4 L 405.6 171 L 383.6 171 L 393.8 135.8 L 363 34.4 L 385.2 34.4 L 404.6 99.4 L 423.8 34.4 L 446.2 34.4 Z M 104.8 101.6 L 104.8 70.6 Q 104.8 63.2 107.6 56.7 Q 110.4 50.2 115 45.2 Q 119.6 40.2 125.6 37.3 A 29.358 29.358 0 0 1 132.725 34.879 A 25.246 25.246 0 0 1 137.6 34.4 L 160.4 34.4 A 31.477 31.477 0 0 1 168.423 35.387 A 26.396 26.396 0 0 1 174.3 37.7 A 33.482 33.482 0 0 1 183.376 44.777 A 31.773 31.773 0 0 1 184.5 46.1 Q 188.6 51.2 190.9 57.5 A 38.161 38.161 0 0 1 192.877 65.258 A 32.477 32.477 0 0 1 193.2 69.8 L 193.2 95.6 L 128.4 95.6 L 128.4 101 A 20.286 20.286 0 0 0 128.715 104.712 Q 129.091 106.725 129.913 108.269 A 8.754 8.754 0 0 0 132.4 111.2 A 14.163 14.163 0 0 0 137.342 113.53 Q 139.325 114.054 141.663 114.168 A 27.326 27.326 0 0 0 143 114.2 L 189.6 114.2 L 189.6 136.6 L 137.8 136.6 Q 131 136.6 125 133.9 Q 119 131.2 114.5 126.6 A 33.217 33.217 0 0 1 107.948 116.882 A 38.355 38.355 0 0 1 107.4 115.6 A 35.734 35.734 0 0 1 104.907 104.638 A 42.418 42.418 0 0 1 104.8 101.6 Z M 255.6 136.2 L 255.6 0 L 317.8 0 Q 324.4 0 330.3 2.8 Q 336.2 5.6 340.6 10.6 Q 345 15.6 347.5 22.1 A 38.133 38.133 0 0 1 349.99 35.079 A 43.319 43.319 0 0 1 350 36 L 350 100.2 A 40.396 40.396 0 0 1 348.974 109.445 A 35.019 35.019 0 0 1 347.5 114.2 Q 345 120.6 340.6 125.6 Q 336.2 130.6 330.3 133.4 Q 324.4 136.2 317.8 136.2 L 255.6 136.2 Z M 209.8 136.2 L 209.8 0 L 235.2 0 L 235.2 136.2 L 209.8 136.2 Z M 280.6 111 L 311.6 111 A 12.922 12.922 0 0 0 314.785 110.621 A 10.958 10.958 0 0 0 317 109.8 Q 319.4 108.6 321.3 106.6 Q 323.2 104.6 324.2 101.9 Q 325.2 99.2 325.2 96 L 325.2 40 Q 325.2 37 324.2 34.3 Q 323.2 31.6 321.3 29.5 A 14.612 14.612 0 0 0 317.298 26.354 A 13.981 13.981 0 0 0 317 26.2 A 11.421 11.421 0 0 0 312.973 25.066 A 14.025 14.025 0 0 0 311.6 25 L 280.6 25 L 280.6 111 Z M 128.6 75.6 L 128.6 76.6 L 170 76.6 L 170 75.6 A 24.992 24.992 0 0 0 169.346 69.735 A 18.123 18.123 0 0 0 166 62.7 A 12.791 12.791 0 0 0 156.66 57.662 A 16.982 16.982 0 0 0 155.2 57.6 L 142.8 57.6 A 11.77 11.77 0 0 0 138.684 58.309 A 11.005 11.005 0 0 0 137 59.1 Q 134.4 60.6 132.6 63 Q 130.8 65.4 129.7 68.7 Q 128.6 72 128.6 75.6 Z"></path>
        </svg>
      </div>
      <a id='test-button' className='button-link' href='https://bing.com' target='_blank' rel="noreferrer">
        <span>Test Button</span>
      </a>
      <div className="content-wrapper">
        <p>
          There's some text here.
        </p>
      </div>
    </div>
  );
}

export default App;
