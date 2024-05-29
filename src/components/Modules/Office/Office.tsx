import { Title } from "@/components/UI/Heading/Heading";
import styles from "./office.module.scss";
import Video from "./Video";

export default function Office() {
  return (
    <div className={styles.wrap}>
      <Title className={styles.title}>Наш офис</Title>
      <div className={styles.videoWrap}>
        <div className={styles.videoPlayerContainer}>
          <Video
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_mNYSovE6Dg?si=6f5Ws9OLOdUhVOUx"
            title="YouTube video player"
          />
        </div>
      </div>
    </div>
  );
}
