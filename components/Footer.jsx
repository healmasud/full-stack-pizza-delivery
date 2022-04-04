import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, YOU DID IT!
            <br />
            YOU FOUND THE BEST PIZZA RESTAURANT IN TOWN. WELL BAKED SLICE OF
            PIZZA SINCE 1978!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Konepajakatu 75, A50
            <br /> Helsinki, 04000
            <br /> (358) 123 123
          </p>
          <p className={styles.text}>
            Koulukatu 9, A 90
            <br /> Tampere, 85022
            <br /> (358) 123 124
          </p>
          <p className={styles.text}>
            Rantakatu 52, C 104
            <br /> Turku, 85022
            <br /> (358) 123 125
          </p>
          <p className={styles.text}>
            Insinöörinkatu 92, B 50
            <br /> Oulu, 85022
            <br /> (358) 123 124
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
