import "./App.css";
import Header from "../Header";
import AddButton from "../AddButton";
import InputFormPopup from "../InputFormPopup";
import { useState } from "react";

function App() {
	// set popup inputForm state
	const [inputPopup, setInputPopup] = useState(false);

	function triggerFormPopup() {
		setInputPopup(true);
	}

	function closeFormPopUp() {
		setInputPopup(false);
	}

	return (
		<div className="App">
			<p>Hello World!</p>
			<Header />
			<br />
			<AddButton onClick={triggerFormPopup} />
			<br />
			<InputFormPopup trigger={inputPopup} setTrigger={closeFormPopUp} />
		</div>
	);
}

export default App;
