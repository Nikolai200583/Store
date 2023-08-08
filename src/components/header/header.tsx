import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  
}
export const Header: React.FC<HeaderProps> = ({title}) => {
  
  return (
    <div className="top center">
        <header className="header">
            <Link to='/' className="header__logo"><img className="logo_img" src="img/logo.svg" alt="logo"/></Link>  
            <nav className="navigation">
                <Link to='/' className="navigation__link">Каталог</Link>
                <Link to='/cart' className="navigation__link">Корзина</Link>
            </nav>        
        </header>
        <section>
            <h1 className="header__title">{title}</h1>
        </section>
    </div>
  );
};
