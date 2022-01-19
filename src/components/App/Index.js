import "./App.css";
import NavBar from "../NavBar";
import Header from "../Header";
import AddButton from "../AddButton";
import InputFormPopup from "../InputFormPopup";
import { useState } from "react";
import Resolution from "../Resolution";

function App() {
	const [inputPopup, setInputPopup] = useState(false);
	const [resolutions, setResolutions] = useState([]);

	function triggerFormPopup() {
		setInputPopup(true);
	}

	function closeFormPopUp() {
		setInputPopup(false);
	}

	function addNewResolution() {
		const newResolution = {
			title: document.querySelector(".title").value,
			startDate: document.querySelector(".start-date").value,
			completionDate: document.querySelector(".completion-date").value,
			text: document.querySelector(".text-area").value,
		};
		setResolutions([...resolutions, newResolution]);
		setInputPopup(false);
	}

	return (
		<div className="App">
			<NavBar />
			<Header />
			<br />
			<AddButton onClick={triggerFormPopup} />
			<br />
			<InputFormPopup
				trigger={inputPopup}
				setTrigger={closeFormPopUp}
				onClick={addNewResolution}
			/>
			<div className="card-container">
				{resolutions.map(function (item) {
					return (
						<Resolution
							handleChange={addNewResolution}
							title={item.title}
							startDate={item.startDate}
							completionDate={item.completionDate}
							text={item.text}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
