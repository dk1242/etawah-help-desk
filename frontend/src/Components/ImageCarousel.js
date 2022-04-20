import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetAllEventsAPI, GetAllImagesAPI } from "./ApiCore";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
    fetch5Images();
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    GetAllEventsAPI()
      .then((res) => {
        const data = res.data.msg;
        // console.log(data);
        const size = data.length;
        // console.log(size);
        var c = size;
        while (c-- > 0) {
          if (data[c].live) {
            setImages((images) => [
              ...images,
              {
                Id: data[c]._id,
                image: data[c].poster,
                caption: data[c].title,
                isEvent: true,
              },
            ]);
          }
        }
        // console.log(images);
      })
      .catch((err) => console.log(err));
  };

  const fetch5Images = () => {
    GetAllImagesAPI()
      .then((res) => {
        const data = res.data.msg;
        // console.log(data);
        const size = data.length;
        // console.log(size);
        var i = 0,
          c = size;
        while (c-- > 0 && i < 5) {
          // console.log(i);
          setImages((images) => [
            ...images,
            {
              Id: data[c]._id,
              image: data[c].image,
              caption: data[c].caption,
              isEvent: false,
            },
          ]);
          i++;
        }
        // console.log(images);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <br />
      <Carousel>
        {images.length > 0 ? (
          images.map((image, key) => {
            const arrayBufferToBase64 = (buffer) => {
              var binary = "";
              var bytes = [].slice.call(new Uint8Array(buffer));
              bytes.forEach((b) => (binary += String.fromCharCode(b)));
              return window.btoa(binary);
            };
            {
              /* console.log(image); */
            }
            var base64Flag = "data:" + image.image.contentType + ";base64,";
            var imageStr = arrayBufferToBase64(image.image.data.data);
            var finalImg = base64Flag + imageStr;
            return (
              <Carousel.Item interval={3000} key={key}>
                {image.isEvent ? (
                  <Link to="/events">
                    <div>
                      <img
                        className="d-block w-100"
                        width={600}
                        height={600}
                        src={finalImg}
                        style={{ margin: "auto" }}
                      />
                      <Carousel.Caption>
                        <h3
                          style={{
                            color: "black",
                            backgroundColor: "white",
                            opacity: "0.7",
                          }}
                        >
                          {image.caption}
                        </h3>
                      </Carousel.Caption>
                    </div>
                  </Link>
                ) : (
                  <Link to="/gallery">
                    <div>
                      <img
                        className="d-block w-100"
                        width={600}
                        height={600}
                        src={finalImg}
                        style={{ margin: "auto" }}
                      />
                      <Carousel.Caption>
                        <h3
                          style={{
                            color: "black",
                            backgroundColor: "white",
                            opacity: "0.7",
                          }}
                        >
                          {image.caption}
                        </h3>
                      </Carousel.Caption>
                    </div>
                  </Link>
                )}
              </Carousel.Item>
            );
          })
        ) : (
          <h3></h3>
        )}
        {/* <Carousel.Item interval={500}>
          {images.length > 0 && console.log(images[0].image) && (
            <img className="d-block w-100" src={images[0].image} />
          )}
        </Carousel.Item> */}
      </Carousel>
    </Container>
  );
};

export default ImageCarousel;
