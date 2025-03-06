import { Outlet, BrowserRouter as Router, Link } from 'react-router-dom';
import Grape from "@/assets/GRAPE.png"
import Linux from "@/assets/logo.svg"
// ДЛЯ АССИНХРОННЫХ ОПЕРАЦИЙ ИСПОЛЬЗОВАТЬ suspense

function App() {
  return (
    <>
    <h1 data-testid={'superSEX'}>PLATFORM: {__PLATFORM__}</h1>
    {/* <button onClick={() => todo(12)}>asdadasd</button> */}
    <div data-testid={'App'}>
      <Linux fill="red"/>
    </div>
    <Link to={'/about'}>About</Link>
    <Link to={'/shop'}>About</Link>
    <Outlet />
    </>
  );
}

export default App;