import {useContext} from 'react';
import productsData from "../../assets/ProductsData.js";
import {CartContext} from "../../store.js";
function Productslist(){
    const [state,dispatch] = useContext(CartContext);
    return(
        <div className="row row-cols-3 g-3">
            {productsData.map((product)=>
                {
                return(
                    <div className="col" key={product.id}>
                        <div className="card ">
                            <img className="card-img-top" src={product.img} alt="Card image cap"/>
                                <div className="card-body" style={{fontSize:15+"px"}}>
                                    <h5 className="card-title">{product.title}</h5>
                                    <span className="float-end">{product.price}</span>
                                    <button href="#" className="btn btn-outline-primary" onClick={()=>{
                                        dispatch({
                                            type:'ADD_TO_CART',
                                            payload:{
                                                ...product,
                                                quantity:1
                                            },
                                        });
                                    }}>
                                        加入購物車</button>
                                </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Productslist;