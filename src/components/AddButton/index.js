// Onclick of add button, a form should appear where user will input information

function AddButton(props) {
	return (
		<div className="add-btn-div">
			<button className="add-btn" onClick={props.onClick}>
				Add New Resolution
			</button>
		</div>
	);
}
export default AddButton;
