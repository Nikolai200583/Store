import { Items } from "../../type/data";
import { useAppDispatch } from '../../hooks';
import { addItem } from '../../store/slice';

export const CatalogItems: React.FC<Items> = (props) => {
  const {id, url, alt, title, about, price, count, total} = props;
  const priceFormator = new Intl.NumberFormat();
  const dispatch = useAppDispatch();
  const handleAction = () => {    
      dispatch(addItem({ 
        id: id, 
        url: url,
        title: title,
        about: about,
        count: count,
        price: price,
        total:total
       }));     
    }
  
    return (
    <div className="item">
      <img className="item__img" src={url} alt={alt} onClick={handleAction}/>
      <h3 className="item__title">{title}</h3>
      <p className="item__about">{about}</p>
      <p className="item__price">{priceFormator.format(price)} руб.</p>
    </div>
  );
};
