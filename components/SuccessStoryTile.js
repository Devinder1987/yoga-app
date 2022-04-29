import style from './base.module.css';

function SuccessStoryTile({ src, name, age, problems, text }) {
  return (
    <div className={style.successStoryTile}>
      <picture>
        <source media="(min-width:320px)" srcSet={`/${src}_mobile.webp`} />
        <source media="(min-width:786px)" srcSet={`/${src}_desktop.webp`} />
        <img src={`/${src}.webp`} alt={`${name} photo`} />
      </picture>
      <p>
        <b>Name: </b> {name}
      </p>
      <p>
        <b>Age: </b> {age} Years
      </p>
      <p>
        <b>Problems: </b> {problems}
      </p>
      <br />
      <p>{text}</p>
    </div>
  );
}

export default SuccessStoryTile;
