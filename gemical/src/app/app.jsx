import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header';
import Home from './home';
import Settings from './settings';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/auth" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
