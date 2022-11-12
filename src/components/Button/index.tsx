import styles from './styles.module.scss';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return (
        <button className={styles.button} {...props} />
    )
}
