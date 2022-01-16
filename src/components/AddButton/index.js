// Onclick of add button, a form should appear where user will input information

function AddButton(props) {
	return (
		<div className="header">
			<button onClick={props.onClick}>Open Popup and Add New Resolution</button>
		</div>
	);
}
export default AddButton;
