import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './swiper.module.css';

const DynamicSwiper = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setImages([
        '/B1.png',
        '/temp.png',
        '/B1.png',
        '/temp.png',
        '/B1.png',
        '/temp.png',
      ]);
    }, 1000);
  }, []);

  if (images.length === 0) {
    return (
      <div className={styles['carousel-container']}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles['carousel-container']}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image + index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DynamicSwiper;