import axios from 'axios'

// const networkErr=''
export const getData= async () =>{
    let api = await axios.get('https://fakestoreapi.com/products')
    .catch(err=>{
        return err
    })
    // console.log(api.data)
    return api.data;
}
