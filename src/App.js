import { Provider } from 'react-redux'
import TaiXiu from './Components/TaiXiu/TaiXiu';


import store from './redux/store';

// import SmartPhone from "./Components/SmartPhone/SmartPhone";
// import SmartPhoneRedux from "./Components/SmartPhoneRedux/SmartPhoneRedux";

function App() {
  return (
    // <SmartPhone />
    // <Provider store={store}>
    //   <SmartPhoneRedux />
    // </Provider>

    <Provider store={store}>
      <TaiXiu />
    </Provider>

  );
}

export default App;
