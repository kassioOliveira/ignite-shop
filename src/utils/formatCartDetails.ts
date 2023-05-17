
interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    quantity:number
}

interface ICartDetails {
    
    cart: Product[];
    details:{
        quantityItems: number;
        totalPrice: number;
    }    
}


export const formatCartDetails = (cartDetails:ICartDetails)=> {


    const initialvalue = {
        totalPrice: 0,
        quantityItems:0,
    } 

    const details = cartDetails.cart.reduce(((acc,prev) => {
      const items =  prev.quantity 
      const  price = String(prev.price).split('R$')[1].replace(',','.');

        acc.quantityItems += items

        acc.totalPrice += (items * Number(price))

        return acc;

    }),initialvalue)

    return {
        cart: cartDetails.cart,
        details:details
    }

}