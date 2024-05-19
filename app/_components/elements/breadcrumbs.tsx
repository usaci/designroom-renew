'use client';
import Styles from '@/app/styles/breadcrumbs.module.scss';
import React, { useEffect, useState } from 'react';
import { usePathname, } from 'next/navigation'

type BreadProps = {
    href: string,
    title: string
}

const breadcrumbs: React.FC = () => {
    const path = usePathname()
    const pattern_post = /\/post\/\w+/;
    const pattern_category = /\/category\/\w+/;
    const pattern_posts = /\/post/;

    const [siteTitle, setTitle] = useState('');

    useEffect(() => {
      // クライアントサイドでのみ実行される
      const currentTitle = document.title.replace(' | デザインの部屋', '');
      setTitle(currentTitle);
    }, []); // 空の依存配列でコンポーネントのマウント時にのみ実行

    {
        if(path.length > 1) {
            return (
                <div className="breadcrumbs">
                    <ul>
                        {<li><a href="/">ホーム</a></li>}
                        {(path.match(pattern_category) || path.match(pattern_posts)) && (<li><a href="/post">記事</a></li>)}
                        {path.match(pattern_category) && (<li><a href={path}>{siteTitle}</a></li>)}
                        {path.match(pattern_post) && (<li><a href={path}>{siteTitle}</a></li>)}
                    </ul>
                </div>
            )
        }
    }
}
export default breadcrumbs;