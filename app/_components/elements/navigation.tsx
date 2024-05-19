'use client';
import styles from '@/app/styles/header.module.scss';
import ArticleList from '@/app/_components/elements/articleList'
import React, { useEffect, useRef, useState } from 'react';

type Props = {
    Articles: Object
}
const NavButton: Function = (Articles :Object) => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleButton =  () => {
        setOpenMenu(!openMenu)
    }


    return (
        <div>
            <button className={(openMenu ? `${styles.siteHeader__nav__button} ${styles.isActive}`: styles.siteHeader__nav__button)} onClick={toggleButton}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={openMenu ? `${styles.siteHeader__nav} ${styles.isActive}` : styles.siteHeader__nav}>
                <p className={styles.siteHeader__nav__title}>記事をさがす</p>
                <ul>
                    <li>
                        <a href="/category/graphic-design" className="link">グラフィックデザイン</a>
                    </li>
                    <li>
                        <a href="/category/web-design" className="link">Webデザイン</a>
                    </li>
                    <li>
                        <a  href="/category/uiux-design" className="link">UIUXデザイン</a>
                    </li>
                </ul>
                <p className={styles.siteHeader__nav__title}>おすすめ記事</p>
                <ul>
                    {
                        Articles.Articles.map((article:object) => {
                            return (
                                <ArticleList title={article.title} date={article.postDate} slug={article.slug} categories={article.categories} eyecatch={article.eyecatch}></ArticleList>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default NavButton;