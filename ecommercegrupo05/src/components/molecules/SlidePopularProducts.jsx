import React from 'react';
import Card from '../atoms/Card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards'



function SlidePopularProducts({infoData}) {
    return (
        <div> 
            <h3> Popular Products </h3>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={150}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
        infoData ? infoData.map(({id, thumbnail, title, price}) =>{
            return(
                      <SwiperSlide key={id}>
                       <div>
                          <Card 
                          image={thumbnail} 
                          name={title}
                          price={price}
                          />
                       </div>
                      </SwiperSlide>
                  )
              }) : null }
        
      </Swiper>
      </div>
    )
  }

export default SlidePopularProducts


