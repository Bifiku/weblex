import Header from "./layout/Header/Header.tsx";
import Footer from "./layout/Footer/Footer.tsx";
import Main from "./layout/Main/Main.tsx";
import cn from 'classnames'
import styles from './App.module.css'

function App() {

    return (
        <div className={styles['app']}>
            <Header />
            <Main />
            <Footer />
            <span className={cn(styles['ball'], styles['ball-1'])}></span>
            <span className={cn(styles['ball'], styles['ball-2'])}></span>
            <span className={cn(styles['ball'], styles['ball-3'])}></span>
            <span className={cn(styles['ball'], styles['ball-4'])}></span>
            <span className={cn(styles['ball'], styles['ball-5'])}></span>
        </div>
    )
}

export default App
