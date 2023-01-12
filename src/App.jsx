<<<<<<< HEAD
import Details from "./components/Details"
import Header from "./components/Header"

import useGlobalContext from "./context/contextApi"

function App() {
  const { theme } = useGlobalContext()
  return (
    <div id={theme}>
    <Header />
    <Details />
    </div>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { AppContext } from "./context/contextApi"

const Header = lazy(() => import("./components/Header"));
const Feed = lazy(() => import("./components/Feed"));
const SearchResult = lazy(() => import("./components/SearchResult"));
const VideoDetails = lazy(() => import("./components/VideoDetails"));

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Suspense>
            <Header />
            <Routes>
              <Route path="/" exact element={<Feed />} />
              <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
              <Route path="/video/:videoId" element={<VideoDetails />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </AppContext>

>>>>>>> 147ecca (initial commit)
  )
}

export default App
