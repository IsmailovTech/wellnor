import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/resveratrol.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

const About = () => {
  let subtitle
  let subtitle2
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalIsOpen2, setIsOpen2] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function openModal2() {
    setIsOpen2(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }
  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    subtitle2.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }
  function closeModal2() {
    setIsOpen2(false)
  }
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Mahsulot haqida</p>
        <h1 className="primary-heading">AVTOZYATLARI</h1>
        <p className="primary-text">
          Baolife tarkibida baobab mevasi va boshqa o'simlik tarkibiy qismlari
          mavjud. Baobab mevalari salomatlikni yaxshilaydi. Inulin ichakdagi
          bakteriyalarning sog'lom muvozanatini saqlaydi. Konjak ishtahani
          bostiradi va sizni to'liq his qiladi Acerola va kızılcık ekstraktlari
          antioksidant sifatida ishlaydi.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={openModal}>
            To'liq ma'lumot
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button
              onClick={closeModal}
              className="absolute right-3 top-2 bg-gray-400 py-1 px-3 rounded-md text-white"
            >
              X
            </button>
            <div className="flex flex-col items-center w-[300px] sm:w-[500px] sm:h-[400px]">
              <h2 className="text-[32px] font-semibold">Batafsil</h2>
              <p className="text-[14px] max-w-[360px] ">
                <ul className="text-[14px] max-w-[360px] ">
                  Baolife tarkibida baobab mevasi va boshqa o'simlik tarkibiy
                  qismlari mavjud.
                  <ul className="list-disc">
                    <li>Baobab mevalari salomatlikni yaxshilaydi</li>
                    <li>
                      ichakdagi bakteriyalarning sog'lom muvozanatini saqlaydi{' '}
                    </li>
                    <li>
                      Konjak ishtahani bostiradi va sizni to'liq his qiladi
                    </li>
                    <li>
                      {' '}
                      Acerola va kızılcık ekstraktlari antioksidant sifatida
                      ishlaydi
                    </li>
                  </ul>
                </ul>
              </p>
              <h2 className="text-[32px] font-semibold">ILOVA</h2>
              <ul className="text-[14px] max-w-[360px] ">
                Baolife tarkibida baobab mevasi va boshqa o'simlik tarkibiy
                qismlari mavjud.
                <ul className="list-disc">
                  <li>Baobab mevalari salomatlikni yaxshilaydi</li>
                  <li>
                    ichakdagi bakteriyalarning sog'lom muvozanatini saqlaydi{' '}
                  </li>
                  <li>Konjak ishtahani bostiradi va sizni to'liq his qiladi</li>
                  <li>
                    {' '}
                    Acerola va kızılcık ekstraktlari antioksidant sifatida
                    ishlaydi
                  </li>
                </ul>
              </ul>
            </div>
          </Modal>
          <button className="watch-video-button" onClick={openModal2}>
            <BsFillPlayCircleFill /> Vediosini ko'rish
          </button>
          <Modal
            isOpen={modalIsOpen2}
            onAfterOpen={afterOpenModal2}
            onRequestClose={closeModal2}
            style={customStyles2}
            contentLabel="Example Modal"
          >
            <button
              onClick={closeModal2}
              className="absolute right-3 top-2 bg-gray-400 py-1 px-3 rounded-md text-white"
            >
              X
            </button>
            <div className="flex flex-col items-center w-[300px] sm:w-[600px] sm:h-[400px]">
              <h2 className="text-[32px] font-semibold">Batafsil</h2>
              <div className=" hidden sm:block">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/bc_SB5cM334"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className=" block sm:hidden" >
                <iframe
                  width="300"
                  height="200"
                  src="https://www.youtube.com/embed/bc_SB5cM334"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default About
