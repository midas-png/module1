import { useState, useEffect } from 'react';
import { ProductCard } from 'ui';
import productsJSON from 'kod11_v1_task3.json';
import './styles.css';

export const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [optionType, setOptionType] = useState('Мебель');

  const isSelected = (option) => {
    if (optionType === option) {
      return 'option_active';
    }
    return 'option';
  };

  useEffect(() => {
    const filteredProducts = productsJSON.filter(
      (product) => product.category === optionType.toLowerCase(),
    );
    setProducts(filteredProducts);
  }, [optionType]);

  return (
    <div className='catalog__wrapper'>
      <div className='catalog'>
        <div className='catalog__header'>
          <div className='header__notation'>
            <div className='notation__arrow' />
            <span className='notation__text'>Каталог</span>
          </div>
          <div className='header__title'>
            <span className='title'>Лучшие новинки</span>
            <div className='header__options'>
              <span
                className={isSelected('Мебель')}
                onClick={() => setOptionType('Мебель')}>
                Мебель
              </span>
              <span
                className={isSelected('Свет')}
                onClick={() => setOptionType('Свет')}>
                Свет
              </span>
              <span
                className={isSelected('Декор')}
                onClick={() => setOptionType('Декор')}>
                Декор
              </span>
            </div>
          </div>
        </div>
        <div className='catalog__body'>
          {products.map(({ name, price, discountPrice }, index) => (
            <ProductCard
              name={name}
              price={price}
              discountPrice={discountPrice}
              number={index}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
