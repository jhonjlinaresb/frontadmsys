import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Image } from 'antd';

const contentStyle = {
  height: '575px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'linear-gradient(210DEG, #1c1c1c, #001529, black, #001529, #2c2c2c)',
};
class Home extends Component {
    render(){
        return (
    <Carousel autoplay>
    <div>
    <h1 style={contentStyle}>
    <p>Welcome to AdmSys Web APP</p>
    <Image width={300} src="https://i.ibb.co/P54hyMm/admsys.png"/> 
    </h1>
    </div>
    <div>
    <h1 style={contentStyle}>
    <p>Elegant, Modern & Intuitive Interfaz</p>
    <Image width={400} src="https://i.ibb.co/5hgd9G1/elegant.png"/> 
    </h1>
    </div>
  </Carousel>
  );}
}

export default Home; 