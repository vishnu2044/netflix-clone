
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {originals, action, horror} from './Urls'

function App() {
  return (
    <div >
      <Navbar />
      <Banner/>
      <RowPost title="Netflix Originals" url = {originals} />
      <RowPost title="Action Movies" isSmall url ={action} />
      <RowPost title="Horror Movies" isSmall url ={horror} />
    </div>
  );
}

export default App;
