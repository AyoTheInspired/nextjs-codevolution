import React from "react";
import SingleUser from "../components/SingleUser";

function UserList({ users }) {
	return (
		<div>
			<h1>List of Users</h1>

			{users.map((user) => (
				<SingleUser key={user.id} user={user} />
			))}
		</div>
	);
}

export default UserList;

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	const data = await response.json();

	return {
		props: {
			users: data,
		},
	};
}
