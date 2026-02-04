import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      
      {/* Left: Video */}
      <div className={styles.media}>
        <video
          src="/contact_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Right: Content */}
      <div className={styles.content}>
        <h2>Contact Us</h2>

        <div className={styles.wrapper}>
          {/* Form */}
          <form className={styles.form}>
            <div className={styles.field}>
              <label>Full Name</label>
              <input type="text" />
            </div>

            <div className={styles.field}>
              <label>E-mail</label>
              <input type="email" />
            </div>

            <div className={styles.field}>
              <label>Message</label>
              <textarea rows="3" />
            </div>

            <button type="submit">
              Contact Us
            </button>
          </form>

          {/* Info */}
          <div className={styles.info}>
            <div>
              <h4>Contact</h4>
              <p>hello@thejewelshop.com</p>
            </div>

            <div>
              <h4>Address</h4>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
