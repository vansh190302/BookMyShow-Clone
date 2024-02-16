import Header from './components/Header';
import Footer from './components/Footer';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Recommended from './components/Recommended';
function App() {
  return (
        <div>
          <Header/>
                <SliderImages/>
                <Recommended/>
                <CardsSlider/>
                <Premieres/>
          <Footer/>
        </div>
  );
}

export default App;
