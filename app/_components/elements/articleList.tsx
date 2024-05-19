'use client'
import React from "react";
import Styles from "@/app/styles/articleList.module.scss";
type ArticleListProp = {
    title: string,
    date: string, 
    slug: string,
    postDate: string,
    categories: Array<string>,
    eyecatch: string
}

const articleList: Function = ({title, slug, postDate, eyecatch}: ArticleListProp & {children: React.ReactNode}) => {
    return (
        <li className={Styles.articleList__item}>
            <a href={`${slug}`}>
                <div className={Styles.articleList__item__inner}>
                    <figure className={Styles.articleList__item__eyecatch}>
                    <img src={eyecatch? eyecatch : "/dummy.jpg"} alt={title} />
                    </figure>
                    <div className={Styles.articleList__item__text}>
                    <p className={Styles.articleList__postDate}>{postDate}</p>
                    <h3 className={Styles.articleList__item__title}>{title}</h3>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default articleList;