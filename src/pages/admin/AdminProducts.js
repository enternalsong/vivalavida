import {useEffect, useState,useRef} from 'react';
import axios from 'axios';
import ProductModal from '../components/ProductModal';
import DeleteModal from '../components/DeleteModal';
import Pagination from '../components/Pagination';
import { Modal } from 'bootstrap';
function AdminProducts(){
    const [productsData, setProductsData] =useState([]);
    const [pagination,setPagination] =useState({});
    const productModal = useRef(null);
    const deleteModal = useRef(null);
    const [type,setType] =useState('create');
    const  [tempProduct,setTempProduct] =useState({});
    const openProductModal = (type,product)=>{
        setType(type);
        setTempProduct(product);
        productModal.current.show();
    }
    const closeProductModal = ()=>{
        productModal.current.hide();
    }
    const openDeleteModal = (product)=>{
        setTempProduct(product);
        deleteModal.current.show();
    }
    const closeDeleteModal = () =>{
        deleteModal.current.hide();
    }
    //delete the product

    useEffect(()=>{
        //get token
        // const token = document.cookie
        // .split('; ')
        // .find((row)=> row.startsWith('shopToken='))
        // ?.split('=')[1];
        // axios.defaults.headers.common['Authorization'] = token;
        // console.log(token);
        productModal.current = new Modal('#productModal',{
            backdrop: 'static',
        });
        deleteModal.current = new Modal('#deleteModal');
        getProducts();
    },[]);
    const getProducts=(page=1)=>{
        (async(e)=>{
            const productAllRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/products/all`);
            const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/products?page=${page}`)
            const saveRes =productRes.data.products;
           // console.log(productRes.data.pagination);
            //console.log(productRes);
            setProductsData(saveRes);
            setPagination(productRes.data.pagination);
        })()
    };
    const deleteProduct = async(id)=>{
        try{
            let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product/${id}`;
            let method = "delete";
            const res = await axios[method](api);
            //console.log(res);
            if(res.data.success){
                closeDeleteModal();
                getProducts();
            }
        } catch(error){
            console.log(error);
        }
    };
    return(
        <div className="p-3">
            <ProductModal closeProductModal={closeProductModal} getProducts={getProducts} type={type} tempProduct={tempProduct}></ProductModal>
            <DeleteModal close={closeDeleteModal} handleDelete={deleteProduct} text={tempProduct.title}id={tempProduct.id}></DeleteModal>
            <h3>產品列表</h3>
            <hr />
            <div className="text-end">
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={()=>{openProductModal('create',{})}}
            >
                建立新商品
            </button>
        </div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">分類</th>
                <th scope="col">名稱</th>
                <th scope="col">售價</th>
                <th scope="col">啟用狀態</th>
                <th scope="col">編輯</th>
                </tr>
            </thead>
            <tbody>
             {/* <tr>
                <td>分類</td>
                <td>名稱</td>
                <td>價格</td>
                <td>啟用</td>
                <td>
                    <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    >
                    編輯
                    </button>
                    <button
                    type="button"
                    className="btn btn-outline-danger btn-sm ms-2"
                    >
                    刪除
                    </button>
                </td>
                </tr>  */}
                  {Object.values(productsData).map((item)=>{
                    return(
                <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.is_enabled ? "啟用":"未啟用"}</td>
                <td>
                    <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={()=>openProductModal('edit',item)}
                    >
                    編輯
                    </button>
                    <button
                    type="button"
                    className="btn btn-outline-danger btn-sm ms-2"
                    onClick= {()=>{openDeleteModal(item)}}
                    >
                    刪除
                    </button>
                </td>
                </tr>
                    )
                })}  
                
            </tbody>
            </table>
            {/* Pagination*/}
                <Pagination pagination={pagination} getProducts={getProducts}></Pagination>
        </div>
    )
}
export default AdminProducts;