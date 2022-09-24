import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Loader } from "components/Loader/Loader";
import { Link, Header } from './App.styled';

export const App = () => {
  return (
    <div>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
    </div>
  );
};

export default App;
