import React from "react";
import Styles from "@/app/Styles/articleList.module.scss";
type ArticleListProp = {
    title: String,
    date: String, 
    slug: String,
    postDate: String,
    categories: Array<String>,
}
const articleListLayout: Function = ({title, slug, postDate, categories, eyecatch}: ArticleListProp & {children: React.Reactnode}) => {
    return (
        <li className={Styles.articleList__item}>
            <a href={`${slug}`}>
                <div className={Styles.articleList__item__inner}>
                    <figure className={Styles.articleList__item__eyecatch}>
                    <img src={eyecatch? eyecatch.src : "/dummy.jpg"} alt={title} />
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

export default articleListLayout;