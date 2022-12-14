import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="container py-3">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Nav />
            <Routes>
              <Route index path="/" element={<Home />}></Route>
              <Route index path="users" element={<Users />}></Route>
              <Route path="nested" element={<NestedRouteParent />}>
                <Route index element={<NestedRouteOne />}></Route>
                <Route path="route-one" element={<NestedRouteOne />}></Route>
                <Route path="route-two" element={<NestedRouteTwo />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ErrorBoundary>

  )
}

function Nav() {
  return (
    <nav className="mb-3">
      <ul className="d-flex">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/users">Users</Link>
        </li>
        <li className="nav-link">
          <Link to="/nested">Nested</Link>
        </li>
      </ul>
    </nav>
  );
}

function NestedRouteOne() {
  return <div>I am nested route 1</div>;
}
function NestedRouteTwo() {
  return <div>I am nested route 2</div>;
}
function NestedRouteParent() {
  return (
    <>
      <nav>
        <ul className="d-flex">
          <li className="nav-link">
            <Link to="route-one">Route 1</Link>
          </li>
          <li className="nav-link">
            <Link to="route-two">Route 2</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
function PageNotFound() {
  return <div>404, missing</div>;
}


export default App;