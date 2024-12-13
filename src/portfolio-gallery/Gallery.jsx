import img1 from "./Gallery/1.jpg";
import img2 from "./Gallery/2.jpg";
import img3 from "./Gallery/3.jpg";
import img4 from "./Gallery/4.jpg";
import img5 from "./Gallery/5.jpg";
import imgone from "./Gallery/one.jpg";

const Gallery = () => (
  <div>
    <img src={img1} alt="Gallery  1" />
    <img src={img2} alt="Gallery 2" />
    <img src={img3} alt="Gallery 3" />
    <img src={img4} alt="Gallery 4" />
    <img src={img5} alt="Gallery 5" />
    <img src={imgone} alt="Gallery 6" />
  </div>
);

export default Gallery;