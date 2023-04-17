import { useOutletContext,Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
function Cart() {
    const { cartData,getCart } = useOutletContext();
    const [isLoading,setIsLoading] = useState(false);
    console.log(cartData);
    const removeCartItem =(id)=>{
        (async()=>{
            const data = {
                "data":{
                    "product_id":id,
                    "qty":1
                }
            }
            axios.delete(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/${id}`,data).then(
                response=>{
                    console.log(response);
                    getCart();
        }).catch(error=>{
            console.log(error);
        })
        })();
    }
    const updateCartItem =(item)=>{
        (async()=>{
            const data = {
                "data":{
                    "product_id":item.product_id,
                    "qty":item.qty-1
                }
            };
            if(data.data.qty===0){
                removeCartItem(item.id)
            }
            else{
                axios.put(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/${item.id}`,data).then(
                response=>{
                    console.log(response);
                    getCart();
                }).catch(error=>{
                    console.log(error);
                })
            }
        })();
    }

    const addToCart = async(id)=>{
      const data={
        data:{
          product_id:id,
          qty:1,
        },
      };
      setIsLoading(true);
      try{
        const res = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/`,
        data)
        setIsLoading(false);
        console.log(res);
        getCart();
      } catch(error){
        console.log(error);
        setIsLoading(false);
      } 
    };
    useEffect(()=>{
        getCart();
      },[])
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div
            className="col-md-6 bg-white py-5"
            style={{ minHeight: "calc(100vh - 56px - 76px)" }}>
            <div className="d-flex justify-content-between">
                <h2 className="mt-2">您的購物車訂單</h2>
            </div>
            {cartData.carts.map((item) => {
                return (
                <div className="d-flex mt-4 bg-light" key={item.product_id}>
                    <img
                    src={item.product.imageUrl}
                    alt=""
                    className="object-cover"
                    style={{
                        width: "120px",
                    }}
                    />
                    <div className="w-100 p-3 position-relative">
                    <button
                        href="#"
                        className="position-absolute btn"
                        style={{ top: "16px", right: "16px" }}
                        onClick={(e)=>{
                            e.preventDefault();
                            removeCartItem(item.id)
                        }}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <p className="mb-0 fw-bold">{item.product.title}</p>
                    <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>
                        {item.product.content}
                    </p>
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="input-group w-50 align-items-center">
                        <div className="input-group-prepend pe-1">
                            <button className="btn" href="#" type="button" onClick={(e)=>{
                                e.preventDefault();
                                updateCartItem(item);
                            }}>
                            {" "}
                            <i className="fas fa-minus"></i>
                            </button>
                        </div>
                        <input
                            type="text"
                            className="form-control border-0 text-center my-auto shadow-none bg-light px-0"
                            placeholder={item.qty}
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                            
                        />
                        <div className="input-group-append ps-1">
                            <button className="btn " type="button" href="#" onClick={(e)=>{
                                e.preventDefault();
                                addToCart(item.product_id)
                            }}>
                            <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        </div>
                        <p className="mb-0 ms-auto">NT${item.final_total}</p>
                    </div>
                    </div>
                </div>
                );
            })}
            <div className="d-flex justify-content-between mt-4">
                <p className="mb-0 h4 fw-bold">總金額</p>
                <p className="mb-0 h4 fw-bold">NT${cartData.final_total}</p>
            </div>
            <Link to='/checkout' className='btn btn-dark w-100 mt-4 rounded-0 py-3'>
                確認結帳
            </Link>
            </div>
        </div>
        </div>
    );
}

export default Cart;
