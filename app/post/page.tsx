import type { Metadata } from "next";
import layoutStyles from "@/app/styles/layout.module.scss";
import Card from "@/app/_components/elements/card"
import { getArticles } from "@/lib/newt";
export const metadata: Metadata = {
  title: "デザインの部屋 | デザインの総合メディア",
  description: "デザインの部屋は、グラフィックデザイン、Webデザイン、UIUXデザインなど、デザイン全般について扱うメディアです。",
};

export default async function Home() {
  const articles = await getArticles();
  return (
      <div className={layoutStyles.inner}>
        <h2 className="heading--main">記事一覧</h2>
        <ul className={layoutStyles.cards}>
          {

            articles.map((article) => {
              // カテゴリーを配列に整える
              const categories = [];
              article.categories.map((category) => {
                categories.push(category.value);
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
