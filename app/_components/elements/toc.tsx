'use client';
import '@/app/styles/toc.scss'
import { useEffect } from "react";
import tocbot from "tocbot";

const Toc = () => {
    useEffect(() => {
        tocbot.init({
            tocSelector: ".toc",
            contentSelector: ".article__main__body",
            headingSelector: "h2, h3",
            scrollSmooth: true,
        });

        return() => tocbot.destroy();
    }, []);
    return <nav className="toc"></nav>;
}

export default Toc;