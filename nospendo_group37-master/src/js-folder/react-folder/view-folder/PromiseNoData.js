import loading from '../../../135.gif'

function promiseNoData(promise, data, error){  
    return  !promise && "no data" 
          || error && <h1>{error.message}</h1>
          || !data && <img className='loadinggif' alt="" src={loading} height='20px'/>
}

export default promiseNoData;
