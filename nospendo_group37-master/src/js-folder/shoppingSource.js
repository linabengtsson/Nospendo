import {BASE_URL, API_KEY} from './ApiConfigur.js';

const  ShoppingSource={
    apiCall(params) {
     return fetch(BASE_URL+params, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "asos2.p.rapidapi.com"
        }
    })
    
    .then(response => {
        if(response.ok){
            return response;
        }
            throw Error(response.statusText)})
    .then(response => response.json())
    .catch(console.error);

    }
,
    getDetails(id){
        return this.apiCall("products/v3/detail?id="+id);
    }
,   
    getCategory(offset, categoryId, limit, store, q){
        return this.apiCall("products/v2/list?offset="+offset+"&categoryId="+categoryId+"&limit="+limit+"&store="+store+"&q="+q) 
    }

 };

 export default ShoppingSource;
