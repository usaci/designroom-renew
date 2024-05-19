'use client';
import Styles from '@/app/styles/breadcrumbs.module.scss';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'


const Breadcrumbs: React.FC = () => {
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
                <div className={Styles.breadcrumbs}>
                    <ul>
                        {<li><a href="/" className="link" key="breadcrumbs__home">ホーム</a></li>}
                        {(path.match(pattern_posts)) && (<li><a href="/post" className="link" key="breadcrumbs__post">記事</a></li>)}
                        {path.match(pattern_category) && (<li><a href={path} className="link" key="breadcrumbs__cat">{siteTitle}</a></li>)}
                        {path.match(pattern_post) && (<li><a href={path} className="link" key={"breadcrumbs__" + siteTitle}>{siteTitle}</a></li>)}
                    </ul>
                </div>
            )
        }
    }
}
export default Breadcrumbs;