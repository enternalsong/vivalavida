import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination.js";
import { Link } from "react-router-dom";
function Products(){
  const [productsData, setProductsData] = useState([]);
  const [pagination, setPagination] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = (page = 1) => {
    (async () => {
      const res_product = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`
      );
      console.log(res_product);
      setProductsData(res_product.data.products);
      setPagination(res_product.data.pagination);
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
  return (
    <div className="pPage">
      <div className="container">
        <div className="menu-block">
          <div className="nav-menu">
            <ul className="menu-box">
              <li className="menu-item first-item">
                <a className="nav-menu-link">所有商品</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link">日本</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link">歐洲</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link">非洲</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link">台灣</a>
              </li>
              <li className="menu-item">
                <a className="nav-menu-link">美洲</a>
              </li>
            </ul>
          </div>

          <div className="side-box">
            <select className="form-control">
              <option>價格排序</option>
              <option>價格高到低</option>
              <option>價格低到高</option>
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
          {productsData.map((item) => {
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
                      <span className="badge badge-secondary ml-2">
                        {item.category}
                      </span>
                    </h5>
                    <div className="card-text">
                      <h5>NT$ {item.price}</h5>
                      <span className="delete-text">
                        <del>{item.origin_price}</del>
                      </span>
                      <div className="card-button-list">
                        <a>
                          <button
                            className="btn btn-outline-primary card-btn">
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
