// when js function return html content then it is called component
// it can be called by html tag with must closing tag
// the component name must start with capital letter
// to stop server ctrl+c
// to run project we use command "npm run dev" under project folder

import Footer from "./Footer";
import Home from "./Home";

const Hello = () => {
  return <h2>This is first react component</h2>;
};

const Bye = () => {
  return <h3>Bye bye user</h3>;
};
const App = () => {
  return (
    <div>
      <Home />
      <Hello />
      <h1>Hello React</h1>
      <Hello />
      <Bye />
      <Footer />
    </div>
  );
};

export default App;
