'use client';
import '@/app/styles/toc.scss'
import { useEffect } from "react";
import tocbot from "tocbot";

const Toc = () => {
    useEffect(() => {
        tocbot.init({
            tocSelector: ".toc__sp",
            contentSelector: ".article__main__body",
            headingSelector: "h2, h3",
            scrollSmooth: true,
        });

        return() => tocbot.destroy();
    }, []);
    return (<nav className="toc__sp"></nav>);
}

export default Toc;