
import './css/main.css';
import store from "./store";
import { Provider } from "react-redux";

import Kartparts from './components/kartparts';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-container">
          <Kartparts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
