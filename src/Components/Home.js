import React from 'react'
import BannerBackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import Navbar from './Navbar'
import { FiArrowRight } from 'react-icons/fi'
import Resveratrol from '../Assets/resveratrol.webp'
import Modal from 'react-modal'
import BuyForm from './BuyForm'
import { toast, Toaster } from 'react-hot-toast'
import AOS from 'aos'
import { useEffect } from 'react'

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

Modal.setAppElement('#root')

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading" data-aos="fade-down">
            Choco Kalsiy yurak va suyak salomatligi uchun
          </h1>
          <p className="primary-text" data-aos="fade-right">
            * Har bir qutiga 30 ta paket Hajmi: 30 ml Hajmi: 250 g (25 ta
            porsiya)
          </p>
          <button className="secondary-button animate-pulse" onClick={openModal}>
            Bepul konsultatsiya <FiArrowRight />{' '}
          </button>
        </div>
        <div className="home-image-section">  ``
          <img data-aos="fade-down" src={Resveratrol} alt="" />
        </div>
      </div>

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
          <h2 className="text-[32px] font-semibold text-center">Bepul konsultatsiya va buyurtma berish</h2>
          <p className="text-[14px] max-w-[360px] text-center">
            Quyidagi ma'lumotlarni to'ldiring va mutaxasislarimizdan bepul
            konsultatsiyaga ega bo'ling:
          </p>
          <BuyForm closeModal={closeModal} />
        </div>
      </Modal>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default Home
