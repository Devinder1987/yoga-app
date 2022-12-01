/* Header component
 *  Content - Logo, Name Contact details
 */
import Link from 'next/link';
import style from './base.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/">
        <img src="logo.webp" height={64} />
      </Link>
      <h2>RS Fitness</h2>
      <h2></h2>
    </header>
  );
}
