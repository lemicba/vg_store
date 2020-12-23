import Navbar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'

function App() {
  return (
    <>
      <Navbar />
        <div className="cards-container"> 
          <ItemListContainer />
        </div>
          <ItemDetailContainer />
    </>
  );
}

export default App;
