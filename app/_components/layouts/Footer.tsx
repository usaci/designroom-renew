import React from "react";
import logo from "@/public/logo.png";
import Styles from '@/app/Styles/footer.module.scss';
import Breadcrumbs from "@/app/_components/elements/breadcrumbs";
type FooterProps = {
    title: String
}
const Footer: Function = ({title}: FooterProps) => {
    return (
        <footer className={Styles.siteFooter}>
            <div className={Styles.inner}>
                <Breadcrumbs></Breadcrumbs>
                <div>
                    {/* <ul className={Styles.siteFooter__nav}>
                        <li>タグ</li>
                        <li>タグ</li>
                        <li>タグ</li>
                        <li>タグ</li>
                    </ul> */}
                    <p className={Styles.siteHeader__logo}>
                        <img src={logo.src} alt="デザインの部屋"/>
                    </p>
                </div>
                <small>&nbsp; 2024 デザインの部屋</small>
            </div>
        </footer>
    )
}
export default Footer;