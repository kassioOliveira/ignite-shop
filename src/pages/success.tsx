import { stripe } from '@/lib/stripe'
import { ImageContainer, SuccessContainer } from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Stripe from 'stripe'

interface SuccessProps {
    costumerName: string;
    products: Stripe.Product[];
    totalQuantity:number
  }

export default function Success({ costumerName, products,totalQuantity }: SuccessProps) {

return (
    <>
    <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name='robots' content='noindex' />
    </Head>

<SuccessContainer>
        <h1>Compra efetuada!</h1>

       <div>
        {products.map((item:any) => {
            return (
                <ImageContainer key={item.id}>
                <Image src={item.images[0]} width={125} height={100} alt=''/>
            </ImageContainer>
            )
        })}
       </div>

        <p>
            Uhuul <strong>{costumerName}</strong>,
            sua compra de <strong>{`${totalQuantity}`}</strong> {`${totalQuantity > 1?('camisetas'):('camiseta')}`} já está a caminho
            da sua casa.
        </p>

        <Link href='/'>
        Voltar ao catálogo
        </Link>
    </SuccessContainer>
    
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    
    if(!query.session_id){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    
    
    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId,{
        expand: ['line_items', 'line_items.data.price.product']
    })

    const costumerName = session.customer_details?.name;

    const products = session.line_items?.data.map((item) => {
        return item.price?.product as Stripe.Product;
    })

    const quantity =session.line_items?.data.reduce((acc: number,item:any) => ( acc + item.quantity ),0)

    return {
        props:{
            costumerName:costumerName,
            products: products,
           totalQuantity: quantity,


        }
    }
}
