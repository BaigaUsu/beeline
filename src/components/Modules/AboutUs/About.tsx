'use client'

import { Title } from "@/components/UI/Heading/Heading";
import styles from "./about.module.scss";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import firstImg from "../../../../public/about-images/first.png";
import secondImg from "../../../../public/about-images/second.png";
import thirdImg from "../../../../public/about-images/third.png";
import fourthImg from "../../../../public/about-images/fourth.png";

export default function AboutUs() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [fourthHovered, setFourthHovered] = useState<string | null>(null);

  const firstImgClasses = clsx(styles.image, styles.firstImg, {
    [styles.hovered]: hovered === "secondImg",
  });
  const thirdImgClasses = clsx(styles.image, styles.thirdImg, {
    [styles.thirdHovered]: fourthHovered === "fourthImg",
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.titleWrap}>
        <Title> О нас</Title>
        <p className={styles.description}>
          Билайн был основан в 1992 году и стал первым Телеком-оператором на
          российском рынке. Сейчас билайн — это почти 50 миллионов клиентов и 27
          тысяч сотрудников.
        </p>
      </div>
      <div className={styles.imagesWrap}>
        <Image src="/about-images/bgIcon.svg" alt="" className={styles.bgIcon} width="1000" height="722"/>
        <Image className={firstImgClasses} src={firstImg} alt="about-us-img" />
        <Image
          className={`${styles.image} ${styles.secondImg}`}
          src={secondImg}
          alt="about-us-img"
          onMouseEnter={() => setHovered("secondImg")}
          onMouseLeave={() => setHovered(null)}
        />
        <Image className={thirdImgClasses} src={thirdImg} alt="about-us-img" />
        <Image
          className={`${styles.image} ${styles.fourthImg}`}
          src={fourthImg}
          alt="about-us-img"
          onMouseEnter={() => setFourthHovered("fourthImg")}
          onMouseLeave={() => setFourthHovered(null)}
        />
      </div>
    </div>
  );
}