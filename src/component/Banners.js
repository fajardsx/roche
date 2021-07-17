import { Carousel } from "react-responsive-carousel";

const Banners = (props) => {
  return (
    
      <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
        <div style={{height:"200px"}}>
          <img src="https://dummyimage.com/600x400/000/fff" />
        </div>
        <div style={{height:"200px"}}>
          <img src="https://dummyimage.com/600x400/000/fff" />
        </div>
        <div  style={{height:"200px"}}>
          <img src="https://dummyimage.com/600x400/000/fff" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    
  );
};
export default Banners;
