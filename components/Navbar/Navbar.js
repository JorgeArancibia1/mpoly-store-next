import { Search, ShoppingCart } from "@material-ui/icons";
// import { Input } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { Input } from "semantic-ui-react";

const Navbar = () => {
  const router = useRouter();
  console.log(load)
  console.log(setLoad)
  const [searchStr, setSearchStr] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    console.log("out")
    console.log(load)
    if(load){
      console.log("in")
      router.push(`/search?query=${searchStr}`);
    }
    setLoad(true);
     
  }, [searchStr])
  console.log(searchStr);
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
        <Input id="search-product"
          type="search"
          value={router.query.query}
          onChange={(_, data) => setSearchStr(data.value)}
        />
        <Search style={{ marginRight: 40 }} />
        <Link href="./CarritoCompra">
          <ShoppingCart style={{ marginRight: 20, fontSize: 30 }} />
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
