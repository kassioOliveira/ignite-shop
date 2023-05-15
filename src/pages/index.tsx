
import { styled } from '@/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({weight:['400','700'] ,subsets: ['latin'] })

export default function Home() {
  return (
   <main className={roboto.className}>
    <h1>ola</h1>
   </main>
    
  )
}
