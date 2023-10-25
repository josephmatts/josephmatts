import './Horizontal_scrollable_cards.css';
import { useState } from 'react';
import ImagePopup from './ImagePopup';

const imageDirectoryMap = {
  category1: require.context("../assets/what_is_dc", false),
  category2: require.context("../assets/sketchwalk", false),
  category3: require.context("../assets/community_meetups", false),
  // Add more categories and directories as needed
};


function HorizontalScrollableImageCards(props) {

  var imageContext = imageDirectoryMap[props.cat]
  var images = imageContext.keys().map(imageContext);

  const [count, setCount] = useState(1);
  const [isImageOpen, setOpen] = useState(false);


  const changeActiveImage = (imgId) => {
    // Call setCount to update the state
    setCount(imgId);
    setOpen(true)
  };


  return (
    <div className="card-container-column">
      <div className="card-container">
        {images.map((card, index) => {
          var scaleVal = 1
          var translateVal = 0
          // if (card.id === count) {
          //   scaleVal = 1.2
          //   zInd = 5
          //   translateVal = 5
          // }
          const containerStyle = {
            backgroundImage: `url(${card})`,
            borderRadius: '25px',

            scale: `${scaleVal}`,
            transform: `translateY(${translateVal}%)`,

          };

          const onImageClick = () => {
            changeActiveImage(index)
          }

          const onRequestClose = () => {
            setOpen(false)
          }

          return (
            <div className="parent-container" key={index}>
              <div className="card" style={containerStyle} onClick={onImageClick}>
                <img className='card' src={card} alt="" />
              </div>
              <ImagePopup isOpen={isImageOpen && index === count} onRequestClose={onRequestClose} imageUrl={card}></ImagePopup>

            </div>
          )
        })}

      </div>
      {/* <div className="arrows">
        <img src={leftArrow} alt="" className="left-arrow" />
        <img src={rightArrow} alt="" className="right-arrow" />
      </div> */}
    </div>
  );
}

export default HorizontalScrollableImageCards;
