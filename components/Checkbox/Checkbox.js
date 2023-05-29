import styles from '@/styles/Checkbox.module.scss';

export default function Checkbox({ checked, label, id, onChange }) {
    return (
        <p className={styles.container}>
            <input id={id} type="checkbox" checked={checked} className={styles.input} onChange={onChange}/>
            <label htmlFor={id}>{label}</label>
        </p>
    )
}
