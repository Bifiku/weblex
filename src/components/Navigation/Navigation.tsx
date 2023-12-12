import {Link} from "react-router-dom";
import styles from './Navigation.module.css'

const dataNav = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы', 'Сертификаты']
const Navigation = () => {

    return (
        <div className={styles['navigation']}>
            {dataNav.map(link => <Link to='/'>{link}</Link>)}
        </div>
    );
};

export default Navigation;