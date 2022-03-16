import React, { useEffect,useState } from "react";
import {db} from '../firebase'
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import '../App.scss';



const Body = () => {
    const[data,setData]=useState([])
useEffect(() => {
    db.collection("works").onSnapshot(querySnapshot=>{
        setData(querySnapshot.docs.map(doc=>({ ...doc.data(), id: doc.id })))
        //console.log(querySnapshot.docs.map(doc=>doc.data()))
        })
}, [])

   


    return(
        <>
            <section className="about-us-area text-white">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about-us-text-area mb-5 mt-5">
                                <h2 className="about-us-text title-font-3">
                                Combining leading-edge business strategy and IT knowledge
                                    <br/>
                                    to develop efficient and effective solutions that keep businesses one-step ahead.
                                </h2>
                                <p className="mt-4 mb-4 title-font-2">
                                To be the providers of I.C.T. strategies and services, which deliver long term commercial benefits, based upon our clients key business requirements. 
                                    <br/>
                                    The strategies evolved should be economical, efficient, durable, flexible and allow the organisations to respond rapidly to both market and customer needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Portfolio data={data}/>

            <section className="lead">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="lead-title text-white mb-5 mt-4">
                                <h1 className="title-font">
                                Let's work together
                                </h1>
                                <p className="mt-4 mb-4 title-font-2">
                                Scaling-up your business 
                                is our mission!
                                </p>
                                <Link to="/contact">
                                    <button className="btn text-white">
                                        Contact
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Body;