import { useState } from "react";
import { ProductsArray } from "./ProductsArray";
import ProductDescription from "./ProductDescription";
import { OrderNumGenerator } from "./OrderNumberGenerator";

export const DisplayDivsComponent = () => {
  return (
    <>
      <DisplayDivs />
    </>
  );
};

export const DisplayDivs = () => {
  const [productItems, setProductItems] = useState({
    basketTotal: 0,
    basketPriceTotal: 0,
  });
  const [products, setProducts] = useState(ProductsArray);
  const [selectedSize, setSelectedSize] = useState("");
  const [vis, setVis] = useState(false);
  const [ordersVis, setOrdersVis] = useState(false);
  const [currBasket, updateBasket] = useState([] as any[]);
  const [currentOrders, updateCurrentOrders] = useState([] as any[]);
  const [currItem, setCurrItem] = useState({
    product: "",
    price: "",
    size: "",
    code: 0,
    basket: 0,
    quantity: 0,
  });

  console.log(products);
  console.log(currBasket);

  const handleBasketTotal = () => {
    if (currItem.quantity == 0) {
      alert("Sorry, we have no more stock left of this product..");
    } else if (selectedSize !== "" && currItem.quantity > 0) {
      setProductItems({
        ...productItems,
        basketTotal: productItems.basketTotal + 1,
        basketPriceTotal:
          Number(productItems.basketPriceTotal) + Number(currItem.price),
      });
      const newQuant = products.map((prod) => {
        if (prod.code == currItem.code && prod.quantity > 0) {
          return { ...prod, quantity: prod.quantity - 1 };
        } else {
          return prod;
        }
      });
      updateBasket((currBasket) => [...currBasket, currItem]);
      setProducts(newQuant);
      updateProdArray;
      setSelectedSize("");
    } else {
      alert("Please select a size.");
    }
  };

  //allows user to complete an order and resets the page accordingly
  const CompleteOrder = () => {
    let currOrderNum = OrderNumGenerator();
    if (productItems.basketTotal <= 0) {
      alert(
        "You must have at least one item in your basket to place an order."
      );
      return;
    } else {
      alert(`Order accepted! Your order number: #${currOrderNum}`);
      updateCurrentOrders((currentOrders) => [...currentOrders, currOrderNum]);
      setProductItems({
        ...productItems,
        basketTotal: 0,
        basketPriceTotal: 0,
      });
      updateBasket([]);
      return;
    }
  };

  const Header = () => {
    return (
      <>
        <h1>Pasco Bona</h1>
        <div id="sig">- By R McGregor (github.com/Zylifv)</div>

        {vis && (
          <div id="current-basket">
            <h3>Current Basket:</h3>
            <p id="basket-total-amount">
              Total: £{productItems.basketPriceTotal.toFixed(2)}
            </p>
            <div id="current-basket-items">{DisplayBasket()}</div>
          </div>
        )}
        {ordersVis && (
          <div id="current-orders-dropdown">
            <h3>Current Orders:</h3>
            <div id="current-orders-list">{DisplayOrders()}</div>
          </div>
        )}
      </>
    );
  };

  const NavBar = () => {
    return (
      <nav>
        <div className="nav-bar">
          <a href="#" id="browse-btn">
            Browse products
          </a>
          <a
            href="#orders"
            onClick={() => {
              setOrdersVis(!ordersVis);
              setVis(false);
            }}
          >
            Your orders
          </a>
          <a href="#contact-us">Contact</a>
          <a
            id="basket"
            onClick={() => {
              setVis(!vis);
              setOrdersVis(false);
              DisplayBasket;
            }}
          >
            Basket
          </a>
          <p id="basket-total">{productItems.basketTotal}</p>
          <a id="checkout">
            <button
              id="checkout-btn"
              onClick={() => {
                CompleteOrder();
              }}
            >
              Checkout
            </button>
          </a>
        </div>
      </nav>
    );
  };

  //creates a paragraph element that gets put into the basket Div so the user can see whats in their basket
  const Divs = () => {
    const basketDivs = [...currBasket].map((item, i) => (
      <p key={i}>
        {item.product}: Size: {item.size} - Price: £{item.price}
        <button className="discard-btn" id={`${item.code}-btn${i}`}>
          x
        </button>
      </p>
    ));
    return <div>{basketDivs}</div>;
  };

  const DisplayBasket = () => {
    if (vis) {
      if (currBasket.length <= 0) {
        return (
          <p className="customer-orders">
            You do not currently have any item(s) in your basket.
          </p>
        );
      } else {
        return <Divs />;
      }
    } else {
      return null;
    }
  };

  //creates a paragraph element that gets put into the orders Div so the user can see what orders are outstanding
  const Orders = () => {
    const currOrders = currentOrders.map((ord: any, i: number) => (
      <p key={i} className="customer-orders">
        {i + 1}: #{ord}
      </p>
    ));
    return <div>{currOrders}</div>;
  };

  //WIP - will update orders
  const DisplayOrders = () => {
    if (ordersVis) {
      if (currentOrders.length <= 0) {
        return (
          <p className="customer-orders">
            You do not currently have any orders.
          </p>
        );
      } else {
        return <Orders />;
      }
    }
  };

  const AddBasketButton = ({ onAddToCart }: { onAddToCart: any }) => {
    return (
      <button
        className="add-to-basket-btn"
        value=""
        disabled={false}
        onClick={onAddToCart}
      >
        Add to Basket
      </button>
    );
  };

  const updateProdArray = (code: number) => {
    setProducts(
      products.map((product) => {
        if (product.code == code) {
          return { ...product, basket: product.basket + 1 };
        } else {
          return product;
        }
      })
    );
  };

  const productsList = products.map((prod) => (
    <div className="product-div" key={prod.code}>
      <div className="display-box" id="code">
        <img src={prod.url} />
        <p className="display-box-text">
          Price: £${prod.price} Quantity: {prod.quantity}
        </p>
        <div className="sizes-selection-box">
          <p className="sizes-text">
            Sizes:
            <button
              className="size-selection"
              onClick={() => {
                setSelectedSize(prod.sizes[0]),
                  setCurrItem({
                    ...currItem,
                    product: `${prod.product}`,
                    price: `${prod.price}`,
                    size: prod.sizes[2],
                    code: prod.code,
                    quantity: prod.quantity,
                  });
              }}
            >
              {prod.sizes[0]}
            </button>
            <button
              className="size-selection"
              onClick={() => {
                setSelectedSize(prod.sizes[1]),
                  setCurrItem({
                    ...currItem,
                    product: `${prod.product}`,
                    price: `${prod.price}`,
                    size: prod.sizes[2],
                    code: prod.code,
                    quantity: prod.quantity,
                  });
              }}
            >
              {prod.sizes[1]}
            </button>
            <button
              className="size-selection"
              onClick={() => {
                setSelectedSize(prod.sizes[2]),
                  setCurrItem({
                    ...currItem,
                    product: `${prod.product}`,
                    price: `${prod.price}`,
                    size: prod.sizes[2],
                    code: prod.code,
                    quantity: prod.quantity,
                  });
              }}
            >
              {prod.sizes[2]}
            </button>
          </p>
        </div>
        <AddBasketButton onAddToCart={handleBasketTotal} />
        <div className="description">
          <ProductDescription
            key={prod.code}
            cdesc={prod.description}
            className="item-styled"
            style={{ color: "var(--laurel)" }}
            cprod={prod.product}
            cdesc2={prod.description2}
          />
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <Header />
      <div id="wrap">
        <NavBar />
        <div>{productsList}</div>
      </div>
    </>
  );
};
