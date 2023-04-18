import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SEO from '@/pwa/SEO'
import RequestModal from '@/components/RequestModal'
import ResponseModal from '@/components/ResponseModal'
import api from '@/services/api'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [valor, setValor] = useState("");
    const [valorConvertido, setValorConvertido] = useState("");

    async function converter() {
        if (valor === "") return;

        const response = await api.get("all/USD-BRL");

        let resultado = response.data["USD"].ask * parseFloat(valor);
        setValorConvertido(resultado);
    }


  return (
    <>
      <SEO title='Conversor de Dolar' description='Uma página para comverte real para dolar' />

      <main className={styles.main}>
        <RequestModal value={valor} setValue={setValor} converter={converter} />
        { valor && valorConvertido && (
            <ResponseModal value={valor} convertedValue={valorConvertido} />
        )}
      </main>
    </>
  )
}
