import React from "react";

function SingleUser({ user }) {
	return (
		<div
			style={{
				border: "1px solid red",
				margin: "20px",
			}}>
			<p>{user.id}</p>
			<p>{user.name}</p>
			<p>{user.email}</p>
		</div>
	);
}

export default SingleUser;
