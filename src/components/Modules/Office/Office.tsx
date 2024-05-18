import { Title } from "@/components/UI/Heading/Heading";
import styles from "./office.module.scss";
import Video from "./Video";

export default function Office() {
  return (
    <div className={styles.wrap}>
      <Title>Наш офис</Title>
      <div className={styles.videoWrap}>
        <Video
          width="1040"
          height="500"
          src="https://www.youtube.com/embed/_mNYSovE6Dg?si=6f5Ws9OLOdUhVOUx"
          title="YouTube video player"
        />
      </div>
    </div>
  );
}
