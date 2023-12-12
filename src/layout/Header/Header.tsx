import Navigation from "../../components/Navigation/Navigation.tsx";
import {Link} from "react-router-dom";
import React from "react";
import cn from 'classnames'
import icons from '../../fonts/fonts.module.css'
import styles from './Header.module.css'
const Header = ({className}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <header className={cn(className, styles['header'])}>
            <div className={styles['logo']}>
                <img src="logo.svg" alt="logo" />
                <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>
            <Navigation />
            <div className={styles['phone']}>+7 555 555-55-55</div>
            <div className={styles['icons']}>
                <Link target="_blank" to='https://t.me/bifi_ku' className={icons['icon-telegram']}/>
                <Link target="_blank" to='https://t.me/bifi_ku' className={icons['icon-viber']}/>
                <Link target="_blank" to='https://t.me/bifi_ku' className={icons['icon-whatsapp']}/>
            </div>
        </header>
    );
};

export default Header;