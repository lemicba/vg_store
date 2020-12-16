import Navbar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import productImage from './images/cyberpunk.jpg'; 
import productImageSecond from './images/rdr2.jpg';

function App() {
  return (
    <>
      <Navbar />
        <div className="cards-container"> 
        <ItemListContainer titleProduct="Cyberpunk 2077" stock="5" productImage={productImage}/>
        <ItemListContainer titleProduct="Red Dead Redemption 2" stock="8" productImage={productImageSecond}/>
        </div>
    </>
  );
}

export default App;
