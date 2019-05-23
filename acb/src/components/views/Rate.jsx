import React from 'react';
import image from '../../assets/img/phanqua-card.png';
class Rate extends React.Component {
    render(){
        return(
            <div className="index-rate">
                <div className="bg">
                    <img src={image} alt=""/>
                    <div className="info">
                        <h3>Cho tôi biết cảm nghĩ của bạn</h3>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Rate;