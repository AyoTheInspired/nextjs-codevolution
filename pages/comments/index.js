import React, { useState } from "react";

function CommentsPage() {
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");

	// DEFAILT GET REQUEST
	const fetchComments = async () => {
		const response = await fetch("/api/comments");
		const data = await response.json();

		setComments(data);
	};

	// POST REQUEST
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

	// DELETE REQUEST
	const deleteComment = async (commentId) => {
		const response = await fetch(`/api/comments/${commentId}`, {
			method: "DELETE",
		});

		const data = await response.json();

		console.log(data);
		fetchComments();
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
					<p>{comment.id}</p> | <p>{comment.text}</p>
					<button onClick={deleteComment(comment.id)}>Delete</button>
				</div>
			))}
		</div>
	);
}

export default CommentsPage;
