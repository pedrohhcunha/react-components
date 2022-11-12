import styles from './styles.module.scss';

interface Props {
    children: React.ReactNode;
}

export function ModalFooter(props: Props): JSX.Element {
    return (
        <footer className={styles.footer}>
            {props.children}
        </footer>
    )
}