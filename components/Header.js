/* Header component
 *  Content - Logo, Name Contact details
 */
import style from './base.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <img src="logo.webp" height={64} />
      <h2>RS Fitness</h2>
      <h2></h2>
    </header>
  );
}
