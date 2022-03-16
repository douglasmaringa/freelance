import React, { useEffect,useState } from "react";
import { Link,useHistory } from 'react-router-dom';
import {db} from '../firebase'
import ImageContentHover from 'react-image-hover';

const Portfolio = () => {
    const[data,setData]=useState([])
    const history = useHistory();
    const go = (e) => {
        history.push({ pathname:`/works/:${e.id}`, state:{ e }});
      }

    useEffect(() => {
        db.collection("works").onSnapshot(querySnapshot=>{
            setData(querySnapshot.docs.map(doc=>({ ...doc.data(), id: doc.id })))
            console.log(querySnapshot.docs.map(doc=>doc.data()))
            })
    }, [])
    
       
    console.log(data)

     
        return(
            <>  
                <section className="portfolio">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="portfolio-title text-white mb-5 mt-4">
                                    <h1 className="title-font">
                                    Take a look at our portfolio
                                    </h1>
                                    <p className="mt-4 mb-4 title-font-2">
                                    For every complex problem, 
                                    there is an answer that is clear, 
                                    simple, and correct.
                                    </p>
                                </div>
                            </div>
                            {data.map((e) => (
                                // show portfoilo boxes by mapping the array of images
                                <div className="col-lg-4 col-md-6 col-sm-6" key={e.id} >
                                    <div className="portfolio-thumb">
                                        <Link  onClick={()=>{go(e)}}>  
                                            <ImageContentHover
                                                className="center-block"
                                                image = {e.image}
                                                content={{
                                                    title: [e.title]
                                                }} 
                                                effect="fadeIn"
                                            />
                                        </Link>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    
}




export default Portfolio;