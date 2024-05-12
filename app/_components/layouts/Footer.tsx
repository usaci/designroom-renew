import React from "react";
import logo from "@/public/logo.png";
import styles from '@/app/styles/footer.module.scss';

const Footer: Function = ({children}: React.ReactNode) => {
    return (
        <footer className={styles.siteFooter}>
            <div className={styles.inner}>
                <ul className={styles.siteHeader__breadcrumbs}>
                    { children }
                </ul>
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