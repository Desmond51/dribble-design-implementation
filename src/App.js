import Navbar from './Components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSidebar from './Components/LeftSidebar';
import RightSidebar from './Components/RightSidebar';


function App() {
  return (
   
    <div className='row container-lg my-5'>
    <div className='col-sm-1 col-2 col-lg-2 p-0 mx-0'>
    <LeftSidebar />
    </div>
    <div className='col-sm-6 col-5 col-lg-7 p-0'>
    <Navbar />
    </div>
    <div className='col-sm-5 col-5 col-lg-3'>
    <RightSidebar />
    </div>
    </div>

    
  );
}

export default App;
