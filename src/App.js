import Notifications from "./components/notifications/notification";
import SuccessIcon from "./img/success.png"
import ErrorIcon from "./img/error.png"
import WarningIcon from "./img/warning.png"
import infoIcon from "./img/info.png"


function App() {
  return (
    <div className="App">
      <Notifications text="success" image={SuccessIcon} class="n-green"/>
      <Notifications text="error" image={ErrorIcon} class="n-red"/>
      <Notifications text="warning" image={WarningIcon} class="n-yellow"/>
      <Notifications text="info" image={infoIcon} class="n-blue"/>

    </div>
  );
}

export default App;
