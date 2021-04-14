import React from 'react'
import {Icon, Col,Card,Row, Carousel } from 'antd'
function ImageSlider(props) {
    return (
        <Carousel autoplay>
            {props.images.map((image,index)=>(
                <div key = {index}>
                    <img style={{width:'100%', height : '150px'}}src={`http://localhost:5000/${image}`}/>
                </div>

            ))}
        </Carousel>
    )
}

export default ImageSlider
