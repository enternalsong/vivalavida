 import axios from 'axios';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
 const Login =()=>{
    const navigate =useNavigate();
    const [data,setData] =useState({
        username:'',
        password:'',
    });
    const handleChange = (e) =>{
       // console.log(e);
        const {name,value} = e.target;
        //console.log(name,value);
        setData({...data,[name]:value});
    }
    const submit = async(e)=>{
        const signinRes = await axios.post(`/v2/admin/signin`,data);
        const {token,expired} = signinRes.data;
        document.cookie = `shopToken=${token};expires=${new Date(expired)};`;
        axios.defaults.headers.common['Authorization'] = token;//save token
        const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/products/all`);
        console.log(signinRes);
        if(signinRes.data.success){
            navigate('/admin/products')
        }
    }
    
    return(
<div className="login-page bg-light">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
            <h3 className="mb-3">Login Now</h3>
                <div className="bg-white shadow rounded">
                    <div className="row">
                        <div className="col-md-7 pe-0">
                            <div className="form-left h-100 py-5 px-5">
                                <form action="" className="row g-4">
                                        <div className="col-12">
                                            <label>Username<span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                                                <input type="text" className="form-control" name="username" onChange={handleChange} placeholder="Enter Username"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label>Password<span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                                <input type="text" className="form-control" name="password" onChange={handleChange} placeholder="Enter Password"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
                                                <label className="form-check-label" htmlFor="inlineFormCheck">Remember me</label>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <a href="#" className="float-end text-primary">Forgot Password?</a>
                                        </div>

                                        <div className="col-12">
                                            <button type="button" className="btn btn-primary px-4 float-end mt-4" onClick={submit}>login</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 ps-0 d-none d-md-block">
                            <div className="form-right h-100 bg-primary text-white text-center pt-5">
                                <i className="bi bi-bootstrap"></i>
                                <h2 className="fs-1">Welcome Back!!!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
export default Login;