import style from './base.module.css';

function YoutubeTile({ title, src }) {
  return (
    <div className={style.youtubeTile}>
      <iframe
        width="100%"
        height="240"
        src={src}
        title={title}
        frameBorder="5"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{title}</p>
    </div>
  );
}

export default YoutubeTile;
