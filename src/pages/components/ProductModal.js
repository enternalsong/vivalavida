import axios from 'axios'
// import { Modal } from "bootstrap";
import {useState,useEffect, useContext } from 'react';
import { MessageContext ,handleSuccess } from '../../store/messageStore';
const ProductModal =({closeProductModal,getProducts,type,tempProduct})=>{
    const [tempData,setTempData] =useState({
            title: "",
            category: "",
            origin_price: 100,
            price: 300,
            unit: "",
            content: "",
            description: "",
            is_enabled: 0,
            imageUrl: "",
          });
    const [upFile,setUpFile] = useState('');
    const [,dispatch] =useContext(MessageContext);
          useEffect(()=>{
            
            console.log(type,tempProduct);
            if(type==='create'){
                setTempData({
                    title: "",
                    category: "",
                    origin_price: 100,
                    price: 300,
                    unit: "",
                    content: "",
                    description: "",
                    is_enabled: 0,
                    imageUrl: "",
                });
            } else if(type==='edit'){
                setTempData(tempProduct);
                //console.log(tempProduct);
            }
        },[type,tempProduct]);
        useEffect(()=>{
            console.log(upFile);
            if(upFile)uploadFile();
            else{
                console.log("block");
            }
        },[upFile]);
    const handleFileUpload = (event) => {
        let selectedFile = event.target.files[0];
        if (selectedFile) {
                setUpFile(event.target.files[0]);
                // selectedFile = null;
            }
        // console.log(event);
         console.log(selectedFile);     
        };
    const uploadFile=async()=>{
        try{
        const formData = new FormData();
        formData.append('file-to-upload',upFile);
        const url = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/upload`;
        const res = await axios.post(url,formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        setTempData({
            ...tempData,
            'imageUrl': res.data.imageUrl
        }) 
        }catch(error){
            console.log(error);
        }
    }
    const handleChange = (e) =>{
        const{value ,name} = e.target;
        if(['price','origin_price'].includes(name)){
            setTempData({
                ...tempData,
                [name]:Number(value),
            });

        }else if(name==="is_enabled")
        {
            setTempData({
                ...tempData,
                [name]:+e.target.checked, //boolen to number
            });
        }else{
            setTempData({
                ...tempData,
                [name]:value,
            })
        }
    }
    const addProduct=async()=>{
        try{
            let api= `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product`;
            let method = 'post';
            if(type ==='edit'){
            api=`/v2/api/${process.env.REACT_APP_API_PATH}/admin/product/${tempProduct.id}`;
             method ='put';
            }
            const res = await axios[method](api,{data:tempData},);
            //console.log(res);
            handleSuccess(dispatch, res);
            closeProductModal();
            getProducts();
        }catch(error){
            console.log(error);
            dispatch({
                type: 'POST_MESSAGE',
                payload:{
                    type: 'danger',
                    title: '失敗',
                    text: Array.isArray(error?.response?.data?.message) ? error?.response?.data?.message.join('、'): error?.response?.data?.message,
                }
            })
        }
       } 
    return(
        <div className="modal fade" id="productModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">
                        {type==="create"? "建立新產品": `編輯 ${tempData.title}`}
                        </h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeProductModal}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            {/* Modal inner */}
                <div className="modal-body">
                <div className="row">
                    <div className= "col-md-12">
                        {/*<pre>{JSON.stringify({tempData})}</pre>*/}
                        <div className="form-group mb-2">
                            <label className="w-100" htmlFor="title">標題</label>
                            <input type="text" id="title" name="title" placeholder="請輸入標題"
                             className="form-control" onChange={handleChange} value={tempData.title}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-2">
                            <label htmlFor="price">原價</label>
                            <input type="number" id="origin_price" name="origin_price" placeholder="請輸入原價" 
                            className="form-control" onChange={handleChange} value={tempData.origin_price}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="category">分類</label>
                            <input type="text" id="category" name="category" placeholder="請輸入分類" 
                            className="form-control" onChange={handleChange} value={tempData.category}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-2">
                            <label htmlFor="price">售價</label>
                            <input type="number" id="price" name="price" placeholder="請輸入售價" 
                            className="form-control" onChange={handleChange} value={tempData.price}/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="price">單位</label>
                            <input type="unit" id="unit" name="unit"placeholder="請輸入單位" 
                            className="form-control" onChange={handleChange} value={tempData.unit}/>
                        </div>

                    </div>
                    <div className="col-md-12">

                        <div className="form-group mb-2">
                            <label htmlFor="discription">描述</label>
                            <input type="text" id="description" name="description" placeholder="請輸入描述" 
                            className="form-control" onChange={handleChange} value={tempData.description}/>
                        </div>

                        <div className="form-group mb-2"></div>
                            <div className="form-check">
                                    <input className="form-check-input" type="checkbox"  
                                    id="is_enabled" name="is_enabled"
                                    onChange={handleChange} checked={!!tempData.is_enabled}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        是否啟用
                                    </label>
                            </div>
                        </div>
                    </div>

    
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                            <div className="form-group mb-2">
                                <label htmlFor="price">輸入圖片網址</label>
                                <input type="text" id="image" name="imageUrl" placeholder="請輸入圖片連結" 
                                className="form-control" onChange={handleChange} value={tempData.imageUrl}/>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='w-100' htmlFor='customFile'>
                                    或 上傳圖片
                                    <input
                                    type='file'
                                    id='customFile' 
                                    className='form-control'onChange={handleFileUpload} />
                                
                                </label>
                            </div>
                    </div>
                    <div className="col-md-6">
                            <div className="card">
                                <img className="card-img-top" src={tempData.imageUrl} alt="Card image cap"/>
                            </div>
                    </div>       
                </div> 
            </div>

            {/* Modal inner */}
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeProductModal}>關閉</button>
                    <button type="button" className="btn btn-primary" onClick={addProduct}>更新商品內容</button>
                </div>
                </div>
            </div>
        </div>



    )
};
export default ProductModal;


