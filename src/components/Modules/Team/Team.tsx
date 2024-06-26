'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Title } from "@/components/UI/Heading/Heading";
import styles from "./team.module.scss";
import Image from "next/image";
import { useRef, useState, useEffect } from 'react';
import { RefObject } from 'react';
import type { SwiperRef } from 'swiper/react';

export default function Team() {
  const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null);
  const [swiperIndex, setSwiperIndex] = useState(1);
  const prevButtonRef = useRef<HTMLDivElement | null>(null);
  const nextButtonRef = useRef<HTMLDivElement | null>(null);
  const rootStyles = {
    '--swiper-theme-color': 'rgb(153, 153, 153)',
    '--swiper-navigation-size': '0px',
    '--swiper-navigation-sides-offset': '310px',
  } as React.CSSProperties;

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const navigationOptions = swiperInstance.params.navigation;

      if (typeof navigationOptions === 'object' && navigationOptions !== null) {
        navigationOptions.prevEl = prevButtonRef.current;
        navigationOptions.nextEl = nextButtonRef.current;

        swiperInstance.navigation.destroy();
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, [prevButtonRef, nextButtonRef]);

  return (
    <div className={styles.wrap}>
      <Title>
        Команда <span className={styles.titleText}>Beeline</span>
      </Title>
      <div className={styles.carouselWrap} style={rootStyles}>
        <Swiper
          centeredSlides={true}
          initialSlide={1}
          slidesPerView={1.59}
          effect="fade"
          loop={true}
          modules={[Navigation]}
          speed={600}
          grabCursor={true}
          onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onSwiper={(swiper) => {
            if (swiperRef.current) {
              swiperRef.current.swiper = swiper;
            }
          }}
          ref={swiperRef}
        >
          <div ref={prevButtonRef} className="swiper-button-prev">
            <Image src='/team-image/scroll-left.svg' alt='' className={styles.arrow1} width={80} height={80}/>
          </div>
          <SwiperSlide className={styles.image}>
            <div className={styles.imageWrapper}>
              <Image
                src="/team-image/first-img.png"
                alt="First"
                fill
                className={styles.imageFill}
              />
              <div className={styles.overlay}></div>
              <div className={styles.hoverText}>
                Мы ежедневно решаем задачи, создаем новые проекты, совершаем маленькие подвиги, помогаем, учим и учимся друг у друга. Мы создали особенное приложение, с помощью которого можем выразить благодарность и признательность коллегам.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.image}>
            <div className={styles.imageWrapper}>
              <Image
                src="/team-image/second.png"
                alt="Second"
                fill
                className={styles.imageFill}
              />
              <div className={styles.overlay}></div>
              <div className={styles.hoverText}>
                Мы ежедневно решаем задачи, создаем новые проекты, совершаем маленькие подвиги, помогаем, учим и учимся друг у друга. Мы создали особенное приложение, с помощью которого можем выразить благодарность и признательность коллегам.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.image}>
            <div className={styles.imageWrapper}>
              <Image
                src="/team-image/third.png"
                alt="Third"
                fill
                className={styles.imageFill}
              />
              <div className={styles.overlay}></div>
              <div className={styles.hoverText}>
                Мы ежедневно решаем задачи, создаем новые проекты, совершаем маленькие подвиги, помогаем, учим и учимся друг у друга. Мы создали особенное приложение, с помощью которого можем выразить благодарность и признательность коллегам.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.image}>
            <div className={styles.imageWrapper}>
              <Image
                src="/team-image/second.png"
                alt="Second"
                fill
                className={styles.imageFill}
              />
              <div className={styles.overlay}></div>
              <div className={styles.hoverText}>
                Мы ежедневно решаем задачи, создаем новые проекты, совершаем маленькие подвиги, помогаем, учим и учимся друг у друга. Мы создали особенное приложение, с помощью которого можем выразить благодарность и признательность коллегам.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div ref={nextButtonRef} className="swiper-button-next">
          <Image src='/team-image/scroll-right.svg' className={styles.arrow2} alt='' width={80} height={80}/>
        </div>
      </div>
    </div>
  );
}
