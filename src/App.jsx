// when js function return html content then it is called component
// it can be called by html tag with must closing tag
// the component name must start with capital letter
// to stop server ctrl+c
// to run project we use command "npm run dev" under project folder
import Footer from "./Footer";
import Home from "./Home";
import { Bye, Hello } from "./Footer";

const App = () => {
  return (
    <>
      <Home />
      <Hello />
      <h1>Hello React</h1>
      <Hello />
      <Bye />
      <Footer />
    </>
  );
};

export default App;
