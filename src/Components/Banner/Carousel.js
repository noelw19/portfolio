import React from 'react';
import ReactSwipe from 'react-swipe';

import img from '../../Images/Ferment2.jpg'
import img1 from '../../Images/apple-cider-4676465_1920.jpg'
import img2 from '../../Images/pexels-angele-j-128403.jpg'


const Carousel = () => {
  let reactSwipeEl;

  return (
    <div className='swipeContainer'>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true, widthOfSiblingSlidePreview: 10 }}
        ref={el => (reactSwipeEl = el)}
      >
         {/* need to sort img sizing as the carousel gets too large when 
         diff size images are used. */}
        <div className='imgContainer'><img src={ img }/></div>
        <div className='imgContainer'><img src={ img1 }/></div>
        <div className='imgContainer'><img src={ img2 }/></div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};

export default Carousel;