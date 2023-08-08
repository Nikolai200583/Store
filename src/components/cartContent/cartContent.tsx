import { useAppSelector } from "../../hooks";
import { CartItem } from "../cartItem/cartItem";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { removeCart } from "../../store/slice";

interface ItemsProps {
  increase: (id: string) => void;
  decrease: (id: string) => void;
  changeValue: (id: string, value: number) => void;
}
export const CartContent: React.FC<ItemsProps> = (props) => {
  const items = useAppSelector((state) => state.items.list);

  const { increase, decrease, changeValue } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigator = () => {
    navigate("/");
  };
  return (
    <div className="cart__content">
      <div className="cart__name_box">
        <p>Товар</p>
        <p>К-во</p>
      </div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
        />
      ))}
      <div className="cart__form_button">
        <button
          onClick={() => dispatch(removeCart())}
          className="cart__button_clear"
        >
          Очистить корзину
        </button>
        <button onClick={() => navigator()} className="cart__button_continue">
          Продолжить покупки
        </button>
      </div>
    </div>
  );
};
