import styles from "./Contact.module.css";

function Contact() {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contactDetail}>
        <div>
          <img src={require("../img/gmail.svg.png")} alt="gmail" />
          <div className={styles.contactText}>
            <div>Email</div>
            <div>zhangshangdong888855@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
