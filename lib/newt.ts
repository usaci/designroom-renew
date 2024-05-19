import 'server-only';
import { createClient } from 'newt-client-js'
import { Article } from '@/types/article'
import { cache } from 'react';
import { Category } from '@/types/category';

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
            select: ['_id', 'title', 'slug', 'body', '_sys', 'contents', 'postDate', 'categories', 'eyecatch'],
        }
    })
    return items;
})

export const getArticlesByCategory = cache(async (category_id:string) => {
    const { items } = await client.getContents<Article>({
        appUid: 'design-room',
        modelUid: 'post', 
        query: {
            categories: category_id,
            select: ['_id', 'title', 'slug', 'body', '_sys', 'contents', 'postDate', 'categories', 'eyecatch'],
        }
    })
    return items;
})

export const getPostCategory = cache(async (slug:string) => {
    const category = await client.getFirstContent<Category>({ 
        appUid: 'design-room',
        modelUid: 'categories', 
        query: {
            slug: slug,
            select: ['_id', 'slug','value',],
        }
    })
    return category;
})

export const getPostCategoryPropById = cache(async (id: String) => {
    const category = await client.getFirstContent<Category>({ 
        appUid: 'design-room',
        modelUid: 'categories', 
        query: {
            _id: id,
        }
    })
    return category;
})

export const getCategories = cache(async () => {
    const category = await client.getContents<Article>({ 
        appUid: 'design-room',
        modelUid: 'categories', 
        query: {
            select: ['_id', 'slug','value'],
        }
    })
    return category;
})

export const getArticleBySlug = cache(async (slug:string) => {
    const article = await client.getFirstContent<Article>({
        appUid: 'design-room',
        modelUid: 'post', 
        query: {
            slug, 
            select: ['_id', 'title', 'slug', 'description', '_sys', 'contents', 'postDate', 'categories', 'eyecatch'],
        }
    })
    return article;
})