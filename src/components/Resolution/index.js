// The DisplayResolutions component will start out as an empty array with preset keys
// When submit input button is clicked, the information will be transferred to the array

function Resolution({ title, startDate, completionDate, text, handleChange }) {
	return (
		<div className="resolutions-card">
			<article>
				<h3>{title}</h3>
				<h5>
					{startDate} - {completionDate}
				</h5>

				<p>{text}</p>
			</article>
		</div>
	);
}

export default Resolution;
