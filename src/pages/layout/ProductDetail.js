import { useState, useEffect } from "react";
import axios from "axios";
import { useOutletContext, useParams, useRouteError } from "react-router-dom";
const ProductDetail=()=>{
  const [productData, setProductData] = useState([]);
  const {id} = useParams();
  const [cartQuantity,setCartQuantity] = useState(1);
  const {getCart} = useOutletContext();
  console.log(id);
  const getProduct = (id) => {
    (async () => {
      const res_product = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/product/${id}`
      );
      console.log(res_product);
      setProductData(res_product.data.product);
    })();
  };
  const [isLoading,setIsLoading] = useState(false);
  const addToCart = async(id,qty)=>{
      const data={
        data:{
          product_id:id,
          qty:qty,
        },
      };
      setIsLoading(true);
      try{
        const res = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/`,
        data)
        getCart();
        setIsLoading(false);
      console.log(res);
      } catch(error){
        console.log(error);
        setIsLoading(false);
      } 
    }
  useEffect(()=>{
    getProduct(id);
  },[id])
  return (
    <>
      <div className="detail-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={productData.imageUrl}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev">
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next">
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-white px-0 mb-0 py-3">
                  <li className="breadcrumb-item">
                    <a className="text-muted" href="./index.html">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="text-muted" href="./product.html">
                      Product
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Detail
                  </li>
                </ol>
              </nav>
              <h2 className="fw-bold h1 mb-1">{productData.title}</h2>
              <p className="mb-0 text-muted text-end">
                <del>{productData.origin_price}</del>
              </p>
              <p className="h4 fw-bold text-end">{productData.price}</p>
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="input-group my-3 bg-light rounded">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon1"
                        onClick={()=>setCartQuantity((pre)=> pre===1 ? pre:pre-1) }
                        >
                        <i className="fas fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control border-0 text-center my-auto shadow-none bg-light"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      readOnly
                      value={cartQuantity}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon2"
                        onClick={()=>setCartQuantity((pre)=> pre+1) }
                        >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <button
                    href="#"
                    className="text-nowrap btn btn-dark w-100 py-2"
                    onClick={()=>addToCart(id,cartQuantity)}
                    disabled={isLoading}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-4">
              <p>
                {productData.content}
              </p>
            </div>
            <div className="col-md-3">
              <p className="text-muted">
                {productData.description}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
