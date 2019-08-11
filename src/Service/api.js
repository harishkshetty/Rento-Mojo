import  axios from 'axios';


const getData=(url)=>{
return axios.get(url);
}
const deleteData=(url)=>{
    return axios.delete(url)
}


export {getData,deleteData}