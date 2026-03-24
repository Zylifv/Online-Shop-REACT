import "./styles.css";
import { useState, useEffect } from "react";
import { products } from "./products";

let initialValues = products;
let basket: any = [];
let orders: any = [];

export default function List() {
  const [itemTotal, setItemTotal] = useState(0);
  const [products, setProducts] = useState(initialValues);
  const [currItem, setCurrItem] = useState({
    product: "",
    price: "",
    size: "",
    code: "",
  });
  const [currBasket, updateBasket] = useState([] as any[]);
  const [selectedSize, setSelectedSize] = useState("");
  const [vis, setVis] = useState(false);
  const [ordersVis, setOrdersVis] = useState(false);
  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(() => {
    console.log("Current size: ", selectedSize);
  }, [selectedSize]);

  //updates all relevant info when the user clicks "add to basket" button and prevents user from adding items without choosing a size
  const handleClick = () => {
    if (selectedSize !== "") {
      setItemTotal(itemTotal + 1);
      //add items to basket to view
      updateBasket((currBasket) => [...currBasket, currItem]);
      basket.push(currItem);
    } else {
      alert("Please select a size.");
    }
    setSelectedSize("");
  };

  //generates a random order number
  const orderNumGenerator = () => {
    return Math.floor(Math.random() * (999999 - 11111) + 11111);
  };

  //creates a paragraph element that gets put into the basket Div so the user can see whats in their basket
  const Divs = () => {
    const basketDivs = currBasket.map((item, i) => (
      <p key={i}>
        {item.product}: Size: {item.size} - Price: £{item.price}
        <button className="discard-btn" id={`${item.code}-btn${i}`}>
          x
        </button>
      </p>
    ));
    return <div>{basketDivs}</div>;
  };

  //creates a paragraph element that gets put into the orders Div so the user can see what orders are outstanding
  const Orders = () => {
    const currentOrders = orders.map((ord: any, i: number) => (
      <p key={i} className="customer-orders">
        {i + 1}: #{ord}
      </p>
    ));
    return <div>{currentOrders}</div>;
  };

  //displays each item the use currently has in their basket
  const displayBasket = () => {
    if (vis) {
      if (basket.length <= 0) {
        return (
          <p className="customer-orders">
            You do not currently have any item(s) in your basket.
          </p>
        );
      } else {
        return <Divs />;
      }
    }
  };

  //WIP - will update orders
  const displayOrders = () => {
    if (ordersVis) {
      if (orders.length <= 0) {
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

  //allows user to complete an order and resets the page accordingly
  const completeOrder = () => {
    let currOrderNum = orderNumGenerator();
    if (basketTotal <= 0) {
      alert(
        "You must have at least one item in your basket to place an order."
      );
      return;
    } else {
      alert(`Order accepted! Your order number: #${currOrderNum}`);
      orders.push(currOrderNum);
      basket.length = 0;
      setBasketTotal(0);
      setItemTotal(0);
      updateBasket([]);
      return;
    }
  };

  //shows the user how much their order currently totals up to
  const updateBasketTotal = (val: number) => {
    setBasketTotal(Number((basketTotal + val).toFixed(2)));
  };

  //reduces the available quantity of a specific product
  const reduceQuantity = (productCode: any) => {
    if (selectedSize !== "") {
      setProducts(
        products.map((product) => {
          if (product.code === productCode && product.quantity > 0) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        })
      );
    }
  };

  //produces a list of products available to buy and their respective info such as price, quantity, sizes etc
  const productsList = products.map((prod) => (
    <div className="display-box" id={(prod as any).code} key={prod.code}>
      <img src={prod.url} alt={prod.product} />
      <p className="display-box-text">
        Price: £{prod.price} Quantity: {prod.quantity}
      </p>
      <div className="sizes-selection-box">
        <p className="sizes-text">Sizes:</p>

        <button
          className="size-selection"
          id={prod.sizes[0]}
          value={prod.sizes[0]}
          onClick={() => {
            setSelectedSize(`${prod.sizes[0]}`);
            setCurrItem({
              ...currItem,
              product: `${prod.product}`,
              price: `${prod.price}`,
              size: prod.sizes[0],
              code: prod.code,
            });
          }}
        >
          {prod.sizes[0]}
        </button>

        <button
          className="size-selection"
          id={prod.sizes[1]}
          value={prod.sizes[1]}
          onClick={() => {
            setSelectedSize(prod.sizes[1]);
            setCurrItem({
              ...currItem,
              product: `${prod.product}`,
              price: `${prod.price}`,
              size: prod.sizes[1],
              code: prod.code,
            });
          }}
        >
          {prod.sizes[1]}
        </button>

        <button
          className="size-selection"
          id={prod.sizes[2]}
          value={prod.sizes[2]}
          onClick={() => {
            setSelectedSize(prod.sizes[2]);
            setCurrItem({
              ...currItem,
              product: `${prod.product}`,
              price: `${prod.price}`,
              size: prod.sizes[2],
              code: prod.code,
            });
          }}
        >
          {prod.sizes[2]}
        </button>
      </div>
      <button
        className="add-to-basket-btn"
        value={selectedSize}
        onClick={() => {
          handleClick();
          reduceQuantity(prod.code);
          updateBasketTotal(prod.price);
        }}
        disabled={prod.quantity == 0}
      >
        Add to basket
      </button>
      <div className="description">
        {prod.description}
        <div className="item-styled" style={{ color: "var(--laurel)" }}>
          {prod.product}
        </div>
        {prod.description2}
      </div>
    </div>
  ));

  return (
    <>
      <h1>Pasco Bona</h1>
      <div id="sig">- By R McGregor (github.com/Zylifv)</div>
      <nav>
        <div className="nav-bar">
          <a href="#" id="browse-btn">
            Browse products
          </a>
          <a
            href="#orders"
            onClick={() => {
              setOrdersVis(!ordersVis);
              displayOrders;
            }}
          >
            Your orders
          </a>
          <a href="#contact-us">Contact</a>
          <a
            href="#basket"
            id="basket"
            onClick={() => {
              setVis(!vis);
              displayBasket;
            }}
          >
            Basket
          </a>
          <p id="basket-total">{itemTotal}</p>
          <a id="checkout">
            <button id="checkout-btn" onClick={() => completeOrder()}>
              Checkout
            </button>
          </a>
        </div>
      </nav>
      <div id="wrap">
        <>
          {vis && (
            <div id="current-basket">
              <h3>Current Basket:</h3>
              <p id="basket-total-amount">Total: £{basketTotal}</p>
              <div id="current-basket-items">{displayBasket()}</div>
            </div>
          )}
          <div className="product-div">{productsList}</div>
        </>
        <>
          {ordersVis && (
            <div id="current-orders-dropdown">
              <h3>Current Orders:</h3>
              <div id="current-orders-list">{displayOrders()}</div>
            </div>
          )}
        </>
      </div>
      <section id="contact-us">
        <h2>Contact</h2>
        <div className="contact-info">
          <p id="our-number">
            Call us on:<b> +44 1234 098 765</b>
          </p>
          <p id="our-email">
            Email us at: <b> pasco_bona@email.com</b>
          </p>
        </div>
      </section>
    </>
  );
}
