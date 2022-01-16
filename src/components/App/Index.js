import "./App.css";
import NavBar from "../NavBar";
import Header from "../Header";
import AddButton from "../AddButton";
import InputFormPopup from "../InputFormPopup";
import { useState } from "react";
//import sampleResolution from "../resolution-template";
//import Comment from "../Comment";
import Resolution from "../Resolution";

function App() {
	// set popup inputForm state
	const [inputPopup, setInputPopup] = useState(false);
	const [resolutions, setResolutions] = useState([]);
	//const [resolutionArr, setResolutionArr] = useState([]);

	function triggerFormPopup() {
		setInputPopup(true);
	}

	function closeFormPopUp() {
		setInputPopup(false);
	}

	// function addToArr() {
	// 	const newRes = {
	// 		title: document.querySelector(".inputA").value,
	// 		text: document.querySelector(".inputB").value,
	// 	};
	// 	setResolutionArr([...resolutionArr, newRes]);
	// }

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

			{/* <div>
				<input className="inputA" />
				<input className="inputB" />
				<button onClick={addToArr}>send res!</button>
				<h1>Resolutions goes here!</h1>
				{resolutionArr.map(function (item) {
					return <Comment title={item.title} text={item.text} />;
				})}
			</div> */}
		</div>
	);
}

export default App;
