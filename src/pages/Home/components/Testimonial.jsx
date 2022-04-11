import React from "react";
import { Carousel } from "react-responsive-carousel";
import useQuery from "../../../hooks/useQuery";
import { homeService } from "../../../services/home";

export default function Testimonial() {
  const { data: review } = useQuery(() => homeService.review());
  // console.log("review", review);

  return (
    <section className="section-testimonial">
      <div className="container">
        <div className="textbox">
          <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
        </div>
        <div className="testimonial">
          <div className="testimonial-item">
            <Carousel showThumbs={false}>
              {review?.map((e, i) => (
                <div className="item" key={i} style={{ paddingBottom: 50 }}>
                  <div className="text">
                    <div className="ct ct-1 active">
                      <div className="info">
                        <div className="name">
                          <h4>{e.name}</h4>
                          <p>Thành viên CFD1</p>
                        </div>
                        <div className="quotes">
                          <img src="/img/quotes.svg" alt="" />
                        </div>
                      </div>
                      <div className="content">{e.content}</div>
                      <div className="bottom">
                        <a href={e.fb} target="_blank">
                          <img src="/img/facebook.svg" alt="" />
                        </a>
                        <span>{e.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="images">
                    <div className="list">
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcSet="/img/Intersect.png"
                            />
                            <img src={e.cover} alt="" />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
