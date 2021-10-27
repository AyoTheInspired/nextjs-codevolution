import React, { useState } from "react";

function CommentsPage() {
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");

	const fetchComments = async () => {
		const response = await fetch("/api/comments");
		const data = await response.json();

		setComments(data);
	};

	const submitComment = async () => {
		const response = await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({ comment }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		console.log(data);
	};

	return (
		<div>
			<input
				type="text"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>

			<button onClick={submitComment} className="">
				Submit comment
			</button>

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