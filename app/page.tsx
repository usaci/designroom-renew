import layoutStyles from "./styles/layout.module.scss";
import Card from "./_components/elements/card"
import { getStaticProps } from "next/dist/build/templates/pages";
import { getArticles } from "@/lib/newt";


export default async function Home() {
  const articles = await getArticles();
  return (
      <div className={layoutStyles.inner}>
        <ul className={layoutStyles.cards}>
          {

            articles.map((article) => {
              // カテゴリーを配列に整える
              const categories = [];
              article.postCategories.map((category) => {
                categories.push(category.categoryValue);
              })
              // 日付のフォーマットを変更する
              const changeDateFormat = (val) => {
                const date = val.slice(0, 10).replaceAll('-', '/');
                return date;
              }
              const formattedDate = changeDateFormat(article._sys.raw.createdAt)
              return (
                <Card title={article.title} categories={categories} date={formattedDate} key={article.id} slug={article.slug}></Card>
                )
              })
            }
        </ul>
      </div>
  );
}
