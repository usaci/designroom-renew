export interface Article {
    _id: string
    _sys: Object
    eyecatch: Object
    title: string
    slug: string
    body: string,
    categories: Array<Object>,
    description: string
}