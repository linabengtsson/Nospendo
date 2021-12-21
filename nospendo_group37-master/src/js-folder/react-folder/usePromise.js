import React from "react";

function usePromise(promise) {  
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
    React.useEffect(function(){
        setData(null); 
        setError(null);
        if (promise) {
        promise.then(results => {setData(results)}).catch(error => setError(error));}
    }, [promise]);
    return [data, error]}

export default usePromise;

    