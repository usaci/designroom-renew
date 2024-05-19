import articleStyles from "@/app/styles/article.module.scss";
import { getArticles, getArticleBySlug } from '@/lib/newt';
import type { Metadata } from 'next';
import type { Article } from '@/types/article';
import Toc from '@/app/_components/elements/toc';
import Toc_sp from '@/app/_components/elements/toc_sp';
import ArticleListItem from "@/app/_components/elements/articleList";
import ReactMarkdown from "react-markdown";
import Breadcrumbs from "@/app/_components/elements/breadcrumbs";
type Props = {
  params: {
    slug: string,
  }
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  if(article?.description) {
    return {
      title: article?.title,
      description: article?.description,
    }
  } else {
    const description = article?.contents.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').replace(/\n/g, '').substr(0, 150) + "...";
    return {
      title: article?.title,
      description: description,
    }
  }
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const articles = await getArticles();
  const article = await getArticleBySlug(slug);
  if (!article) return
  // 日付のフォーマットを変更する
  const changeDateFormat = (val) => {
    const date = val.slice(0, 10).replaceAll('-', '/');
    return date;
  }
  const formattedDate = changeDateFormat(article._sys.raw.createdAt);

  // 目次を作成する
  const H2 = (({node, ...props}) => {
    return ( <h2 id={node.position.start.line.toString()}>{props.children}</h2> )
  })
  const H3 = (({node, ...props}) => {
    return ( <h3 id={node.position.start.line.toString()}>{props.children}</h3> )
  })

  const tocH2 = (({node, ...props}) => {
    return ( <li className={articleStyles.toc__h2}><a href={"#" + node.position.start.line.toString()}>{props.children}</a></li> )
  })

  const tocH3 = (({node, ...props}) => {
    return ( <li className={articleStyles.toc__h3}><a href={"#" +node.position.start.line.toString()}>{props.children}</a></li> )
  })

  return (
    <article>
      <div className={articleStyles.article__main__inner}>
        <aside className="sns">
          <ul className="sns__list">
            <li className="sns__item" key="snslogo-x">
              <a href=""><img src="/snslogo-x.png" alt="X" /></a>
            </li>
            <li className="sns__item" key="snslogo-line">
              <a href=""><img src="/snslogo-line.png" alt="LINE" /></a>
            </li>
            <li className="sns__item" key="snslogo-facebook">
              <a href=""><img src="/snslogo-facebook.png" alt="Facebook" /></a>
            </li>
            <li className="sns__item" key="snslogo-hatena">
              <a href=""><img src="/snslogo-hatena.png" alt="はてなブックマーク" /></a>
            </li>
          </ul>
        </aside>
        <div className={articleStyles.article__main__body}>
            <header className="article__header">
              <p className={articleStyles.article__postDate}>{formattedDate}</p>
              <h1 className={articleStyles.article__title}>{article.title}</h1>
              <figure className={articleStyles.article__eyecatch}>
                <img src={article.eyecatch? article.eyecatch.src : "@/app/dummy.jpg"} alt={article.title} />
              </figure>
              <div className={articleStyles.tocWrap__sp}>
                <h3>目次</h3>
                <Toc_sp></Toc_sp>
              </div>
            </header>
            <section className="article__main">
                <div className="article__main__body" dangerouslySetInnerHTML={{__html: article?.contents}}></div>
            </section>
            <footer className="article__footer">
              <div className={articleStyles.article__footer__recommend}>
                <h2 className={articleStyles.article__footer__recommend_title}>こんな記事もおすすめです</h2>
                {articles.map((article) => {
                  return (
                    <ArticleListItem title={article.title} slug={article.slug} postDate={changeDateFormat(article._sys.raw.createdAt)} categories={article.categories} eyecatch={article.eyecatch} key={article.slug}></ArticleListItem>
                  )
                })}
              </div>
            </footer>
        </div>
        <div className={articleStyles.tocWrap}>
          <h3>目次</h3>
          <Toc></Toc>
        </div>
      </div>
    </article>

  )
}