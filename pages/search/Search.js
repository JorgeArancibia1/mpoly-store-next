import { ClassSharp } from "@material-ui/icons";
import { size } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import { searchProducts } from "../../api/product";
import DetalleTipo from "../../components/DetalleTipo/DetalleTipo";
import Navbar from "../../components/Navbar/Navbar";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";

const search = () => {
  const [searchStr, setSearchStr] = useState("");
  const [load, setLoad] = useState(false);
  const [products, setProducts] = useState(null);
  const {query} = useRouter();
 useEffect(() => {
   document.getElementById("search-product").focus();
 }, [])

 useEffect(() => {
   (async ()=>{
     if (size(query.query) >0){
       const response = await searchProducts(query.query);
       if(size(response) >0) setProducts(response);
       else setProducts([]);
       console.log(response);
     }else{
       setProducts([])
     }
   })()
 }, [query]);
  console.log (products)
  return (
    <BasicLayout>
      <Navbar searchStr={searchStr} setSearchStr={setSearchStr} load={load} setLoad={setLoad} />
      {!products && <Loader active>Buscando Productos</Loader>}
      {products && size(products) === 0 &&(
        <div>
          <h3>No se han encontrado productos</h3>
        </div>
      )}
      {size(products) > 0 &&<DetalleTipo productos={products} titulo={query.query} />}
    </BasicLayout>
  );
};

export default search;
