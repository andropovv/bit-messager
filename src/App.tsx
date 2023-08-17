import "./App.scss";
import ChatWindow from "./App/components/ChatWindow/ChatWindow";
import InputAndSending from "./App/components/InputAndSending/InputAndSending";
import Title from "./App/components/Title/Title";

function App() {
	return (
		<div className="app">
			<Title />
			<ChatWindow />
			<InputAndSending />
		</div>
	);
}

export default App;
