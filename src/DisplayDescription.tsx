import { ProductsArray } from "./ProductsArray";
import ProductDescription from "./ProductDescription";

export default function DisplayDescription() {
  const productsDesc = ProductsArray.map((prod) => (
    <ProductDescription
      key={prod.code}
      cdesc={prod.description}
      className="item-styled"
      style={{ color: "var(--laurel)" }}
      cprod={prod.product}
      cdesc2={prod.description2}
    />
  ));
  return (
    <>
      <div className="description">{productsDesc}</div>
    </>
  );
}
