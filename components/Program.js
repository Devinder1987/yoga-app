import style from './base.module.css';

function Program() {
  return (
    <div className={style.programBGimage}>
      <div className={style.programContainer}>
        <h2>Fitness Programs</h2>
        <ul>
          <li>Personal Yoga Classes</li>
          <li>Group Yoga Classes</li>
          <li>Weight Loss Program</li>
          <li>Physiotherapy classes</li>
          <li>General Fitness</li>
          <li>Functional Training</li>
          <li>Activity Classes for Kids</li>
        </ul>
        <div className={style.bookNowCTAContainder}>
          <p>
            <b>First two classes absolutly free.</b>
          </p>
          <div className={style.bookNowCTA}>
            <img src="Offer.gif" alt="Free" />
            <a
              target="_blank"
              title="WhatsApp"
              href="https://api.whatsapp.com/send?phone=+919971293694&amp;text=Hi, I would like to get more information about personal classes"
            >
              Book Now
            </a>
            <img src="Offer.gif" alt="Free" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
