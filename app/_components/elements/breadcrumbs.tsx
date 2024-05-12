'use client';
import Styles from '@/app/styles/breadcrumbs.module.scss';
import React from "react";
import { usePathname, useRouter } from 'next/navigation'

type BreadProps = {
    title: String,
}

const breadcrumbs: React.FC = ({title}: BreadProps) => {
    const path = usePathname()
    const result = path.match(/\/post\/\w+/)
    const pattern_post = /\/post\/\w+/;
    const pattern_category = /\/category\/\w+/;
    const pattern_posts = /\/post\/\w{0}/;
    return (
        <div className={Styles.breadcrumbs}>
            {path.match(pattern_post) && (<ul><li><a href="/">ホーム</a></li><li><a href="/post">記事</a></li><li><a href="/post">{title}</a></li></ul>)}
        </div>
    )
}
export default breadcrumbs;