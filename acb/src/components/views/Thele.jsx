import React from 'react';
import FRAME from "../../assets/img/phanqua-frame.png";
import bg from "../../assets/img/thele-card.png";
import Swiper from "swiper";
import NuocHoa from '../../assets/img/phanqua/nuochoa.png';
import SuaTam from '../../assets/img/phanqua/suatam.png';
import SonDuongMoi from '../../assets/img/phanqua/sonduongmoi.png';
import PhanMaHong from '../../assets/img/phanqua/phanmahong.png';

const phanqua = [
    {
        id: 1,
        name: "Nước Hoa",
        url: NuocHoa
    },
    {
        id: 0,
        name: "Nước Hoa 1",
        url: SuaTam
    },
    {
        id: 3,
        name: "Nước Hoa 2",
        url: SonDuongMoi
    },
    {
        id: 2,
        name: "Phan ma hong",
        url: PhanMaHong
    },

];
class Thele extends React.Component {
    // view = () =>{
    //     const index = this.props.index;
    //     this.props.handleOnBack(index+1);
    // }
    handleClick=()=>{
        this.props.handleOnEnded()
    }
    // handleClickback=()=>{
    //     this.props.handleOnBack(0)
    // }
    componentDidMount(){
        this.swiper();
    }
        swiper = () => {
            new Swiper(".swiper-cp", {
              slidesPerView: 1,
              spaceBetween: 40,
              autoplay: {
                delay: 1000,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              },
              speed: 1000
            });
          };
    
    render(){
       const boxphanqua =  phanqua.map((key,index) => {
           return (
            <div className="swiper-slide" key={index}>
                <img src={key.url} alt=""/>
            </div>
           )
       });
        return(
            <div className="index-thele" > 
         
                <div className="logo">
                <img src={bg} alt=""/>
                    <div className="conetnt">
                        <h1>The Le</h1>
                        <p>
                            Mini Game “
                            <span className="text-red">Gửi yêu thương đến phái đẹp</span>”
                            là món quà chúng tôi gửi tặng một nửa ACB nhân ngày 8/3 yêu
                            thương. Cùng chúng tôi trải qua ngày đặc biêt này với những món
                            quà bất ngờ đang chờ bạn nhé.
                        </p>
                        <br/>
                        <div className="box-phanqua">
                            <div className="box-left">
                                <img src={FRAME} alt=""/>
                               
                                <div className="swiper-container swiper-cp">
                                    <div className="swiper-wrapper">

                                        {boxphanqua}
                                    </div>
                                    <div className="swiper-pagination"></div>

                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>

                                </div>




                            </div>
                            <div className="box-right">
                                <ul>
                                    <li>
                                        Bước 1: Bạn hãy chụp ảnh màn hình và chia sẻ tất
                                        cả món quà bạn nhận được (bao gồm cả lời chúc)
                                        trên FB cá nhân và{" "}
                                        <span className="customtxt">
                                        hashtag #ACB #guiyeuthuongdenphaidep{" "}
                                        </span>
                                        và tag ít nhất 10 người bất kì trên FB.{" "}
                                    </li>
                                    <li>
                                        Bước 2: Chụp màn hình FB của bạn đã thực hiện và
                                        gửi về mail về pqtttth@acb.com.vn. Hạn chót gửi
                                        hình về là 23h59 ngày 09.03.2019{" "}
                                    </li>
                                    <li>
                                        Bước 3: Ngày 11.03.2019, chúng tôi sẽ công bố KQ
                                        set quà đặc biệt tại ACB Home{" "}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button onClick={this.handleClick} className="btn btn-success">click next</button>
                        {/* <button onClick={this.handleClickback}>click back</button> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Thele;


