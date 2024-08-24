import React, { useState, useMemo } from 'react';

const ShoppingCart = ({ products }) => {
  const [discount, setDiscount] = useState(0);

  const totalPrice = useMemo(() => {
    return products.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }, [products]);

  const discountedPrice =
    totalPrice - (totalPrice * discount) / 100;

  return (
    <div>
      <h2>Total: ${discountedPrice.toFixed(2)}</h2>
      <input
        type="number"
        value={discount}
        onChange={(e) =>
          setDiscount(Number(e.target.value))
        }
        placeholder="Discount %"
      />
    </div>
  );
};

export default ShoppingCart;
