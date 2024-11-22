import { useEffect } from 'react';
import './App.css';
import TileGrid from './TileGrid';

function App() {
  useEffect(() => {
    const titleWrapper = document.querySelector('.title-wrapper');
    const contentWrapper = document.querySelector('.content-wrapper');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      if (scrollPosition > 0) {
        titleWrapper.style.transform = 'translateY(-100%)'; // Scroll title up out of view
        contentWrapper.style.transform = 'translateY(0)'; // Scroll content into view
      } else {
        titleWrapper.style.transform = 'translateY(0)'; // Reset title position
        contentWrapper.style.transform = 'translateY(100vh)'; // Move content wrapper off screen
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="tiles-wrapper">
        <TileGrid />
      </div>
      <div className="title-wrapper">
        <h1 id="title" className="centered">Title</h1>
      </div>
      <div className="content-wrapper">
        <p>
          There's some text here.
        </p>
      </div>
    </div>
  );
}

export default App;
