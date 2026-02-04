import styles from "./Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <h3>The Jewel Shop</h3>
          <p>
            Timeless jewellery crafted to celebrate love, elegance, and life’s
            most precious moments.
          </p>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <h4>Explore</h4>
          <Link to="/products">Products</Link>
          <Link to="/customizations">Customizations</Link>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>hello@thejewelshop.com</p>
          <p>Mumbai, India</p>
        </div>

        {/* Social */}
        <div className={styles.social}>
          <h4>Follow</h4>

          <div className={styles.icons}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} The Jewel Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
