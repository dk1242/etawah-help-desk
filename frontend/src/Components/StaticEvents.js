import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import Header from "./Header";
import marathonBanner from "../assets/bannermarathon.jpeg";

const StaticEvents = () => {
  const staticEvents = [
    {
      title: "Etawah Marathon",
      poster: marathonBanner,
      description:
        "#Run For Youth, #Run for Green and Clean Etawah \nनशा मुक्त इटावा \nइटावा के इतिहास में पहली बार 🏃‍♂️ इटावा मैराथन 2025 🏃‍♀️ \n\nआयोजक: '' इटावा हेल्प डेस्क '' \n🌟 विशेष अवसर: राष्ट्रीय युवा दिवस (स्वामी विवेकानंद  जी को समर्पित) \n📅 तारीख: 12 जनवरी 2025 \n🏁 दूरी: 5 किलोमीटर \n🔸 शुरुआत: राजा सुमेर सिंह किला / टिक्सी मंदिर \n🔸 समाप्ति: नुमाइश पंडाल इटावा" +
        "\n\nउठो, जागो और लक्ष्य प्राप्ति तक रुको मत!" +
        "\nआओ, दौड़ें एक नए जोश के साथ! \n\n💰 रजिस्ट्रेशन फीस: निःशुल्क \n\n🏆 पुरस्कार विवरण: \n📌 5 km की मैराथन में भाग लेने पर: \n🥇 पहला स्थान: ₹5000 नकद \n🥈 दूसरा स्थान: ₹2500 नकद \n🥈तीसरा स्थान: ₹1000 नकद \n🥈 शीर्ष 7 प्रतिभागी: विशेष पुरस्कार \n\n📌 2 Km की मैराथन में भाग लेने पर: \n🥇 प्रथम स्थान: प्रोत्साहन मेडल \n🥈 शीर्ष 2 प्रतिभागी: प्रोत्साहन मेडल \n📌 अन्य सभी प्रतिभागियो को भागीदारी प्रमाणपत्र मिलेगा। \n\nमैराथन में भाग लेने के फ़ायदे: \n✅ अपने स्वास्थ्य को बेहतर बनाएं \n✅ नई ऊर्जा और आत्मविश्वास से भरें \n✅ स्वस्थ और सकारात्मक जीवनशैली अपनाएं \n🌟 अपने अंदर के युवा को जागृत करें और सफलता की दौड़ में सबसे आगे रहें! \n\nरजिस्ट्रेशन में असुविधा होने पर संपर्क करें: 📞 मोबाइल: 9411868600, 7599804042 Mayank bhadauria \nतेजी से दौड़ें, सेहत से जुड़ें और पुरस्कार जीतें!",
      url: "https://forms.gle/2GsbRkiKkZ2zA9Tq9",
    },
  ];

  return (
    <div>
      <Header />
      <br />
      <br />
      <Container>
        <h2>Live Events:</h2>
        {staticEvents.map((event, key) => {
          return (
            <div className="shadow-lg p-3 mb-5 bg-white rounded" key={key}>
              <h2>{event.title}</h2>
              <br />
              {event.poster ? (
                <a target="_blank" href={event.url}>
                  <img
                    className="d-block w-100"
                    width={600}
                    height={600}
                    src={event.poster}
                    style={{ margin: "auto" }}
                  />
                </a>
              ) : (
                "No Poster Available"
              )}
              <h4 style={{ whiteSpace: "pre-line" }}>
                <b>Details:</b>
                <br />
                {event.description}
              </h4>
              <br />
              <h4>
                {" "}
                Register Here:{" "}
                <a href={event.url} target="_blank">
                  {event.url}
                </a>
              </h4>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default StaticEvents;
