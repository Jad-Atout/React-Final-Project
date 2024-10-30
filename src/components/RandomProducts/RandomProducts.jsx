import {useFetchData} from "../Custom Hooks/useFetchData.jsx";
import {Loader} from "../Loader/Loader.jsx";
import {Error} from "../Error/Error.jsx";
import {Product} from "../Product/Product.jsx";
import style from './RandomProducts.module.css'

export function RandomProducts() {
    const {data,error,loader} = useFetchData('https://ecommerce-node4.onrender.com/products?page=1&limit=20')
    if(loader) return <Loader></Loader>
    if (error) return <Error message={error}></Error>
    if(!data){return null}
    const products = data.data.products

    return (
        <section>
            <div className={`${style.randomProducts}`}>
            {products.map((product)=>{
                return <Product id={product.id}
                                key={product.id}
                                img={product.mainImage.secure_url}
                                title={product.name.split(" ").slice(0,3).join(" ")+'...'}
                                price={product.finalPrice}
                                description={product.description}></Product>
            })}
            </div>
        </section>
    )
}