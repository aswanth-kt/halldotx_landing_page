import emailjs from "emailjs-com";


export const sendEmail = (form) => {

  return emailjs.sendForm(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    form,
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  )
}