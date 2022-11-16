import styles from './Spinner.module.scss';
import { CSSProperties } from 'react';

interface SpinnerProps {
    backgroundColor?: CSSProperties['color'];
    color?: CSSProperties['color'];
    className?: string;
    style?: CSSProperties;
}

export function Spinner({
    color= '#d4d4d4',
    backgroundColor= '#858585',
    className,
    style,
}: SpinnerProps): JSX.Element {
    return (
        <div
            className={`
                ${styles.spinner}
                ${className}
            `}
            style={{
                color: color,
                border: `5px solid ${backgroundColor}`,
                borderTop: `5px solid ${color}`,
                ...style,
            }}
        >
        </div>
    )
}