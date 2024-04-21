import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
      <div className={styles.description}>
        <h1 className={styles.title}>Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
        <p className={styles.text}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>
      </div>
  );
}
