function InputFormPopup(props) {
	return props.trigger ? (
		<div className="popup">
			<div className="popup-inner">
				<button className="close-btn" onClick={props.setTrigger}>
					CLOSE
				</button>
				<h3>Hello! I'm a PopUp!</h3>
				<input placeholder="Title" />
				<input placeholder="Start Date" />
				<input placeholder="Completion Date" />
				<textarea
					cols="35"
					rows="10"
					placeholder="Add reflection notes here..."
				></textarea>
				<button>Submit Resolution</button>
			</div>
		</div>
	) : (
		""
	);
}

export default InputFormPopup;
