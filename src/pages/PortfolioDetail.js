import React from "react";
import DetailComponent from '../components/PortfolioDetailComponent';
import { useLocation } from "react-router-dom";
import LetsWork from '../components/LetsWorkTogether';

const PortfolioDetail = () => {
    const location = useLocation();
   console.log(location.state.e)

    return(
        <>  
            <DetailComponent data={location.state.e}/>
            <LetsWork/>
        </>
    );
}



export default PortfolioDetail;