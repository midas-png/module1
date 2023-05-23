import { Header, Footer, Catalog } from 'components';
import './App.css';

export const App = () => {
  return (
    <div className='layout__wrapper'>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
};
