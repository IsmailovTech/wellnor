import axios from 'axios'
import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik } from 'formik'
import 'react-phone-number-input/style.css'
import { toast, Toaster } from 'react-hot-toast'

let token = '5463520222:AAFQgcQ7hyUTAYV3ad0YaGTQ_lGIbRZyyxg'
let chatId = '636476536'

const env = process.env.NEXT_PUBLIC_TOKEN

const initialValues = {
  name: '',
  number: '',
}

const BuyForm = ({ closeModal }) => {
  const [loading, setLoading] = useState(false)

  const onSubmit = (values, { resetForm }) => {
    let fullText = `\u{2705} Name: ${values.name}%0A\u{2705} Phone Number: \u{FF0B}998${values.number}`
    setLoading(true)

    // --- Sent Telegram Bot
    axios.post(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText},`,
    )

    // --- Post Consultation
    axios
      .post(`${env}consultations/create`, {
        name: values.name,
        phone: `+998${values.number}`,
      })
      .then(() => {
        toast.success('Muvaffaqiyatli yuborildi!')
      })
      .catch(() => {
        toast.success("Jo'natish muvafaqiyatsiz yakunlandi!")
      })
      .finally(() => {
        setLoading(false)
      })

    values.name = ''
    resetForm({ values: '' })
  }

  const phoneRegExp = /^[0-9]{9}$/
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Foydalanuvchi nomi talab qilinadi, kamida 3 ta belgi')
      .min(3, 'Minimal 3 ta belgi')
      .max(20, 'Maksimal 20 ta belgi'),
    number: Yup.string("Faqat raqam bo'lishi kerak")
      .matches(phoneRegExp, {
        message: 'Telefon raqami yaroqsiz.',
        excludeEmptyString: true,
      })
      .required('Telefon raqami kiritish majburiy'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <div className="w-full h-264 sm:h-312 rounded-xl p-4 sm:p-7 sm:mt-0  bg-white">
      <form
        onSubmit={(e) => {
          formik.handleSubmit(e)
          formik.values = initialValues
        }}
        className=" flex flex-col"
        autoComplete="off"
      >
        <label className="text-base relative flex flex-col">
          Ism sharifingiz:
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ismingizni yozing"
            className={
              formik.touched.name && formik.errors.name
                ? ' h-[48px] sm:h-[58px] text-base rounded-lg p-2 sm:p-4 outline-none border border-red-600 mb-3 sm:mb-6'
                : '   h-[48px] sm:h-[58px] text-base rounded-lg p-2 sm:p-4 outline-none border border-gray-input_radius mb-3 sm:mb-6'
            }
            minLength="3"
            maxLength="25"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
              {formik.errors.name}
            </span>
          ) : null}
        </label>
        <label className="relative flex flex-col">
          Telefon raqamingiz:
          <div
            className={
              formik.touched.number && formik.errors.number
                ? ' flex items-center pl-4  h-[48px] sm:h-[58px] text-base rounded-lg p-1 outline-none border  border-red-600 mb-4 sm:mb-6'
                : ' flex items-center pl-4  h-[48px] sm:h-[58px] text-base rounded-lg p-1 outline-none border  border-gray-input_radius mb-4 sm:mb-6'
            }
          >
            <span className="text-base text-black ml-1">+998</span>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="901234567"
              className=" outline-none w-full sm:ml-4 h-full p-2 "
              {...formik.getFieldProps('number')}
            />
            {formik.touched.number && formik.errors.number ? (
              <span className="text-red-600 text-xs absolute bottom-0 sm:bottom-2  left-2">
                {formik.errors.number}
              </span>
            ) : null}
          </div>
        </label>
        <button
          className="w-full h-[48px] bg-[#ff005c] rounded-xl text-white  "
          type="submit"
        >
          {loading ? <p>Loading ...</p> : 'Yuborish'}
        </button>
      </form>
    </div>
  )
}

export default BuyForm
