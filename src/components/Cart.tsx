import { CardContainer, CardDetailsContainer, CartContainer, ImageContainer } from '@/styles/components/cart'
import Image from 'next/image'
import React from 'react'


import {X} from 'phosphor-react'

import product1 from '../assets/Property 1=Camisa-Maratona 1.svg'


interface CartProps {
    handleCart: () => void
}


export default function Cart({handleCart}:CartProps) {
  
 
  
    return (
    <CartContainer>
        <X size={30} onClick={handleCart} />
        <section>
        <h1>Sacola de compras</h1>
        <div>
            <CardContainer>
                <ImageContainer>
                    <Image src={product1} width={135} height={130} alt='' />
                </ImageContainer>
                <CardDetailsContainer>
                    <strong>Camisa Beyond</strong>
                    <span>R$ 79,00</span>
                    <button>
                        Remover
                    </button>
                </CardDetailsContainer>
            </CardContainer>
            <CardContainer>
                <ImageContainer>
                    <Image src={product1} width={135} height={130} alt='' />
                </ImageContainer>
                <CardDetailsContainer>
                    <strong>Camisa Beyond</strong>
                    <span>R$ 79,00</span>
                    <button>
                        Remover
                    </button>
                </CardDetailsContainer>
            </CardContainer>
        </div>
        </section>
    </CartContainer>
  )
}
