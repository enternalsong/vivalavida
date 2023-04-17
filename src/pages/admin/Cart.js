import {useContext} from "react"
import {CartContext} from "../../store"

function Cart(){
    const [state,dispatch] = useContext(CartContext);
    let total_price = 0;
    return(
        <div className="bg-light p-3">
            <table className="table align-middle">
                <tbody>
                    {state.cartList.map((item)=>{
                        total_price += item.total;
                        return(
                        <tr key={item.id}>
                            <td>
                                <a href='#'>x</a>
                            </td>
                            <td>
                                <img src={item.img} className="table-image" alt='' />
                            </td>
                            <td>{item.title}
                                <br />
                                <small className="text-mute">{item.price}</small>
                            </td>
                            <td>
                                <select name=""id="" className="form-select" 
                                value={item.quantity} onChange={(e)=>{
                                        e.preventDefault();
                                        const quantity = parseInt(e.target.value);
                                        dispatch({
                                            type: 'CHANGE_CART_QUANTITY',
                                            payload:{
                                                ...item,
                                                quantity
                                            },
                                        });
                                    }}>
                                    {[...Array(20)].map((_, i) => {
                                        return(
                                            <option value={i+1} key={i}>{i + 1}</option>
                                        )
                                    })}
                                </select>
                            </td>
                            <td className="text-end">
                                NT {item.total}
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5} className="form-select text-end">
                        總金額 ${total_price}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default Cart;