"use client";
import styles from "@/app/styles/card.module.scss"
type CardProps = {
    title: string,
    date: string,
    categories: Array<string>,
    slug: string,
    eyecatch: string,
}
const cardLayout: Function = ({title, date, categories, slug, eyecatch}: CardProps & {children: React.ReactNode}) => {
    return (
        <li className={styles.card}>
            <article>
                <a href={"/post/" + slug}>
                    <div className={styles.inner}>    
                        <figure className={styles.eyecatch}>
                            <img src={eyecatch? eyecatch : "dummy.jpg"} alt={title} />
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