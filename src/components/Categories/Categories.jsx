import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import {Loader} from "../Loader/Loader.jsx";
import {Error} from "../Error/Error.jsx";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {useFetchData} from "../Custom Hooks/useFetchData.jsx";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from './Categories.module.css'

export function  Categories() {
    const {data,error,loading} =  useFetchData('https://ecommerce-node4.onrender.com/categories')
    if (loading){
       return <Loader></Loader>
    }
    if (error){
       return <Error message={error}></Error>
    }


    return (
        <section className={style.category_section}>
            <Swiper className={style.swiper}
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{clickable: true}}

            >
                {data.data.categories.map((category) => {
                    return <SwiperSlide key={category._id}>
                        <img key={category.image.secure_url} src={category.image.secure_url} alt={category.name}/>

                    </SwiperSlide>
                })}
            </Swiper>
        </section>
    );

}