import {Error} from "./Error/Error.jsx";
import axios from "axios";
import {useEffect} from "react";
const token = localStorage.getItem("token");
export async function  addShoppingBag(id) {
    const response =await axios.post("https://ecommerce-node4.onrender.com/cart/",{
        productId:id
    },{
        headers:{
            Authorization:`Tariq__${token}`
        }
    });
    

}
export  function ShoppingBag() {
    const getCart = async () => {
        const {data} = await axios.get("https://ecommerce-node4.onrender.com/cart/", {
            headers: {
                Authorization: `Tariq__${token}`
            }
        });



        useEffect(() => {
            getCart();

        }, []);



        return (
            <>
                {(data)? <div>


                </div>:''}
            </>
        );
    }
}
