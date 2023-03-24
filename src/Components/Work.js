import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Kafolatlangan",
      text: "Bizning mahsulotlar 100% tabiiy hamda kafolatlangan",
    },
    {
      image: ChooseMeals,
      title: "Bepul konsultatsiya",
      text: "Malakali shifokorlarimizdan bepul konsultatsiya ",
    },
    {
      image: DeliveryMeals,
      title: "Yetqazib berish xizmati",
      text: "Bepul hamda tezkor yetqazib berish hizmatimiz mavjud",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading" data-aos="fade-down" >Kampaniyamiz haqida</p>
        <h1 className="primary-heading text-center" data-aos="fade-down">Wellnor salomatlik markazi</h1>
        <p className="primary-text" data-aos="fade-left">
         Wellnor - bu hayotni o'zgartirishga, odamlarga yuqori sifatli mahsulotlar va biznes imkoniyatlari orqali yangi darajalar va farovonlikka erishishga qaratilgan milliy to'g'ridan-to'g'ri savdo kompaniyasi. Wellnor kompaniyasining asoschisi va g‘oyaviy ilhomlantiruvchisi yosh tadbirkor Eldor Qurbonovdir. Kompaniya jahon olimlari va BossLondon – England, BonHair, Ulusoy Cosmetics va boshqa elita xalqaro kompaniyalar bilan hamkorlik qiladi.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title} data-aos="fade-down">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
