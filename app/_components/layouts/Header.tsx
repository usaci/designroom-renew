import React from "react";
import styles from '@/app/styles/header.module.scss'
import logo from "@/public/logo.png";
import Navigation from "@/app/_components/elements/navigation";
import { getArticles } from "@/lib/newt";

export default async function Header () {
    const articles = await getArticles();
    return (
        <header className={styles.siteHeader}>
            <div className={styles.inner}>
                <h1 className={styles.siteHeader__logo}>
                    <a href="/">
                        <img src={logo.src} alt="デザインの部屋"/>
                    </a>
                </h1>
                <Navigation Articles={articles}></Navigation>
                <div className={styles.siteHeader__nav__overlay}></div>
            </div>

        </header>
    );
}