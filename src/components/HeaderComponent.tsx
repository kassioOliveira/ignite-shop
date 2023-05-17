import { CartContext } from '@/contexts/CartContext'
import { Header } from '@/styles/pages/app'
import Image from 'next/image'
import { Tote } from 'phosphor-react'
import React, { useContext } from 'react'


import logo from '../assets/Logo.svg'

export default function HeaderComponent() {

    const {handleCart,  cartDetails} = useContext(CartContext)


    const quantity = !!cartDetails? cartDetails.details.quantityItems: 0
  


  return (
    <Header>
        <Image src={logo.src} width={100} height={100}  alt='' />
  
  <div  data-count={quantity} onClick={handleCart}>
    <Tote size={30} />
  </div>
    </Header>
  )
}
