import React from 'react';
import Loader from './Loader/';
import Error from './Error/Error'

const LoaderWrapper=({children,isLoading,isError})=>{
    let component=null;
    if(isLoading){
   component=<React.Fragment><Loader/></React.Fragment>
    }
    if(isError){
        component=<React.Fragment><Error/></React.Fragment>
    }
    return (
        <div>
            {component||children}
        </div>
    )
}

export default LoaderWrapper
