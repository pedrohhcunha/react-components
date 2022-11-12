import styles from './styles.module.scss';  

interface Props {
    children: React.ReactNode;
}

export function ModalHeader(props: Props): JSX.Element {
    return (
        <header className={styles.header}>
            {props.children}
        </header>
    )
}