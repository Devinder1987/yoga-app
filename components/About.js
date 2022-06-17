import style from './base.module.css';

function About() {
  return (
    <div className={style.about}>
      <img src={`/TrainerPhoto.webp`} alt={` Rohit Salaniya`} />
      <h2>ROHIT SALANIYA</h2>
      <h4>Fitness Trainer</h4>
      <div className={style.aboutText}>
        <p>
          Namaste! I am glad you are here and consider me as a part of your
          fitness journey. I am a{' '}
          <b>
            Level- II Certified Yoga Instructor from YCB ( Ministry of Ayush
            GOI)
          </b>
          {'. '}
          I have over 5 years of experience as a fitness trainer.
          <br />I played a vital role in digital promotion of yoga during COVID
          pandemic and got an <b>Appreciation Certificate </b> from YCB on
          International yoga day 21<sup>st</sup> June, 2021.
        </p>
        <p>I specialise in personal yoga training and group class.</p>
        <br />
        <b>
          <i>My work experince includes-</i>
        </b>
        <ul>
          <li>
            Took Yoga classes at Central Jail Tihar, New Delhi on the behalf of
            MDNIY New Delhi.
          </li>
          <li>
            2 Years Experience at <i>Perfect Fitness GYM </i> as a Fitness
            Instructor 2017 - 2019.
          </li>
          <li>
            Since 2019 I am working as a Freelance YOGA Instructor for Personal
            & Group classes at Home/Parks.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
