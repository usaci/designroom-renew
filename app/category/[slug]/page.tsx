import type { Metadata } from "next";
import type { Category } from "@/types/category";
import Card from "@/app/_components/elements/card"
import layoutStyles from "@/app/styles/layout.module.scss";
import { getArticlesByCategory, getPostCategory, getPostCategoryPropById } from "@/lib/newt";

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const { slug } = params
  const category = await getPostCategory(slug);
  const categoryProps = await getPostCategoryPropById(category._id);
  return {
    title: categoryProps.value + " | デザインの部屋",
    description: '投稿詳細ページです',
  }
}



export default async function Category({ params }: Props) {
  const { slug } = params
  const category = await getPostCategory(slug);
  const articles = await getArticlesByCategory(category._id);
  if(articles.length > 0) {
    return (
      <div className={layoutStyles.inner}>
        <h2 className={layoutStyles.heading}>{category.value}</h2>
        <ul className={layoutStyles.cards}>
          {
            articles.map((article) => {
              // カテゴリーを配列に整える
              const categories = [];
              article.postCategories.map((category) => {
                categories.push(category.value);
              })
              // 日付のフォーマットを変更する
              const changeDateFormat = (val) => {
                const date = val.slice(0, 10).replaceAll('-', '/');
                return date;
              }
              const formattedDate = changeDateFormat(article._sys.raw.createdAt)
              return (
                <Card title={article.title} categories={categories} date={formattedDate} key={article.id} slug={article.slug} eyecatch={article.eyecatch?.src}></Card>
                )
              })
            }
        </ul>
      </div>
    );
  } else {
    return (
      <div className={layoutStyles.inner__notFound}>
        <h2 className={layoutStyles.heading}>{category.value}</h2>
        <p>投稿がありません。</p>
      </div>
    );

  }
}
