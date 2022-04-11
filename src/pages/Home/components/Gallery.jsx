import React from "react";
import { Carousel } from "react-responsive-carousel";
import useQuery from "../../../hooks/useQuery";
import { homeService } from "../../../services/home";

export default function Gallery() {
  const { data: gallery } = useQuery(() => homeService.gallery(), []);

  return (
    <section className="section-gallery">
      <div className="textbox">
        <h2 className="main-title">Chúng ta là một team</h2>
      </div>
      <Carousel showThumbs={false}>
        {gallery?.map((img, i) => (
          <div key={i} style={{ paddingBottom: 50 }}>
            <img
              src={img}
              alt=""
              style={{ height: 500, objectFit: "scale-down" }}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
