
import { useEffect, useState } from "react";
import ArticeWall from "../components/ArticeWall";
import Navbar1 from "../Navbar01";
function Home() {
  let count = 0;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      count = (activeIndex + 1) % 3;
      setActiveIndex(count);
    }, 3000);
    // carouselItem.current = new Carousel('carouselExampleControls',{
    return () => clearTimeout(timer);
    // }});
    // console.log(carouselItem.current);
  }, [activeIndex]);
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  function addactiveIndex(number) {
    if (activeIndex === 0 && number === -1) {
      setActiveIndex(2);
    } else {
      setActiveIndex((activeIndex + number) % 3);
    }
  }
  return (
    <>
      {/* Carousel Item*/}
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade mb-3"
        data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => handleSlideChange(0)}></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => handleSlideChange(1)}></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => handleSlideChange(2)}></li>
        </ol>
        <div className="carousel-inner">
          <div
            className={
              activeIndex === 0 ? "carousel-item active" : "carousel-item"
            }>
            <img
              className="carousel-bg d-block w-100"
              src={require('../../assets/images/carousel-cheerybloosom.jpg')}
              alt="First slide"
            />
            <div className="carousel-caption d-block">
              <h1>探索你的玩樂世界</h1>
              <p className="carousel-text">
              找尋在地體驗或到遠方探險，隨時隨地探索屬於你的玩樂世界
              </p>
            </div>
          </div>
          <div
            className={
              activeIndex === 1 ? "carousel-item active" : "carousel-item"
            }>
            <img
              className=" carousel-bg d-block w-100"
              src={require('../../assets/images/carousel-mountain.jpg')}
              alt="Second slide"
            />
            <div className="carousel-caption d-block ">
              <h1 >探索你的玩樂世界</h1>
              <p className="carousel-text ">
              找尋在地體驗或到遠方探險，隨時隨地探索屬於你的玩樂世界
              </p>
            </div>
          </div>
          <div
            className={
              activeIndex === 2 ? "carousel-item active" : "carousel-item"
            }>
            <img
              className="carousel-bg d-block w-100"
              src={require('../../assets/images/carousel-beach.jpg')}
              alt="Third slide"
            />
            <div className="carousel-caption  d-block">
              <h1>探索你的玩樂世界</h1>
              <p className="carousel-text">
              找尋在地體驗或到遠方探險，隨時隨地探索屬於你的玩樂世界
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          id="prev-button"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
          onClick={(e) => {
            e.preventDefault();
            addactiveIndex(-1);
          }}>
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          id="next-button"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
          onClick={(e) => {
            e.preventDefault();
            addactiveIndex(1);
          }}>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* Carousel Item End*/}
        
        <section className="container home-main-for-you w-100 mb-2">
          {/*<h3>VivaLaVida你的旅遊好助理</h3>
          <ul className=" list-group d-flex flex-column  align-item-centerw-100">
            <li className="list-group-item d-felx flex-column flex-nowrap">
                <h4 >oremloremloremloreml</h4>
                <p>oremloremloremloremloremloremloremloremloremloremlorem</p>
            </li>
            <li className="list-group-item d-felx flex-column flex-nowrap">
                <h4>oremloremloremlorem</h4>
                <p>oremloremloremloremloremloremloremloremloremloremlorem</p>
            </li>
            <li className="list-group-item d-felx flex-column flex-nowrap">
                <h4>oremloremloremloremloremlo</h4>
                <p>oremloremloremloremloremloremloremloremloremloremlorem</p>
            </li>
        </ul>*/}
        <h3 className="text-center mb-3">VivaLaVida你的旅遊好助理</h3>
        <ul>
            <li>
                <h4>發掘玩樂靈感</h4>
                <p>提供近50萬種吃喝玩樂、租車、住宿等體驗，帶你發現更好玩的世界</p>
            </li>
            <li>
                <h4>享會員專屬好禮</h4>
                <p>有週年慶等個種好康活動</p>
            </li>
            <li>
                <h4>玩樂品質保證</h4>
                <p>活動評價公開，專業客服團隊協助</p>
            </li>
        </ul>
        </section>
      {/* Article*/}
      <ArticeWall></ArticeWall>
    </>
  );
}
export default Home;
