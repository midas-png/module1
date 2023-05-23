import { Assets } from 'assets';
import './styles.css';

export const ProductCard = ({ name, price, discountPrice, number }) => {
  const image = require(`assets/${number + 1}.png`);

  return (
    <div className='productcard'>
      <div className='productcard__image'>
        <img src={image} alt='' className='productcard__content' />
        <div className='productcard__menu'>
          <Assets.SVGReverse />
          <Assets.SVGFavorite />
          <Assets.SVGCardCart />
        </div>
      </div>
      <div className='productcard__info'>
        <div className='info__name'>{name}</div>
        <div className='price__wrapper'>
          {discountPrice ? (
            <>
              <span className='price_discount'>{price}₽</span>
              <span className='price'>{discountPrice}₽</span>
            </>
          ) : (
            <span className='price'>{price}₽</span>
          )}
        </div>
        <Assets.SVGRating className='info__rating' />
      </div>
    </div>
  );
};
