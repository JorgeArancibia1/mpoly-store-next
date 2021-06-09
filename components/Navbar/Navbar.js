import { Search, ShoppingCart } from "@material-ui/icons";
import { Input } from '@material-ui/core';
import Link from "next/link";

const Navbar = () => {

  return (
    <section className="navbar">
      <div className="container-list">
        <ul className="list">
          <Link href="/Tipo/Ofertas">
            <li className="pointer">Ofertas</li>
          </Link>
          <Link href="/Tipo/Mujer">
            <li className="pointer">Mujer</li>
          </Link>
          <Link href="/Tipo/Hombre">
            <li className="pointer">Hombre</li>
          </Link>
          <Link href="/Tipo/Niños">
            <li className="pointer">Niños</li>
          </Link>
          <Link href="/Tipo/Unisex">
            <li className="pointer">Unisex</li>
          </Link>
        </ul>
      </div>
      <div className="right-nav">
        {/* <input type="text" /> */}
          <Input type="search" />
          <Search style={{ marginRight: 40 }}/>
        <Link href="./CarritoCompra">
          <ShoppingCart style={{ marginRight: 20, fontSize: 30 }} />
        </Link>
      </div>
    </section>
  );
};

export default Navbar