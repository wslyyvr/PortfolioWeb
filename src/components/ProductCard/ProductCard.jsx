import './ProductCard.scss';
import productImg from '../../assets/images/ProductImg.jpg';
import Button from '../Button/Button.jsx';
import { motion } from "framer-motion";
import CaseDetailPopup from '../CaseDetailPopup/CaseDetailPopup.jsx';
import { useState } from 'react';

function ProductCard({ product, index }) {
   const [popupOpen, setPopupOpen] = useState(false);
  const reverse = index % 2 === 1;
  const random = (min, max) => Math.random() * (max - min) + min;


  return (
    <>
      <motion.div
        className={`display-card ${reverse ? "reverse" : ""}`}

        initial={{
          opacity: 0,
          x: random(300, 300),   // movein
          y: random(-120, 120),
          rotate: random(-20, 20)
        }}

        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0
        }}

        exit={{
          opacity: 0,
          x: random(-1200, -1200),  // move out
          y: random(-600, 600),
          rotate: random(-360, 360)
        }}

        transition={{
          duration: 0.39,         // move in/out speed
          delay: index * 0.05,    // stagger 更紧凑
          ease: "easeOut"
        }}

        whileHover={{ scale: 1.03 }}
      >

        <div className='display-card_left'>
          <img src={product.img[0]} alt={product.name} className="case-img" />
        </div>

        <div className='display-card_right'>
          <h2>{product.name}</h2>
          <ul>
            {product.keyPoints.map((point, idx) => (
              <li key={idx} className='product-key_point'>{point}</li>
            ))}
          </ul>

          <Button
            text="Learn More >>"
            onClick={() =>( setPopupOpen(true))}
            initialBackgroundColor="#3967dd"
            initialColor="#ffffff"
            variant="CaseDetailButton"
          />
        </div>
      </motion.div>
      <CaseDetailPopup
        showcase={popupOpen ? product : null}
        onCancel={() => setPopupOpen(false)}
      />
    </>





  );
}

export default ProductCard;