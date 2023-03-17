import {useReducer} from 'react'
import Navbar_Back from "./admin/Navbar-back.js";
import Productslist from "./admin/Products.js";
import Cart from "./admin/Cart.js";
//Car Context
import {CartContext} from '../store.js'
function Navbar1 () {
    const cartReducer = useReducer((state,action)=>{
        const cartList = [...state.cartList]
        //#1 先取得當前購物車目標品項索理
        const index = cartList.findIndex((item)=>item.id === action.payload.id);
        console.log(action);
        switch (action.type){
            case 'ADD_TO_CART':
                if ( index=== -1){
                    //還未加入購物車內
                    cartList.push(action.payload)
                }
                else{
                    cartList[index].quantity += action.payload.quantity;
                    //加入當前
                }
                return{
                    ...state,
                    cartList,
                };
                case 'CHANGE_CART_QUANTITY':
                    cartList[index].quantity = action.payload.quantity;
                    return{
                        ...state,
                        cartList,
                    };
                default:
                    return state
        }
    },{
        cartList: [],
    })

    return(
        <CartContext.Provider value={cartReducer}>
            <Navbar_Back></Navbar_Back>
            <div className="container mt-4">

                <div className="row">
                    <div className='col-md-7'>
                    <Productslist></Productslist>    
                    </div>

                    <div className='col-md-5'>
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </CartContext.Provider>
    )
}
export default Navbar1;

