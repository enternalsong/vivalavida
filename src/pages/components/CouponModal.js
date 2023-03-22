import axios from 'axios'
// import { Modal } from "bootstrap";
import {useState,useEffect } from 'react';
const CouponModal =({closeModal,getCoupons,type,tempCoupon})=>{
    const [tempData,setTempData] =useState({
            title: "超級優惠",
            code: "aaa",
            due_date: 1555459200,
            percent: 100,
            is_enabled: 0,
          });
    const [date,setDate]= useState(new Date());
          useEffect(()=>{
            console.log(type,tempCoupon);
            if(type==='create'){
                setTempData({
                    title: "超級優惠",
                    code: "aaa",
                    due_date: 1555459200,
                    percent: 100,
                    is_enabled: 0,
                });
                setDate(new Date());
            } else if(type==='edit'){
                setTempData(tempCoupon);
                setDate(new Date(tempCoupon.due_date))
                //console.log(tempCoupon);
            }
        },[type,tempCoupon]);
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
    const addCoupon=async()=>{
        try{

            let api= `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon`;
            let method = 'post';
            if(type ==='edit'){
            api=`/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${tempCoupon.id}`;
             method ='put';
            }
            const res = await axios[method](
                api,{
                data:{
                    ...tempData,
                    due_date: date.getTime(), //change to timestamp
                }
            },);
            console.log(res);
            closeModal();
            getCoupons();
        }catch(error){
            console.log(error);
        }
       } 
    return(
        <div className="modal fade" id="couponModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">
                        {type==="create"? "建立新優惠券": `編輯 ${tempData.title} 優惠券`}
                        </h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
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
                            <label className="w-100" htmlFor="percent">折扣(%)</label>
                            <input type="text" id="percent" name="percent" placeholder="請輸入折扣(%)" 
                            className="form-control" onChange={handleChange} value={tempData.percent}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-2">
                        <label className="w-100" htmlFor="due_date">到期日</label>
                        <input type="date" 
                        id="due_date" name="due_date" placeholder="請輸入到期日" 
                        className="form-control" 
                        value={`${date.getFullYear().toString()}-${(date.getMonth() +1
                            )
                            .toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`}
                        onChange = {(e)=>{
                            console.log(e.target.value);
                            setDate(new Date(e.target.value));
                        }}
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-2">
                            <label className="w-100" htmlFor="code">優惠碼</label>
                            <input type="text" id="code" name="code" placeholder="請輸入優惠碼" 
                            className="form-control" onChange={handleChange} value={tempData.code}/>
                        </div>
                        <div className="form-check">
                            <label className='form-check-label' htmlFor='is_enabled'>
                                    <input
                                        className='form-check-input me-2'
                                        type='checkbox'
                                        id='is_enabled'
                                        name='is_enabled'
                                        checked={tempData.is_enabled}
                                        onChange={handleChange}
                                    />
                                    是否啟用
                            </label> 
                        </div>    
                    </div>

                </div>
            </div>   
            {/* Modal inner */}
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>關閉</button>
                    <button type="button" className="btn btn-primary" onClick={addCoupon}>更新優惠券內容</button>
                </div>
                </div>
            </div>
        </div>



    )
};
export default CouponModal;