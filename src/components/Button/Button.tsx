import {HTMLAttributes} from "react";
import cn from "classnames";
import styles from './Button.module.css'

const Button = ({className, children}: HTMLAttributes<HTMLElement>) => {
    return (
        <button className={cn(className, styles['button'])}>
            {children}
        </button>
    );
};

export default Button;