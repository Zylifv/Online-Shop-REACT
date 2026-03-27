import { ProductsArray } from "./ProductsArray";

const ProductDescription = ({
  cdesc,
  cdesc2,
  cprod,
  className,
  style,
}: {
  cdesc: any;
  cdesc2: any;
  cprod: any;
  className: any;
  style: any;
}) => {
  return (
    <>
      {cdesc}
      <div className={className} style={style}>
        {cprod}
      </div>
      {cdesc2}
    </>
  );
};

export default ProductDescription;

/*
const productsList = ProductsArray.map((prod) => (
    <div className="description">
        {prod.description}
    <div className="item-styled" style={{ color: "var(--laurel)" }}>
          {prod.product}
        </div>
        {prod.description2}
      </div>
  ))
  */
