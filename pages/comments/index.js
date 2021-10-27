import React, { useState } from "react";

function CommentsPage() {
	const [comments, setComments] = useState([]);

	const fetchComments = async () => {
		const response = await fetch("/api/comments");
		const data = await response.json();

		setComments(data);
	};

	return (
		<div>
			<button onClick={fetchComments}>Load comments</button>

			{comments.map((comment) => (
				<div key={comment.id}>
					<p>{comment.id}</p> || <p>{comment.text}</p>
				</div>
			))}
		</div>
	);
}

export default CommentsPage;
