import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Starred from './pages/Starred'
import MainLayout from './components/MainLayout'
import Show from "./pages/Show";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const qureyClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={qureyClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />} >
            <Route path="/starred" element={<Starred />} />
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/show/:showId" element={<Show />} />
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
