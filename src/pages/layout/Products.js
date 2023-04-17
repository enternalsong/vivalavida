import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination.js";
import { Link,useOutletContext } from "react-router-dom";
function Products(){
  const [productsData, setProductsData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [filterData,setFilterData] = useState([]);
  const [cartQuantity,setCartQuantity] = useState(1);
  const {getCart} = useOutletContext();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = (page = 1) => {
    (async () => {
      const res_product = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`
      );
      //console.log(res_product);
      setProductsData(res_product.data.products.filter(item=>item.category ==="旅遊"));
      setPagination(res_product.data.pagination);
      console.log(res_product.data.pagination);
      setFilterData(res_product.data.products.filter(item=>item.category ==="旅遊"));
    })();
  };
  const getProduct = (id) => {
    (async () => {
      const res_product = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/product/${id}`
      );
      console.log(res_product);
      setProductsData(res_product.data.products);

    })();
  };
  const [isLoading,setIsLoading] = useState(false);
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
      getCart();
      setIsLoading(false);
    console.log(res.data.data);
    } catch(error){
      console.log(error);
      setIsLoading(false);
    } 
  };
  const filterArrayAttribute =(attri) =>{
    if(attri === "all"){
      setFilterData(productsData);
    }
    else{
    setFilterData(productsData.filter((item)=>
      item.unit.indexOf(attri)!==-1
    ));}
    //filter unit
  }
  

  const filterDataByPrice=(e)=>{
    console.log(e.target.value);
    let savedata = [...filterData];
    function compare_price(a,b){
      if(a.price < b.price){
        return 1;
      }
      if(a.price > b.price){
        return -1;
      }
      return 0;
    }
      if(e.target.value==="價格高到低")
      {
         console.log(savedata.sort(compare_price));
         console.log(filterData);
         setFilterData(savedata);
      }
      if(e.target.value==="價格低到高"){
        console.log(savedata.sort(compare_price).reverse());
        setFilterData(savedata);
      }

  }
  return (
    <div className="pPage">
      <div className="container">
        <div className="menu-block">
          <div className="nav-menu">
            <ul className="menu-box">
              <li className="menu-item first-item">
                <a className="nav-menu-link active"onClick={(e)=>{
                  e.preventDefault();
                  filterArrayAttribute("all")}}>所有商品</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link" onClick={(e)=>{
                  e.preventDefault();
                  filterArrayAttribute("japan")}}>日本</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link" onClick={(e)=>{
                  e.preventDefault();
                  filterArrayAttribute("europe")}}>歐洲</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link" onClick={(e)=>{
                  e.preventDefault();
                  filterArrayAttribute("africa")}}>非洲</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link" onClick={(e)=>{
                  e.preventDefault();
                  filterArrayAttribute("tw")}}>台灣</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link" onClick={(e)=>{
                  e.preventDefault();
                  filterArrayAttribute("america")}}>美洲</a>
              </li>
            </ul>
          </div>

          <div className="side-box">
            <select className="form-control" onChange={filterDataByPrice}>
              <option>價格排序</option>
              <option  vaule="up">價格高到低</option>
              <option vaule="down">價格低到高</option>
            </select>
            <div className="search">
              <input
                type="text"
                id="search"
                placeholder="搜尋本分類"
                className="form-control"
              />
              <label htmlFor="search">
                <i className="fas fa-search"></i>
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          {filterData.map((item) => {
            return (
              <div className="col-6 col-md-4 col-lg-3 mb-4 pl-0" key={item.id}>
                <div className="card  h-100">
                  <img
                    className="card-img-top"
                    src={item.imageUrl}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex align-items-center">
                      <div href="#" className="product-text text-black mr-auto">
                        {item.title}
                      </div>

                    </h5>
                    
                    <div className="card-text">
                      <h5>NT$ {item.price}</h5>
                      <span className={ item.price===item.origin_price ? "d-none": "delete-text" }>
                        <del>{item.origin_price}</del>
                      </span>
                      <div className="card-button-list">
                        <a>
                          <button
                            className="btn btn-outline-primary card-btn" onClick={(e)=>{
                              e.preventDefault();
                              addToCart(item.id);
                            }}>
                            <i className="bi bi-cart4"></i>
                          </button>
                        </a>
                        <Link to={`/product/${item.id}`}>
                          <button
                            className="btn btn-outline-primary card-btn">
                            <i className="bi bi-search"></i>
                          </button>
                        </Link>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Pagination
            pagination={pagination}
            getProducts={getProducts}></Pagination>
        </div>
      </div>
    </div>
  );
}
export default Products;
