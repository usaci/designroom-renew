import React from "react";
import styles from '@/app/styles/header.module.scss'
import logo from "@/public/logo.png";
const Header: React.FC = () => {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.inner}>
                <h1 className={styles.siteHeader__logo}>
                    <a href="/">
                        <img src={logo.src} alt="デザインの部屋"/>
                    </a>
                </h1>
                <nav className={styles.siteHeader__nav}>
                    <ul>
                        <li>
                            <a href="">グラフィックデザイン</a>
                        </li>
                        <li>
                            <a href="/postCategories=web-design">Webデザイン</a>
                        </li>
                        <li>
                            <a href="">映像デザイン</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}

export default Header;