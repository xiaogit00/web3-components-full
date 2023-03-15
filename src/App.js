import Tokens from "./components/Tokens";
import Transactions from "./components/Transactions";
import Pools from "./components/Pools";
import './App.css';

function App() {
  

  return (
    <>
      <div className='container'>
        <div className="headerContainer">
          <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1678790049/spaces_-MFA0rQI3SzfbVFgp3Ic_uploads_F5ZS9RzAWKZnNxm9F85H_Curve-Logo-HighRez_zzlvug.webp" alt="curveLogo" height="96px"/>
          <h1>Curve</h1>
        </div>
        <Tokens />
        <Transactions />
        <Pools />
      </div>
      
    </>
    
  );
}

export default App;
