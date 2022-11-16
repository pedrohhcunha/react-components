import styles from './styles.module.scss';

interface Props {
    children: React.ReactNode;
    active?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    position?: 'center' | 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    blur?: boolean;
    noPadding?: boolean;
}

export function Backdrop(props: Props): JSX.Element {
    return (
        <article
            className={`
                ${styles.backdrop}
                ${props.active ? styles.active : ''}
                ${props.position ? styles[props.position] : styles.center}
                ${props.blur ? styles.blur : ''}
                ${props.noPadding ? styles.noPadding : ''}
            `}
            onClick={props.onClick}
        >
            {props.children}
        </article>
    )
}
