import { SignIn, SignUp } from './pages';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SignIn /> } />
          <Route path="/sign-up" element={ <SignUp /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
