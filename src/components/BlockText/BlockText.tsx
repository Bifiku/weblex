import {BlockTextProps} from "./BlockText.props.ts";
import cn from "classnames";
import styles from './BlockText.module.css'

const BlockText = ({className, children, title}: BlockTextProps) => {
    return (
        <div className={cn(className, styles['blockText'])}>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
};

export default BlockText;