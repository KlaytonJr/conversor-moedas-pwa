import styles from '@/styles/ResponseModal.module.css'

export default function ResponseModal({ value, convertedValue }) {
    return (
        <div className={styles.modalResponse}>
            <h2>{ parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h2>
            <p>Equivale a</p>
            <h1>{ convertedValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }</h1>
        </div>
    )
}