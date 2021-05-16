import { Search, ShoppingCart } from "@material-ui/icons";
import { Input } from '@material-ui/core';
import Link from "next/link"

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container-list">
        <ul className="list">
          <Link href="/">
            <li>Ofertas</li>
          </Link>
          <Link href="./mujer.html">
            <li>Mujer</li>
          </Link>
          <Link href="./hombre.html">
            <li>Hombre</li>
          </Link>
          <Link href="./niños.html">
            <li>Niños</li>
          </Link>
          <Link href="./unisex.html">
            <li>Unisex</li>
          </Link>
        </ul>
      </div>
      <div className="right-nav">
        {/* <input type="text" /> */}
          <Input type="search" />
          <Search style={{ marginRight: 40 }}/>
        <Link href="./carritoDeCompras.html">
          <ShoppingCart style={{ marginRight: 20, fontSize: 30 }} />
        </Link>
      </div>
    </section>
  );
};

export default Navbar