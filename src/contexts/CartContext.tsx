import { formatCartDetails } from "@/utils/formatCartDetails";
import { ReactNode, createContext, useReducer, useState } from "react";


interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    quantity:number;
    defaultPriceId: string;
}

interface ICartDetails {
    
    cart: Product[] | [];
    details:{
        quantityItems: number;
        totalPrice: number;
    }
   
}



interface CartContextProp {
    isCartOpen:boolean;
    handleCart:() => void;
    cartDetails: ICartDetails;
    addToCart: (value:Product) => void;
    removeItemFromCart: (id:string) => void
}


export const CartContext = createContext({} as CartContextProp)

interface CartContextProviderProps{
    children: ReactNode
}


interface IAction {
    type:any;
    payload: any
}


export function CartContextProvider({children}: CartContextProviderProps){

    const [Cartstate,dispatch] = useReducer((
        (state:any,action:IAction) => {
            switch (action.type) {
                case 'ADD_TO_CART':{

                    const {cart,details} = state

                    const isItemExist = cart.filter((item:Product) => item.id === action.payload.id)

              if(isItemExist.length){

                const newCart = cart.map((item:Product) => {
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            quantity: item.quantity + action.payload.quantity
                        }
                    }else{
                        return item
                    }
                })

                const formated = {cart: newCart, details}

                
                const newState = formatCartDetails(formated)

                return newState
              }

              const newCart = [...state.cart, { ...action.payload,quantity:1}]

              const dataToFormat = {cart:newCart,details }

            const newState = formatCartDetails(dataToFormat)
                    
                    return newState
                }
                case 'REMOVE_ITEM_FROM_CART':{

                    const {cart,details} = state

                    const isItensExist = cart.find((item:Product) => item.id === action.payload.id);

                    if(isItensExist){

                        if(!(isItensExist.quantity > 1)){

                            const newCart = cart.filter((item: Product) => item.id !== isItensExist.id);

                            const dataToFormat = {
                                cart:newCart,
                                details
                            }

                            const newSatate = formatCartDetails(dataToFormat)

                            return newSatate

                        }

                        const newcart = cart.map((item:Product) => {
                            if(item.id === action.payload.id){
 
                                if(item.quantity > 1){
                                    return{
                                        ...item,
                                        quantity: item.quantity - 1
                                    }
                                }
                               
                            }else{
                                return item
                            }
                        })

                        const dataToFormat = {
                            cart: newcart,
                            details
                        }

                        const newState = formatCartDetails(dataToFormat)

                        return  newState
                    }
                }
            
                default:
                    return state
            }
        }

    ),{
        cart:[],
        details:{
            quantityItems:0,
            totalPrice:0
        }
    })

    const [isCartOpen,setIsCartOpen] = useState(false);

  function handleCart() {
    setIsCartOpen((state) => !state)
  }

    function AddItemToCart(item:Product){
        dispatch(
            {
                type:'ADD_TO_CART',
                payload: item
                
            }
        )
    }

    function RemoveItemFromCart(id:string){

        dispatch({
            type:'REMOVE_ITEM_FROM_CART',
            payload: {
                id
            }
        })
    }

    return (
        <CartContext.Provider value={{
            isCartOpen,
            handleCart,
            addToCart: AddItemToCart,
            removeItemFromCart:RemoveItemFromCart,
            cartDetails:Cartstate}}>
            {children}
        </CartContext.Provider>
    )


}