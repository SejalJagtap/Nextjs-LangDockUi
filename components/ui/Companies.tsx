// Companies.js
import Image from 'next/image';
import ImageContainer from '@/lib/Company';

const Companies = () => {
  const images = ImageContainer();

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2  gap-5 ">
      {images.map((image, index) => (
        <div key={index} className="flex justify-center items-center">
          {/* Use the next/image component with the imported image */}
          <Image src={image} alt={`Image ${index}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default Companies;
