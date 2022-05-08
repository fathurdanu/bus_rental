import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Banner, Navbar, MainContent, Information, Words, Footer } from './components'

function App() {
  return (
    <div className='main-page'>
      <div className='main-navbar'>
        <Navbar></Navbar>
      </div>
      <div className="">
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
