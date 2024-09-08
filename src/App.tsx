import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import('./Pages/Home'));
const LazyList = lazy(() => import('./Pages/List/List'));
const LazyProfile = lazy(() => import('./Pages/Profile/Profile'));

function App() {
  return (
      <BrowserRouter>
          <Suspense fallback={<>Carregando</>}>
              <Routes>
                  <Route path="/" element={<LazyHome />} />
                  <Route path="/list" element={<LazyList />} />
                  <Route path="/profile" element={<LazyProfile />} />
              </Routes>
          </Suspense>
      </BrowserRouter>
  )
}

export default App;