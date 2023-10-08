import Image from 'next/image'
import banner from './images/banner.jpg';

export default function Home() {
  return (
    <div className="home-section">
      <div className="banner">
        <Image
          src={banner}
          alt="Picture of banner"
        />
      </div>
      <section className="about-us"></section>
      <section className="menu"></section>
    </div>
  );
}
