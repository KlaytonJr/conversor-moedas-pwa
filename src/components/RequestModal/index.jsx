import styles from '@/styles/RequestModal.module.css'

export default function RequestModal({ value, setValue, converter }) {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={styles.modalRequest}>
            <p>Digite em R$ para converter para U$</p>
            <input type='number' value={value} onChange={handleChange} />
            <button onClick={converter}>Converter</button>
        </div>
    )
}