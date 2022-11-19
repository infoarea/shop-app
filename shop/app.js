

//without axios fetch system
//Get all product by Fetch

// const getAllProduct = async () => {

//     try {

//        await fetch('http://localhost:5050/api/v1/product')

//         .then(res=> {
//            return res.json()
//         })
//         .then(res => console.log(res))
//         .catch(error => console.log(error.message))

        
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// getAllProduct()


//Get form Data 

// product_form.onsubmit = async (e) => {
//     e.preventDefault()
    
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());

//     try {

//         await fetch('http://localhost:5050/api/v1/product', {
//             method : "POST",
//             body : JSON.stringify(data),
//             headers : {
//                 'Content-Type' : 'application/json'
//             }
//         })
        
//     } catch (error) {
//         console.log(error.message);
//     }
    
    
    
// }


//Using axios fetch system



//Get elements
const product_form = document.getElementById('product_form');
const product_list = document.getElementById('product_list');


//Get all product by Fetch

const getAllProduct = async () => {

    try {

       await axios.get('http://localhost:5050/api/v1/product')

       .then(res => {
            
            let list = '';

        res.data.forEach( ( item, index ) => {
            list += `<tr class="align-middle">
                        <td>${index + 1}</td>
                        <td>${item.name}</td>
                        <td>${item.regularPrice}</td>
                        <td>${item.sellPrice}</td>
                        <td>${item.stock}</td>
                        <td><img style="width: 40px; height: 40px; object-fit: cover" src="http://192.168.0.133:5050/images/product/${item.photo}"></td>
                        <td>${item.category}</td>
                        <td>${item.tag}</td>
                    </tr>`
        });

        product_list.innerHTML = list


       })
       .catch(error => console.log(error.message))

        
    } catch (error) {
        console.log(error.message);
    }
}

getAllProduct()


//Get form Data 

product_form.onsubmit = async (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData.entries());

    try {

      await  axios.post('http://localhost:5050/api/v1/product', formData)
            //  .then(res => {
            //     console.log(res.data);
            //  })
            
             .catch(error => console.log(error.message))
             
        
    } catch (error) {

        console.log(error.message);
    }
    
    
    
}
