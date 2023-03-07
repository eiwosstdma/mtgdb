import Head from 'next/head'
import Image from 'next/image'
import AddForm from '@/components/add-form.jsx';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <article>
        <details>
          <summary>Add a card</summary>
          <AddForm></AddForm>
        </details>
      </article>
    </div>
  )
}
