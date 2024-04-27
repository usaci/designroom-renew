import Image from "next/image";
import styles from "./index.module.scss";
import layoutStyles from "./styles/layout.module.scss";
import Card from "./_components/elements/card"

export default function Home() {
  return (
      <div className={styles.inner}>
        <ul className={layoutStyles.cards}>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']} date={'2024/04/01'}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
          <Card title={"これはテストです。これはテストです。"} categories={['ああ', 'いい']}></Card>
        </ul>
      </div>
  );
}
