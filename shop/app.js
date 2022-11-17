

//Get elements

const product_form = document.getElementById('product_form');

// /**
//  * Get All product
//  */

const getAllProduct = async () => {


    try {

       await axios.get('localhost:5050/api/v1/product')
       .then( res => {
        console.log(res.data);
       })
       .catch( error => console.log(error.message))
     

    } catch (error) {
        
        console.log(error.message);

    }


}

getAllProduct()

//Get form data

product_form.onsubmit = async (e)=> {
    e.preventDefault();
    
    const formData = new FormData(e.target)
    // const data = Object.fromEntries(formData.entries());

    console.log(formData);

    
    try {

       await axios.post('localhost:5050/api/v1/product', formData)
       .then( res => {
        console.log(res.data);
       })
       .catch( error => console.log(error.message))
        
    } catch (error) {
        console.log(error.message);
    }
   
}
