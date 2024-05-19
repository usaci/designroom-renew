"use client";
import styles from "@/app/styles/card.module.scss"
import { link } from 'react-router-dom';
type CardProps = {
    title: String,
    date: String,
    categories: Array<string>,
    slug: String,
    eyecatch: String,
}
const cardLayout: Function = ({title, date, categories, slug, eyecatch}: CardProps & {children: React.ReactNode}) => {
    return (
        <li className={styles.card}>
            <article>
                <a href={"/post/" + slug}>
                    <div className={styles.inner}>    
                        <figure className={styles.eyecatch}>
                            <img src={eyecatch? eyecatch : "@/app/dummy.jpg}"} alt={title} />
                        </figure>
                        <ul className={styles.categories}>
                            { categories && categories.map((category)=><li className={styles.category} key={category}>{ category }</li>) }
                            {/* <li className={styles.category} onClick={getCategories}>カテゴリ</li> */}
                        </ul>
                        <h2 className={styles.title}>
                            <span data-title={title}>{title}</span>
                        </h2>
                        <time className={styles.postDate}>{date}</time>
                    </div>
                </a>
            </article>

        </li>
    )
}


export default cardLayout;