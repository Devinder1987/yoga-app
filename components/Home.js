import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import YoutubeTile from './YoutubeTile';
import SuccessStoryTile from './SuccessStoryTile';
import Program from './Program';
import About from './About';
import style from './base.module.css';

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.paddingBottom}>
        <YoutubeTile src="https://www.youtube.com/embed/c4ZmjtI7l3E" title="" />
        <h2 className={style.brightText}>
          <i>Mould your body and mind</i>
        </h2>
        <p className={style.regularText}>
          Proper guided workout is key to have a healthy body and calm mind.
          Just one hour of guided workout will charge you for the remaining 23
          hours. We offer multiple fitness programs which will make you more
          physically and mentally fit.
        </p>
      </div>
      <Program />
      <Link href="/program">
        <a>Know More about Program</a>
      </Link>
      <About />
      <Link href="/about">
        <a>Know More about Trainer</a>
      </Link>
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
              <img src="logo.webp" />
            </div>
            <div className={style.contactDetailNumber}>
              <p>Rohit Salaniya</p>
              <p>
                <a href="tel:9971293694">9971293694</a>{' '}
                <a
                  target="_blank"
                  title="WhatsApp"
                  href="https://api.whatsapp.com/send?phone=+919971293694&amp;text=Hi, I would like to get more information about personal classes"
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
                href="https://www.instagram.com/rohitsalaniya"
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
