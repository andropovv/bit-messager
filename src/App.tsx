import "./App.scss";
import ChatWindow from "./App/components/ChatWindow/ChatWindow";
import InputAndSending from "./App/components/InputAndSending/InputAndSending";
import Title from "./App/components/Title/Title";

function App() {
  return (
    <>
      <Title />
      <ChatWindow />
      <InputAndSending />
    </>
  );
}

export default App;
