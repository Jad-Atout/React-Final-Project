import {Categories} from "../../Categories/Categories.jsx";
import style from "./Home.module.css"
import {RandomProducts} from "../../RandomProducts/RandomProducts.jsx";
import {Link} from "react-router-dom";

export function Home() {

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide vh-100" data-bs-ride="carousel"
                 data-bs-interval={3000}>
                <div className={`carousel-indicators ${style.carouselIndicators}`}>
                    <button type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className={`active`} aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                             aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                              aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner vh-100">
                    <div className={`carousel-item active ${style.carousel_img}`} style={{backgroundImage:`url(https://images.ctfassets.net/p85mj7v2zszd/4a06M0gGDRPWAt6rDDiooi/994ea17363d66511dc799b8e43c89dbf/New_Hero_H1_D-2.jpg?w=2400&h=1172&fm=webp)`}} >

                    </div>
                    <div className={`carousel-item  ${style.carousel_img}`}  style={{backgroundImage:`url(https://images.ctfassets.net/p85mj7v2zszd/1BJSGD7hi51RGHP8l0B4CG/cf55095b75507842f3227af8fd1bbae4/New_Hero_H1_D.jpg?w=2400&h=1172&fm=webp)`}}>

                    </div>
                    <div className={`carousel-item  ${style.carousel_img}`}  style={{backgroundImage:`url(https://images.ctfassets.net/p85mj7v2zszd/5qtaG7Pxt87H24Wi338APZ/3e275cebf872e05494ade0063e260651/New_Hero_H1_D-1.jpg?w=2400&h=1172&fm=webp)`}}>

                    </div>
                </div>

            </div>
            <Categories>
            </Categories>
            <RandomProducts />

    </>
    )
}