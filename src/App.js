import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Search.js';
import Menu from './components/Menu.js';
import Cards from './components/Card.js';
import Banner from './components/Banner.js';
import './css/bootstrap.css';
import Form from './components/Form.js';
function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Cards/>
                <Form/>
        </div>
   </div>
   </>
  );
}

export default App;