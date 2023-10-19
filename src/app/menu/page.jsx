import Image from "next/image";
import menuImage from '../images/menu-image-sm.jpg';
import Effects from './effects';

export const metadata = {
  title: 'Menu',
}

export default function Menu() {
  return (
    <div className="menu-container">
      <Effects />
      <div className="menu-header hero-image">
        <Image src={menuImage} alt="menu main image" />
        <h1 >Our Menu</h1>
      </div>
      <div className="main-menu section">
        <div className="menu-box">
          <h1>Main Menu</h1>
          <div className="menu-item">
            <h2 className="title">Hamburger</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, velit! Facilis odio delectus, architecto, obcaecati ut labore nostrum magni incidunt minima modi dolorum, alias libero rem perferendis a distinctio harum.</p>
          </div>
          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>

          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>
          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>
          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>
          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>
          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>
          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>
        </div>
      </div>
      <div className="breakfast-menu section">
        <div className="menu-box">
          <h1>Breakfast</h1>
          <div className="menu-item">
            <h2 className="title">Hamburger</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, velit! Facilis odio delectus, architecto, obcaecati ut labore nostrum magni incidunt minima modi dolorum, alias libero rem perferendis a distinctio harum.</p>
          </div>
          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>

          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>
          <div className="menu-item">
            <h2 className="title">[Food Title]</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti adipisci doloremque cum excepturi dignissimos dicta aperiam deserunt. Aliquid voluptates error sint libero magnam aperiam harum ipsum quibusdam dolor neque?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
