import React, { Component } from 'react'
import BaseSection from  './base';
import { longStackSupport } from 'q';
import library from "./library.jpg";
import guide from "./guide.png";
import calendar from"./aca_cal.jpg";
import "./academic.scss";
// import {Container} from 'react-bootstrap';
// import {Row} from 'react-bootstrap';
// import {Col} from 'react-bootstrap'
// import {Image} from 'react-bootstrap'


export class AcademicSection extends Component {
    render() {
        return (
            <BaseSection 
                id="academic" 
                title= "校园"
                bgColor= "success">

                {/* <div className="card bg-dark text-white">
                    <img src= {library} class="card-img" alt="..."></img>
                        <div className="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                                <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div> */}
{/* 
                    <div className="card bg-dark text-white" style={{ width: '18rem'}}>
                        <img src={library} className="card-img" alt = "..."></img>
                        <div className="card-img-overlay">
                            <h5 className = "card-title">图书馆</h5>
                            <p className="card-text">website</p>
                        </div>
                    </div> */}

                    {/* <div className="card-group">
                        <div className="card">
                            <div className="image-container">
                            <img src={library} className="card-img-top" alt="..."></img>
                            </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                        </div>
                    </div>
                    <div className="card-group">
                        <div className="card">
                            <img src={library} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                        </div>
                    </div> */}

                    <div className="container">
                        <div className="row mx-lg-n5 align-items-center">
                            <div className="col-sm ">
                                <div className="card bg-dark text-white" style={{ width: '18rem'}}>
                                    <img src={guide} className="card-img" alt = "..."></img>
                                        <div className="card-img-overlay">
                                            <div className="text-center">
                                                <h3 className = "card-title">墨城攻略</h3>
                                                <a className="card-link" href="www.google.com">website</a>
                                                <p></p>
                                                <button className="btn btn-light">More</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                    <div className="card bg-dark text-white" style={{ width: '18rem'}}>
                                        <img src={library} className="card-img" alt = "..."></img>
                                            <div className="card-img-overlay">
                                                <div className="text-center">
                                                    <h3 className = "card-title" >图书馆</h3>
                                                    <a className="card-link" href="www.google.com">Library website</a>
                                                    <p></p>
                                                    <button className="btn btn-light">More</button>
                                                </div>      
                                            </div>
                                    </div>
                            </div>
                            <div className="col-sm">
                                    <div className="card text-white">
                                        <img src={calendar} className="card-img" alt = "..."></img>
                                            <div className="card-img-overlay">
                                                <div className="text-center">
                                                    <h3 className = "card-title">Academic Calendar中文版</h3>
                                                    <a className="card-link" href="www.google.com">Library website</a>
                                                    <p></p>
                                                    <button className="btn btn-light">More</button>
                                                </div>      
                                            </div>
                                    </div>
                            </div>
                            <div className="col-sm">
                                    <div className="card bg-dark text-white" >
                                
                                        <img src={library} className="card-img" alt = "..."></img>
                                        
                                            <div className="card-img-overlay">
                                                
                                                    <h3 className = "card-title" >LMS 入口</h3>
                                                    <a className="card-link" href="www.google.com">LMS website</a>
                                                    <p></p>
                                                    <button className="btn btn-light">More</button>

                                                   
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mx-lg-n5">
                        <div className="col-sm py-3 px-lg-5">
                    
                        </div>
                    </div>

                    <div className="container">
                        <div className="row mx-lg-n5 align-items-center">
                            <div className="col-sm ">
                                <div className="card bg-dark text-white" >
                                    <img src={library} className="card-img" alt = "..."></img>
                                        <div className="card-img-overlay">
                                            <div className="text-center">
                                                <h3 className = "card-title">墨城攻略</h3>
                                                <a className="card-link" href="www.google.com">website</a>
                                                <p></p>
                                                <button className="btn btn-light">More</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                    <div className="card bg-dark text-white" style={{ width: '18rem'}}>
                                        <img src={library} className="card-img" alt = "..."></img>
                                            <div className="card-img-overlay">
                                                <div className="text-center">
                                                    <h3 className = "card-title" >图书馆</h3>
                                                    <a className="card-link" href="www.google.com">Library website</a>
                                                    <p></p>
                                                    <button className="btn btn-light">More</button>
                                                </div>      
                                            </div>
                                    </div>
                            </div>
                            <div className="col-sm">
                                    <div className="card bg-dark text-white" style={{ width: '18rem'}}>
                                        <img src={library} className="card-img" alt = "..."></img>
                                            <div className="card-img-overlay">
                                                <div className="text-center">
                                                    <h3 className = "card-title" >图书馆</h3>
                                                    <a className="card-link" href="www.google.com">Library website</a>
                                                    <p></p>
                                                    <button className="btn btn-light">More</button>
                                                </div>      
                                            </div>
                                    </div>
                            </div>
                            <div className="col-sm">
                                    <div className="card bg-dark text-white" style={{ width: '18rem'}}>
                                        <img src={library} className="card-img" alt = "..."></img>
                                            <div className="card-img-overlay">
                                                <div className="text-center">
                                                    <h3 className = "card-title" >图书馆</h3>
                                                    <a className="card-link" href="www.google.com">Library website</a>
                                                    <p></p>
                                                    <button className="btn btn-light">More</button>
                                                </div>      
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>


                    
            

  

            


            

                 {/* <div className="container">
                    <div className="row mx-lg-n5 align-items-center">
                        <div className="col-sm ">
                            <div className="card" >
                                <img src={library} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">墨城攻略</h5>
                                
                                        <button className="btn btn-dark">More</button>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" >
                                <img src={library} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">图书馆</h5>
                                        <p className="card-text">website </p>
                                        <button className="btn btn-dark">More</button>
                                    </div>
                                </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" >
                                <img src="" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button className="btn btn-dark">More</button>
                                    </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row mx-lg-n5">
                        <div className="col-sm ">
                            <div className="card" >
                                <img src="library" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button className="btn btn-dark">More</button>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" >
                                <img src="" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button className="btn btn-dark">More</button>
                                    </div>
                                </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" >
                                <img src="" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button className="btn btn-dark">More</button>
                                    </div>
                        </div>
                    </div>
                </div>
              
              
                
                
                <div className="card" style={{ width: '18rem' }}>
                    <img src="" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button>More</button>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                    <img src="" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button>More</button>
                        </div>
                    </div>
               <div className="card bg-dark text-white" style={{ width: '18rem'}}>
                   <img src = "library" className="card-img" alt = "..."></img>
                   <div className="card-img-overlay">
                       <h5 className = "card-title">图书馆</h5>
                       <p className="card-text">website</p>
                   </div>
               </div>

              
                
                
    
               <div className="card bg-dark text-white" style={{ width: '18rem'}}>
                   <img className="card-img" alt = "..."></img>
                   <div className="card-img-overlay">
                       <h5 className = "card-title">图书馆</h5>
                       <p className="card-text">website</p>
                   </div>
               </div> */}


                 

                <p>
                    负责人：Mia、Arnold
                    <br></br>
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 墨城攻略校园部分快速入口
                    <br></br>
                    2. Academic Calendar中文版
                    <br></br>
                    3. 墨大网站常用功能快速链接(如：图书馆，LMS，选课系统，课表查询，Variation Form等)
                </p>
             
            </BaseSection>
        )
    }
}
