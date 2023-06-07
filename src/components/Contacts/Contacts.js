/* eslint-disable jsx-a11y/iframe-has-title */
export const Contacts = () => {
  return (
    <main className="contacts">
      <div className="contacts__content">
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Contact me:</h2>
              Location :<br/>
            <a href="https://goo.gl/maps/PaCXHD1uxuYX2hXU9" className="link" target="_blank" rel="noreferrer">
              Recklinghausen, Germany
            </a>
          </li>
          <li className="content-list__item">
            Mobile :
            <p><a href="tel:+4916096294939" className="link">+49 (160) 962-949-39</a></p>
         </li>
          <li className="content-list__item">
            Telegram / WhatsApp :
            <p><a href="tel:+380505584254" className="link">+38 (050) 558-42-54</a></p>
          </li>
          <li className="content-list__item">
            Email :
            <p><a href="mailto:maystrenko.p@gmail.com" className="link">maystrenko.p@gmail.com</a></p>
          </li>
        </ul>
      </div>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66662.11461406482!2d7.185071656949898!3d51.61687706398954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e36a5818ae93%3A0xeef88f4e39d28988!2sHohenzollernstra%C3%9Fe%2C%2045659%20Recklinghausen!5e0!3m2!1sru!2sde!4v1683117501232!5m2!1sru!2sde"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </main>
  )
}