//import Swiper
// import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

const ArticeWall = () => {
  const [userEmail, setEmail] = useState("");
  const [isClick,setisClick]  = useState(false);
  return (
    <>
      <section className="articeWall w-100">
        <h2 className="mb-3">本月強檔報你知</h2>
        <div className="row">
          <div className="col-12 col-md-4 bg-hot1">
            <div className="hotcard">
              <span className="title">4月連架嗨玩</span>
              <div className="text">小朋友放電+大朋友放鬆景點一起收藏起來～</div>
            </div>
            <div className="hotcard-button">
              {" "}
              <span className="text">查看活動</span>
            </div>
          </div>
          <div className="col-12 col-md-4 bg-hot2">
            <div className="hotcard">
              <span className="title">澎湖花火節卡位！</span>
              <div className="text">
                迪士尼100週年慶！晚上搭花火船賞美美煙火！用klook
                pass輕鬆玩澎湖～
              </div>
            </div>
            <div className="hotcard-button">
              {" "}
              <span className="text">查看活動</span>
            </div>
          </div>
          <div className="col-12 col-md-4 bg-hot3">
            <div className="hotcard">
              <span className="title">日本大好き</span>
              <div className="text">該規劃夏季日本遊了吧！下一站首選沖繩！</div>
            </div>
            <div className="hotcard-button">
              {" "}
              <span className="text">查看活動</span>
            </div>
          </div>

          <div className={isClick ? "col-12 col-md-4 bg-hot4" : "d-none"}>
            <div className="hotcard">
              <span className="title">美味佳餚</span>
              <div className="text">最優惠的五星級buffet,上菜嘍</div>
            </div>
            <div className="hotcard-button">
              {" "}
              <span className="text">查看活動</span>
            </div>
          </div>
          <div className={isClick ? "footer d-none":"footer"}>
            <a>
              <button className="button" onClick={(e)=>{setisClick(true)}}>
                <div className="viewmore">查看更多</div>
              </button>
            </a>
          </div>
        </div>

        <div className=" travelSitebox  mb-2">
          <h2 className="mb-3 pl-3">想去哪裡玩？</h2>
          <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            breakpoints={{
              // when window width is >= 500px
              500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}>
            <SwiperSlide>
              <div className="card1">
                <img
                  className="card-image img-fluid"
                  src={require("../../assets/images/hotspot01_tokyo.png")}
                  alt=""
                />
                <div className="info"></div>
                <div className="text">東京</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card1">
                <img
                  className="card-image img-fluid"
                  src={require("../../assets/images/hotspot02_calo.png")}
                  alt=""
                />
                <div className="info"></div>
                <div className="text">開羅</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card1">
                <img
                  className="card-image img-fluid"
                  src={require("../../assets/images/hotspot03_wenisu.png")}
                  alt=""
                />
                <div className="info"></div>
                <div className="text">威尼斯</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card1">
                <img
                  className="card-image img-fluid"
                  src={require("../../assets/images/hotspot04_oisaka.png")}
                  alt=""
                />
                <div className="info"></div>
                <div className="text">大阪</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card1">
                <img
                  className="card-image img-fluid"
                  src={require("../../assets/images/hotspot05_okinawa.png")}
                  alt=""
                />
                <div className="info"></div>
                <div className="text">沖繩</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card1">
                <img
                  className="card-image img-fluid"
                  src={require("../../assets/images/hotspot06_singapore.png")}
                  alt=""
                />
                <div className="info"></div>
                <div className="text">新加坡</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card1">
                <img
                  className="card-image img-fluid"
                  src={require("../../assets/images/hotspot07_taipei.png")}
                  alt=""
                />
                <div className="info"></div>
                <div className="text">台北</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card1">
                <img
                  className="card-image img-fluid"
                  src={require("../../assets/images/hotspot08_switherland.png")}
                  alt=""
                />
                <div className="info"></div>
                <div className="text">瑞士</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="bg-light py-4 mt-2">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
              <p className="mb-0 fw-bold">
                訂閱我們網站的文章，不會錯過第一手的內容
              </p>
              <div className="input-group w-md-50 mt-md-0 mt-3">
                <input
                  type="text"
                  value={userEmail}
                  className="form-control rounded-0"
                  placeholder=""
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-dark rounded-0"
                    type="button"
                    id="search"
                    onClick={(e) => {
                      setEmail(e.target.value);
                    }}>
                    你的Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ArticeWall;
