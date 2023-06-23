import React from "react";
import Loader from "../../UI/Loader/Loader";

import GalleryImage1 from "../../../Assets/Gallery/GalleryImage1.jpg";
import GalleryImage2 from "../../../Assets/Gallery/GalleryImage2.jpg";
import GalleryImage3 from "../../../Assets/Gallery/GalleryImage3.jpg";
import GalleryImage4 from "../../../Assets/Gallery/GalleryImage4.jpg";
import GalleryImage5 from "../../../Assets/Gallery/GalleryImage5.jpg";
import GalleryImage6 from "../../../Assets/Gallery/GalleryImage6.jpg";
import GalleryImage7 from "../../../Assets/Gallery/GalleryImage7.jpg";
import Heading from "../../UI/Heading/Heading";

import "./Gallery.css";

export default function Gallery() {
  const GalleryData = [
    {
      id: 1,
      img: GalleryImage1,
    },
    {
      id: 2,
      img: GalleryImage2,
    },
    {
      id: 3,
      img: GalleryImage3,
    },
    {
      id: 4,
      img: GalleryImage4,
    },
    {
      id: 5,
      img: GalleryImage5,
    },
    {
      id: 6,
      img: GalleryImage6,
    },
    {
      id: 7,
      img: GalleryImage7,
    },
  ];

  return (
    <div className="All_gallery" id="Gallery">
      <Heading name="Gallery" />
      <div className="Gallery_container">
        {GalleryData.map((img) => {
          return (
            <div key={img.id} className={`Gallery_image_${img.id}`}>
              <Loader />
              <img className="Gallery_image" src={img.img} alt="Gallery" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
