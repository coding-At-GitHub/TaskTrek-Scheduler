import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Settings from "./pages/settings";
import Sidenav from "./components/Sidenav";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Appbar from "./components/AppBar";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Stack spacing={2}>
            <Appbar />
            <Box sx={{ flexGrow: 1 }}>
              <Sidenav />
              <Box component="main" sx={{ p: 3 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Box>
            </Box>
          </Stack>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
