import { useEffect, useState } from "react";
import axios from "axios";
import { Error } from "./Error/Error.jsx";

const token = localStorage.getItem("userToken");

export async function addShoppingBag(id) {
    try {
        const response = await axios.post("https://ecommerce-node4.onrender.com/cart/", {
            productId: id
        }, {
            headers: {
                Authorization: `Tariq__${token}`
            }
        });
        return response.data; // return response if you need it elsewhere
    } catch (error) {
        console.error("Error adding to shopping bag:", error);
    }
}

export function ShoppingBag() {
    const [data, setData] = useState(null);

    const getCart = async () => {
        try {
            const response = await axios.get("https://ecommerce-node4.onrender.com/cart/", {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            setData(response); // Update state with cart data
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };

    useEffect(() => {
        getCart();
    }, []);

    return (
        <>
            {data ? (
                <div>
                    {/* Map through cart items if it's an array */}
                    {data.map((item, index) => (
                        <div key={index}>
                            {JSON.stringify(item)} {/* Display each item in the cart */}
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
