"use client";
import styles from "@/app/styles/card.module.scss"
import { link } from 'react-router-dom';
type CardProps = {
    title: String,
    date: String,
    categories: Array<string>,
}
const cardLayout: Function = ({title, children, date, categories}: CardProps & {children: React.ReactNode}) => {
    return (
        <li className={styles.card}>
            <article>
                <div className={styles.inner}>    
                    <figure className={styles.eyecatch}>
                        <img src="dummy.jpg" alt="" />
                    </figure>
                    <ul className={styles.categories}>
                        { categories && categories.map((category)=><li className={styles.category} key={category}>{ category }</li>) }
                        {/* <li className={styles.category} onClick={getCategories}>カテゴリ</li> */}
                    </ul>
                    <h2 className={styles.title}>{title}</h2>
                    <time className={styles.postDate}>{date}</time>
                </div>
            </article>

        </li>
    )
}


export default cardLayout;