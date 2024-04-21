import Image from "next/image";
import styles from "./index.module.scss";
import Card from "./_components/elements/card"

export default function Home() {
  return (
      <div className={styles.inner}>
        <ul className={styles.cards}>
          <Card></Card>
        </ul>
      </div>
  );
}
