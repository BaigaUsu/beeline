'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Title } from "@/components/UI/Heading/Heading";
import styles from "./team.module.scss";
import '../../../app/career/global.css'
import Image from "next/image";
import { useRef, useState, useEffect } from 'react';

export default function Team() {
  const [swiperIndex, setSwiperIndex] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);
  const prevButtonRef = useRef<HTMLDivElement | null>(null);
  const nextButtonRef = useRef<HTMLDivElement | null>(null);

  const updateRootStyles = () => {
    const root = document.documentElement;
    if (window.innerWidth <= 499) {
      root.style.setProperty('--swiper-navigation-sides-offset', '190px');
    } else if (window.innerWidth <= 768) {
      root.style.setProperty('--swiper-navigation-sides-offset', '210px');
    } else if (window.innerWidth <= 992) {
      root.style.setProperty('--swiper-navigation-sides-offset', '210px');
    } else if (window.innerWidth <= 1200) {
      root.style.setProperty('--swiper-navigation-sides-offset', '250px');
    } else {
      root.style.setProperty('--swiper-navigation-sides-offset', '300px');
    }
  };

  useEffect(() => {
    updateRootStyles();
    window.addEventListener('resize', updateRootStyles);

    return () => {
      window.removeEventListener('resize', updateRootStyles);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;

      // Reinitialize navigation
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [prevButtonRef, nextButtonRef]);

  return (
    <div className={styles.wrap}>
      <Title>
        Команда <span className={styles.titleText}>Beeline</span>
      </Title>
      <div className={styles.carouselWrap} >
        <Swiper
          centeredSlides={true}
          initialSlide={1}
          slidesPerView={1.59}
          effect="fade"
          loop={true}
          modules={[Navigation]}
          speed={600}
          grabCursor={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          ref={swiperRef}
        >
          <div ref={prevButtonRef} className="swiper-button-prev">
            <Image src='/team-image/scroll-left.svg' alt='' className={styles.arrow1} width={80} height={80}/>
          </div>
          <SwiperSlide className={styles.image}>
            <Image
              src="/team-image/first-img.png"
              alt="First"
              layout="responsive"
              width={820}
              height={440}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.image}>
            <Image
              src="/team-image/second.png"
              alt="Second"
              layout="responsive"
              width={820}
              height={440}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.image}>
            <Image
              src="/team-image/third.png"
              alt="Third"
              layout="responsive"
              width={820}
              height={440}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.image}>
            <Image
              src="/team-image/second.png"
              alt="Second"
              layout="responsive"
              width={820}
              height={440}
            />
          </SwiperSlide>
        </Swiper>
        <div ref={nextButtonRef} className="swiper-button-next">
          <Image src='/team-image/scroll-right.svg' className={styles.arrow2} alt='' width={80} height={80}/>
        </div>
      </div>
    </div>
  );
}