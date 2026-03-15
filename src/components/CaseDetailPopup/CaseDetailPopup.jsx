import { useState, useEffect } from 'react';
import './CaseDetailPopup.scss';
import Button from '../Button/Button.jsx';

import CloseIconTag from '../../assets/icons/close.svg';

function CaseDetailPopup({ showcase, onCancel }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  // 处理图片数组
  const images = showcase
    ? (Array.isArray(showcase.img) ? showcase.img : [showcase.img])
    : [];

  // button for neext page 
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // button for pre page 
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  //image auto play 
  useEffect(() => {
    if (!showcase || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length, showcase]);

  // reset image
  useEffect(() => {
    setCurrentIndex(0);
  }, [showcase]);

  if (!showcase) return null;

  return (
    <div className="popupPart">
      <div className="popupBox">

        <div className="popUpHeader">
          <Button
            icon={<img src={CloseIconTag} alt="closeTag" className="closeIcon" />}
            variant="CloseIcon"
            onClick={onCancel}
          />
        </div>

        <div className="popupInfo">

          <div className="img-part">
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((img, index) => (
                <img key={index} src={img} alt={`case-${index}`} className="carousel-image" />
              ))}
            </div>

            {images.length > 1 && (
              <div className="carousel-controls">
                <button onClick={prevImage} className="carousel-forword_btn">◀</button>
                <button onClick={nextImage} className="carousel-backwork_btn">▶</button>
              </div>
            )}
          </div>
          <div className="detail-part">
            <h2>{showcase.name}</h2>
            <div className='project-type'>
              <p className='tytletTag'>Type: </p>
              <p className='type_info'>{showcase.type}</p>
            </div>
            <div className='project-key_skill'>
              <p className='skillTag'>Key Still:  </p>
              <p className='skill_info'>{showcase.keySkills.join(" ,  ")}</p>
            </div>
            <div className='project-description'>
              <p className='descriptioTag'>Description: </p>
              <p className='description_info'>{showcase.description}</p>
            </div>

          </div>

        </div>
        <div className="popUpFooter">
          <Button
            text="Cancel"
            variant="DeletePopup"
            initialColor="#0e1fdc"
            initialBackgroundColor="#BDC5D5"
            onClick={onCancel}

          />
        </div>

      </div>

    </div>
  );
}

export default CaseDetailPopup;