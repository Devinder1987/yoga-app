import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YoutubeTile from './YoutubeTile';
import SuccessStoryTile from './SuccessStoryTile';
import Program from './Program';
import About from './About';
import style from './base.module.css';

export default function Main() {
  return (
    <main className={style.main}>
      <div className={style.paddingBottom}>
        <YoutubeTile src="https://www.youtube.com/embed/c4ZmjtI7l3E" title="" />
        <h2 className={style.brightText}>
          <i>Fitness is a journey not a goal</i>
        </h2>
        <p className={style.regularText}>
          Fitness is a never ending journey. Enjoy your fitness journey. The
          real meaning of fitness is staying a peaceful soul in a strong body.
          We offers multiple programs for peace of mind and strong & flexible
          body.
        </p>
      </div>
      <Program />
      <About />
      <div>
        <SuccessStoryTile
          src="before"
          name="Devinder Shuthwal"
          age="35"
          problems="heavy weight, lower back pain, migrain"
          text="I am a software engineer. and my job demands a long sitting hours. I
        am foodie too. This cause heavy weight, lower back pain, migrain
        problems. Personal classes with Rohit helped me to reduce 8 kg in 3
        months in healthy way. Now my goal is to push my limits and achive new
        physical limits."
        />
      </div>
      <div className={style.contactDetailBG}>
        <div className={style.contactDetailContainer}>
          <h3>Contact Detail</h3>
          <div className={style.contactDetail}>
            <div className={style.contactDetailImage}>
              <img src="logo.webp" height={120} />
            </div>
            <div lassName={style.contactDetailNumber}>
              <p>Rohit Salaniya</p>
              <p>
                <a href="tel:9971293694">9971293694</a>{' '}
                <a
                  target="_blank"
                  title="WhatsApp"
                  href="whatsapp.com/send?phone=+9971293694&amp;text=Hi, I would like to get more information about personal classes"
                >
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp"></FontAwesomeIcon>
                </a>
              </p>
              <p>
                <a href="tel:9711208393">9711208393 </a>
              </p>
            </div>
          </div>

          <p>Personal & Group classes avaialable in</p>
          <p>Gurugram</p>
          <div>
            <p>
              <br />
              <a
                target="_blank"
                title="youtube"
                href="https://www.youtube.com/channel/UCRzHmwCABujR8p2hkJK6VMQ"
              >
                <FontAwesomeIcon icon="fa-brands fa-youtube"> </FontAwesomeIcon>
              </a>
              <a
                target="_blank"
                title="instagram"
                href="https://www.youtube.com/channel/UCRzHmwCABujR8p2hkJK6VMQ"
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram">
                  {' '}
                </FontAwesomeIcon>
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
