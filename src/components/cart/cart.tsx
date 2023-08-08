import { CartForm } from "../cartForm/cartForm";
import { CartContent } from "../cartContent/cartContent";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks";

export const CartContainer: React.FC = () => {
  const data = useAppSelector((state) => state.items.list);

  const [items, setItems] = useState(data);
  const [total, setTotal] = useState(
    items.reduce((prev, curr) => prev + curr.total, 0)
  );

  useEffect(() => {
    setTotal(items.reduce((prev, curr) => prev + curr.total, 0));
  }, [items]);

  const increase = (id: string) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          const newCount = item.count + 1 < 5 ? item.count + 1 : 5;
          return {
            ...item,
            count: newCount,
            total: newCount * item.price
          };
        }
        return item;
      });
    });
  };
  const decrease = (id: string) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          const newCount = item.count - 1 > 1 ? item.count - 1 : 1;
          return {
            ...item,
            count: newCount,
            total: newCount * item.price
          };
        }
        return item;
      });
    });
  };
  const changeValue = (id: string, value: number) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: value,
            total: value * item.price
          };
        }
        return item;
      });
    });
  };
  return (
    <div className="cartContainer center">
      <CartContent
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
      <CartForm total={total} />
    </div>
  );
};
