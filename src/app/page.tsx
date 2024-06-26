import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import Header from "@/components/Header";
import Rooms from "@/components/Rooms";
import Proposal from "@/components/Proposal";
import Rest from "@/components/Rest";
import Enjoy from "@/components/Enjoy";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Rooms/> */}
      <Enjoy />
      <Rest />
      <Proposal />
      <div className={styles.review}>
        <div>
          <img src="circle-left.svg" />
          <h2>ПОСМОТРИТЕ ОБЗОРНОЕ ВИДЕО О НАШЕМ ОТЕЛЕ</h2>
          <img src="circle-right.svg" />
        </div>
        <img src="video.jpg" className={styles.video} />
      </div>
    </div>

  );
}
