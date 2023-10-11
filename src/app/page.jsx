import Image from 'next/image'
import banner from './images/banner.jpg';
import Animations from "./animations";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="home-section">
      <Animations />
      <div className="banner hero-image">
        <Image
          src={banner}
          alt="Picture of banner"
        />
        <h1>Restaurante</h1>
      </div>
      <section className="about-us section">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga impedit voluptatum vero? Accusamus voluptatibus, ipsa assumenda autem facere beatae sint dicta culpa dolorum provident? Rerum ullam in repellat labore?</p>
        <img src="" alt="" />
      </section>

      <section className="menu section">
        <h1>See our Menu</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro cumque, tenetur dolorum temporibus natus magnam commodi, odio doloremque dignissimos rem iusto, deleniti dicta distinctio facilis quasi culpa cupiditate corporis. Assumenda!</p>
        <Link href="/menu" className='button'>View Menu</Link>
      </section>
    </div>
  );
}
