
import { globalStyles } from '@/styles/global'

import { Roboto } from 'next/font/google'

const roboto = Roboto({weight:['400','700'] ,subsets: ['latin'] })


import type { AppProps } from 'next/app'
globalStyles()

import { Container} from '@/styles/pages/app'

import Cart from '@/components/Cart'

import {  CartContextProvider } from '@/contexts/CartContext'
import HeaderComponent from '@/components/HeaderComponent'
import Image from 'next/image'

import logo from '../assets/Logo.svg'

export default function App({ Component, pageProps,...appProps }: AppProps) {


  if([`/success`].includes(appProps.router.pathname)){
    return(
      <Container className={roboto.className}>
        <Image src={logo.src} width={150} height={130}  alt='' />
      <Component {...pageProps} />   
    </Container>
    )
  }
 
 
  return(

    <CartContextProvider>
  <Container className={roboto.className}>

    <HeaderComponent/>

    <Cart />

      <Component {...pageProps} />
     
    </Container>
    </CartContextProvider>
      
  )
  
    

}
