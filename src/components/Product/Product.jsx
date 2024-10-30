import style from './Product.module.css'
import {addShoppingBag} from "../ShoppingBag.jsx";
export function Product({ id, img, title, price, description }) {
    return (
        <div className="card" style={{ width: '18rem', height: '22rem' }}>
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body d-flex flex-column gap-1">
                <h5 className="card-title overflow-hidden">{title}</h5>
                <span className="fw-bold">{price}$</span>
                <button
                    onClick={() => {
                        console.log(id);
                        addShoppingBag(id);
                    }}
                    className="btn link-dark text-capitalize"
                    style={{ alignSelf: 'start' }}
                >
                    Shop this
                </button>
            </div>
        </div>
    );
}