
import { globalStyles } from '@/styles/global'

import { Roboto } from 'next/font/google'

const roboto = Roboto({weight:['400','700'] ,subsets: ['latin'] })


import type { AppProps } from 'next/app'
globalStyles()

import logo from '../assets/Logo.svg'
import { Container, Header } from '@/styles/pages/app'
import Image from 'next/image'
import Cart from '@/components/Cart'

import { Tote } from 'phosphor-react'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

 
  const [isCartOpen,setIsCartOpen] = useState(false);

  function handleCart() {
    setIsCartOpen((state) => !state)
  }



  return(
        <Container className={roboto.className}>
      
    <Header>
      <Image src={logo.src} width={100} height={100}  alt='' />

      <div onClick={handleCart}>
        <Tote size={30} />
      </div>
    </Header>
    {
    isCartOpen && (<Cart handleCart={handleCart}/>
    )
    }
    <Component {...pageProps} />
   
  </Container>
  )
  
    

}
