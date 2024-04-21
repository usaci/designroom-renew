import React from "react";
import styles from '@/app/styles/header.module.scss'
import logo from "@/public/logo.png";
const Header: React.FC = () => {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.inner}>
                <h1 className={styles.siteHeader__logo}>
                    <img src={logo.src} alt="デザインの部屋"/>
                </h1>
                <nav className={styles.siteHeader__nav}>
                    <ul>
                        <li>グラフィックデザイン</li>
                        <li>Webデザイン</li>
                        <li>映像デザイン</li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}

export default Header;