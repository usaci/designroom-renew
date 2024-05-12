import 'server-only';
import { createClient } from 'newt-client-js'
import { Article } from '@/types/article'
import { cache } from 'react';

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getArticles = cache(async () => {
    const { items } = await client.getContents<Article>({
        appUid: 'design-room',
        modelUid: 'post', 
        query: {
            select: ['_id', 'title', 'slug', 'body', '_sys', 'contents', 'postDate', 'postCategories', 'eyecatch'],
        }
    })
    return items;
})

export const getArticlesByCategory = cache(async (category:string) => {
    const { items } = await client.getContents<Article>({
        appUid: 'design-room',
        modelUid: 'post', 
        query: {
            select: ['_id', 'title', 'slug', 'body', '_sys', 'contents', 'postDate', 'postCategories', 'eyecatch'],
            filters: {
                postCategories: {
                    in: [category]
                }
            }
        }
    })

    return items;
})

export const getArticleBySlug = cache(async (slug:string) => {
    const article = await client.getFirstContent<Article>({
        appUid: 'design-room',
        modelUid: 'post', 
        query: {
            slug, 
            select: ['_id', 'title', 'slug', 'body', '_sys', 'contents', 'postDate', 'postCategories', 'eyecatch'],
            contents: {
                fmt: "text"
            }
        }
    })
    return article;
})