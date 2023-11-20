//import {BrowserRouter as Router,Route} from 'react-route-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const name='Kalpesh'
  return (
    
    <div className="container">
      
      <Header title='Hello'/>
      <Footer/>
    </div>
    
  );
}

export default App;
