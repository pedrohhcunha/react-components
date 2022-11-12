import styles from './styles.module.scss';

interface Props {
    children: React.ReactNode;
}

export function ModalBody(props: Props): JSX.Element {
    return (
        <footer className={styles.body}>
            {props.children}
        </footer>
    )
}