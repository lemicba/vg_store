import Navbar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'


function App() {
  return (
    <>
      <Navbar />
        <div className="cards-container"> 
          <ItemListContainer />
        </div>
    </>
  );
}

export default App;
