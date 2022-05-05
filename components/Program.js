import style from './base.module.css';

function Program() {
  return (
    <div className={style.programBGimage}>
      <div className={style.programContainer}>
        <h2>Fitness Programs</h2>
        <ul>
          <li>Yoga Classes</li>
          <li>Power Yoga</li>
          <li>Weight Loss</li>
          <li>Physiotherapy classes</li>
          <li>General Fitness</li>
          <li>Functional Training</li>
        </ul>
      </div>
    </div>
  );
}

export default Program;
