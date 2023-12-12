import React from "react";
import cn from "classnames";
import {Link} from "react-router-dom";
import data from '../../data/data.json'
import styles from './Footer.module.css'
import icons from "../../fonts/fonts.module.css";
const Footer = ({className}: React.HTMLAttributes<HTMLElement>) => {
    const company = data.company;
    const menu = data.menu;
    const contacts = data.contacts;
    return (
        <footer className={cn(className, styles['footer'])}>
            <div className={styles['footer__content']}>
                <div className={styles['company']}>
                    <h4>{company.title}</h4>
                    <div className={styles['company__links']}>
                        {company.texts.map(text => <Link target="_blank" to='https://t.me/bifi_ku'>{text}</Link>)}
                    </div>
                </div>
                <div className={styles['menu']}>
                    <h4>{menu.title}</h4>
                    <div className={styles['menu__links']}>
                        {menu.texts.map(text => <Link target="_blank" to='https://t.me/bifi_ku'>{text}</Link>)}
                    </div>
                </div>
                <div className={styles['contacts']}>
                    <h4>{contacts.title}</h4>
                    <p>{contacts.number}</p>
                    <div className={styles['icons']}>
                        <Link target="_blank" to='https://t.me/bifi_ku' className={icons['icon-telegram']}/>
                        <Link target="_blank" to='https://t.me/bifi_ku' className={icons['icon-viber']}/>
                        <Link target="_blank" to='https://t.me/bifi_ku' className={icons['icon-whatsapp']}/>
                    </div>
                    <p>{contacts.address}</p>
                </div>
            </div>

            <div className={styles['footer__author']}>
                <p>©WELBEX 2022. Все права защищены.</p>
                <Link target="_blank" to='https://t.me/bifi_ku'>Политика конфиденциальности</Link>
            </div>
        </footer>
    );
};

export default Footer;