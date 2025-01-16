import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import marathonBanner from "../assets/bannermarathon.jpeg";
import marathonBanner1 from "../assets/marathonbanner1.jpeg";
import marathonBanner2 from "../assets/marathonbanner2.jpeg";
import marathonBanner3 from "../assets/marathonbanner3.jpeg";
import marathonBanner4 from "../assets/marathonbanner4.jpeg";

const StaticImgCarousel = () => {
  const staticImagesData = [
    {
      path: marathonBanner,
      url: "https://forms.gle/2GsbRkiKkZ2zA9Tq9",
      title: "",
      caption: "Click here for registration",
      description:
        "#Run For Youth, #Run for Green and Clean Etawah नशा मुक्त इटावा इटावा के इतिहास में पहली बार 🏃‍♂️ इटावा मैराथन 2025 🏃‍♀️ आयोजक: '' इटावा हेल्प डेस्क '' 🌟 विशेष अवसर: राष्ट्रीय युवा दिवस (स्वामी विवेकानंद  जी को समर्पित) 📅 तारीख: 12 जनवरी 2025 🏁 दूरी: 5 किलोमीटर 🔸 शुरुआत: राजा सुमेर सिंह किला / टिक्सी मंदिर 🔸 समाप्ति: नुमाइश पंडाल इटावा" +
        "उठो, जागो और लक्ष्य प्राप्ति तक रुको मत!" +
        "आओ, दौड़ें एक नए जोश के साथ! 💰 रजिस्ट्रेशन फीस: निःशुल्क 🏆 पुरस्कार विवरण 📌 5 km की मैराथन में भाग लेने पर: 🥇 पहला स्थान: ₹5000 नकद 🥈 दूसरा स्थान: ₹2500 नकद 🥈तीसरा स्थान: ₹1000 नकद 🥈 शीर्ष 7 प्रतिभागी: विशेष पुरस्कार 📌 2 Km की मैराथन में भाग लेने पर: 🥇 प्रथम स्थान: प्रोत्साहन मेडल 🥈 शीर्ष 2 प्रतिभागी: प्रोत्साहन मेडल 📌 अन्य सभी प्रतिभागियो को भागीदारी प्रमाणपत्र मिलेगा। मैराथन में भाग लेने के फ़ायदे: ✅ अपने स्वास्थ्य को बेहतर बनाएं ✅ नई ऊर्जा और आत्मविश्वास से भरें ✅ स्वस्थ और सकारात्मक जीवनशैली अपनाएं 🌟 अपने अंदर के युवा को जागृत करें और सफलता की दौड़ में सबसे आगे रहें! रजिस्ट्रेशन में असुविधा होने पर संपर्क करें: 📞 मोबाइल: 9411868600, 7599804042 Mayank bhadauria तेजी से दौड़ें, सेहत से जुड़ें और पुरस्कार जीतें!",
    },
    {
      path: marathonBanner1,
      url: "https://forms.gle/2GsbRkiKkZ2zA9Tq9",
      title: "",
      caption: "Click here for registration",
    },
    {
      path: marathonBanner2,
      url: "https://forms.gle/2GsbRkiKkZ2zA9Tq9",
      title: "",
      caption: "Click here for registration",
    },
    {
      path: marathonBanner3,
      url: "https://forms.gle/2GsbRkiKkZ2zA9Tq9",
      title: "",
      caption: "Click here for registration",
    },
    {
      path: marathonBanner4,
      url: "https://forms.gle/2GsbRkiKkZ2zA9Tq9",
      title: "",
      caption: "Click here for registration",
    },
  ];

  return (
    <Container>
      <br />
      <Carousel>
        {staticImagesData.map((image, key) => {
          return (
            <Carousel.Item interval={3000} key={key}>
              <a
                target="_blank"
                href={image.url}
                style={{ textDecoration: "none", cursor: "default" }}
              >
                <div>
                  <img
                    className="d-block w-100"
                    src={image.path}
                    style={{
                      margin: "auto",
                      width: "auto",
                      height: 600,
                      objectFit: "contain",
                    }}
                  />
                  <br />
                  <Carousel.Caption>
                    <h3
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        opacity: "0.7",
                        cursor: "pointer",
                      }}
                    >
                      {image.caption}
                    </h3>
                    <h6
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        opacity: "0.9",
                      }}
                    >
                      {/* {image.description} */}
                    </h6>
                  </Carousel.Caption>
                </div>
              </a>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default StaticImgCarousel;
