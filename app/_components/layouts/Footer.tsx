import React from "react";
import logo from "@/public/logo.png";
import styles from '@/app/styles/footer.module.scss'
const Footer: React.FC = () => {
    return (
        <footer className={styles.siteFooter}>
            <div className={styles.inner}>
                <ul className={styles.siteFooter__nav}>
                    <li>タグ</li>
                    <li>タグ</li>
                    <li>タグ</li>
                    <li>タグ</li>
                </ul>
                <p className={styles.siteHeader__logo}>
                    <img src={logo.src} alt="デザインの部屋"/>
                </p>
                <small>&nbsp; 2024 デザインの部屋</small>
            </div>
        </footer>
    )
}
export default Footer;