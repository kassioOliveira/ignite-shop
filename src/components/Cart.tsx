import { CardContainer, CardDetailsContainer, CartContainer, ImageContainer } from '@/styles/components/cart'
import Image from 'next/image'
import React, { useContext, useState } from 'react'


import {X} from 'phosphor-react'

import { CartContext } from '@/contexts/CartContext'
import axios from 'axios'

export default function Cart() {
  
    const {handleCart,isCartOpen,removeItemFromCart,cartDetails} = useContext(CartContext)

    const {cart,details} = cartDetails

    const [isCreatingCheckoutSession,setIsCreatingCheckoutSession] = useState(false);


    const formatedPrice = (price:number) => {
       return new Intl.NumberFormat('pt-BR',{
            style:'currency',
            currency: 'BRL'
          }).format(price)
    }

   
    async  function handleBuyButton() {

        const items = cart.map(({defaultPriceId,quantity}) => ({price:defaultPriceId, quantity}))


        try {
         setIsCreatingCheckoutSession(true);
     
         const response = await axios.post('/api/checkout', {
           items
         })
     
         const { checkoutUrl } = response.data;
     
         window.location.href = checkoutUrl;
        } catch (error) {
         setIsCreatingCheckoutSession(false);
     
           alert('Falha ao redirecionar ao checkout!')
        }
       }


    const isButtonDisabled = details.quantityItems > 0 || isCreatingCheckoutSession
 
  
    return (
    <CartContainer style={{display:isCartOpen?'flex': 'none'}} >
        <X size={30} onClick={handleCart} />
        <section>
        <h1>Sacola de compras</h1>
        <div>
            
            {
                !!cart.length && (
                    cart.map(item => {
                        return (
                            <CardContainer key={item.id}>
                <ImageContainer>
                    <Image src={item.imageUrl} width={135} height={130} alt='' />
                </ImageContainer>
                <CardDetailsContainer>
                    <strong>{item.name}</strong>
                    <span>{item.price}</span>
                    <button onClick={() => removeItemFromCart(item.id)}>
                        Remover
                    </button>
                </CardDetailsContainer>
            </CardContainer>
                        )
                    })
                )
            }
        </div>
        </section>

        <div>
            <div>
                <span>Quantidade <strong>{details.quantityItems} itens</strong></span>
                <span>Valor Total <strong>{formatedPrice(details.totalPrice)}</strong></span>
            </div>
            <button disabled={!isButtonDisabled} onClick={handleBuyButton} >
                Finalizar compra
            </button>
        </div>
    </CartContainer>
  )
}
