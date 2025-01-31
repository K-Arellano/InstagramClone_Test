import React from 'react';
import Image from 'next/image';
import useLoginImageCycle from '../hooks/useLoginImageCycle';

const MobileMockup: React.FC = () => {
  const { image, visible } = useLoginImageCycle();

  const fadeStyle = {
    opacity: visible ? 1 : 0,
    transition: 'opacity 1s ease-in-out', // Inline fade transition
  };

  return (
    <div className="relative hidden h-[590px] overflow-hidden lg:block">
      <Image src="/loginFrame.png" alt="Instagram mockup" width={465} height={635} priority />
      <div className="absolute top-6 right-14 w-[250px] h-[541px]">
        <Image
          src={image}
          alt="Instagram feed"
          layout="fill"
          objectFit="contain"
          style={fadeStyle} // Apply the fade style inline
        />
      </div>
    </div>
  );
};

export default MobileMockup;
