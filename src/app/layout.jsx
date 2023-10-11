
import "./globals.scss";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Nav from './nav';
import Link from "next/link";


export default function RootLayout({ children }) {

  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <header>
          <Nav />
        </header>
        <main>{children}</main>

        <footer>
          <ul className="footer-items">
            <li>
              <i><a href="#"><BsInstagram /></a></i>
              <i><a href="#"><BsFacebook /></a></i>
            </li>
            <li><a href="#">location</a></li>
            <li><Link href="/menu">check menu</Link></li>
            <li><p>@Manuel Zamalloa</p></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
