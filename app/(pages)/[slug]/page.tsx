import layoutStyles from "@/app/styles/layout.module.scss";
import articleStyles from "@/app/styles/article.module.scss";
import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { Metadata } from 'next'
import type { Article } from '@/types/article'
import { create } from "domain";
import ReactMarkdown from "react-markdown";

type Props = {
  params: {
    slug: string
  }
}


export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  }
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await getArticleBySlug(slug)
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
    console.log(node.children[0].position);
    return ( <li className={articleStyles.toc__h2}><a href={"#" + node.position.start.line.toString()}>{props.children}</a></li> )
  })

  const tocH3 = (({node, ...props}) => {
    console.log(node.children[0].position);
    return ( <li className={articleStyles.toc__h3}><a href={"#" +node.position.start.line.toString()}>{props.children}</a></li> )
  })

  return (
    <article>
      <div className={articleStyles.inner}>
        <header className="article__header">
          <p className={articleStyles.article__postDate}>{formattedDate}</p>
          <h1 className={articleStyles.article__title}>{article.title}</h1>
        </header>
        <section className="article__main">
          <div className={articleStyles.article__main__inner}>
            {/* <div dangerouslySetInnerHTML={{__html: article.contents}}></div> */}
            <div>
              <ReactMarkdown
                components={{
                  h2: H2,
                  h3: H3
                }}
              >{article.contents}</ReactMarkdown>
            </div>
            <div className={articleStyles.toc}>
              <h3>目次</h3>
              <ul>
                <ReactMarkdown
                allowedElements={['h2', 'h3']}
                  components={{
                    h2: tocH2,
                    h3: tocH3
                  }}
                >
                  {article.contents}
                </ReactMarkdown>
              </ul>
            </div>
          </div>
        </section>
        <footer className="article__footer">
        </footer>
      </div>
    </article>

  )
}