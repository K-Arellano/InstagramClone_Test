import { useState, useEffect } from 'react';

const images = [
  '/loginImg1.png',
  '/loginImg2.png',
  '/loginImg3.png',
  '/loginImg4.png',
];

const useLoginImageCycle = (): { image: string; visible: boolean } => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Start fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image
        setVisible(true); // Start fade-in
      }, 2000); // Duration of the fade-out
    }, 5000); // Time between image changes

    return () => clearInterval(interval);
  }, [index]);

  return { image: images[index], visible };
};

export default useLoginImageCycle;
