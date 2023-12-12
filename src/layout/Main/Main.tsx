import React, {useEffect, useState} from "react";
import cn from "classnames";
import BlockText from "../../components/BlockText/BlockText.tsx";
import Button from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";
import styles from './Main.module.css'

const MAX_WIDTH:number = 330;

const Main = ({className}: React.HTMLAttributes<HTMLElement>) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Обработка изменения размера экрана
        const handleResize = () => {
            setIsMobile(window.innerWidth <= MAX_WIDTH);
        };

        // Устанавливаем начальное значение
        handleResize();

        // Добавляем слушателя события изменения размера экрана
        window.addEventListener('resize', handleResize);

        // Очищаем слушателя при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className={cn(className, styles['main'])}>
            <div className={styles['main__head']}>
                <h1 className={styles['title']}>Зарабатывайте больше <span>с WELBEX</span></h1>
                <h2>Развиваем и контролируем продажи за вас</h2>
            </div>
            <div className={styles['main__content']}>
                <p className={styles['main__text']}>Вместе с <span>бесплатной консультацией</span> мы дарим:</p>
                <div className={styles['main__info']}>
                    {isMobile ? (
                        <>
                            <div className={styles['block']}>
                                <BlockText className={styles['line']} title='Skype аудит' />
                                <BlockText className={styles['line']} title='Dashboard' />
                            </div>
                            <div className={styles['block']}>
                                <BlockText className={styles['line']} title='30 виджетов' />
                                <BlockText className={styles['line']} title='Месяц аmoCRM' />
                            </div>
                        </>
                    ) : (
                        <>
                            <BlockText title='Виджеты'>30 готовых решений</BlockText>
                            <BlockText title='Dashboard'>с показателями вашего бизнеса</BlockText>
                            <BlockText title='Skype Аудит'>отдела продаж и CRM системы</BlockText>
                            <BlockText title='35 дней'>использования CRM</BlockText>
                        </>
                    )}
                </div>
                {!isMobile && <Button className={styles['button']}><Link target="_blank" to='https://t.me/bifi_ku'>Получить консультацию</Link></Button>}

            </div>
        </main>
    )
}
export default Main;