function InputFormPopup(props) {
	return props.trigger ? (
		<div className="popup-container">
			<div className="popup-inner">
				<button className="close-btn" onClick={props.setTrigger}>
					CLOSE
				</button>
				<h4>Enter Your Resolution!</h4>
				<input value={props.input} className="title" placeholder="Title" />
				<input className="start-date" placeholder="Start Date" />
				<input className="completion-date" placeholder="Completion Date" />
				<textarea
					className="text-area"
					cols="35"
					rows="10"
					placeholder="Add reflection notes here..."
				></textarea>
				<button className="submit-btn" onClick={props.onClick}>
					Submit
				</button>
			</div>
		</div>
	) : (
		""
	);
}

export default InputFormPopup;
