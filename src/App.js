import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter , Routes, Route } from "react-router-dom"; /*Import BrowserRouter(do not rename it as 'Router'), Routes(in place of 'Switch') and Route from react-router-dom */
// props->Properties
function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
     setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(5 25 32)";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <BrowserRouter> {/*According to CWH, This is supposed to be Router because BrowserRouter was renamed to 'Router' while importing */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
             {/** If you dont use 'exact',React may produce an error in rendering the following path as React generally does Partial Matching unless Specified 
             /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about" element={<About mode={mode} />}></Route>

            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>

      {/* <About /> */}
    </>
  );
}

export default App;
