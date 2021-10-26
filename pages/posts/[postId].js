import React from "react";

function Post({ post }) {
	return (
		<div>
			<h2>
				{post.id} -- {post.title}
			</h2>

			<p>{post.body}</p>
		</div>
	);
}

export default Post;

export async function getStaticPaths() {
	// Rather than hard-coding the paths to be pre-fetched (such as 1 - 3 which wouldn't be effective for larger scenarios), NextJs can be told to pre-fetch all necessary paths, using the below syntax

	const response = await fetch("https://jsonplaceholder.typicode.com/posts");

	const data = await response.json();

	// After data has been fetched, then map over it to return an obect. The object would contain a params key: { postId: `${post.id}` }

	// Fallback key is compulsory, and can accept three possible values:

	// Fallback: false - All paths would be pre-fetched at build time, and navigating to any paths not specified would return an error page.

	const paths = data.map((post) => {
		return {
			params: {
				postId: `${post.id}`,
			},
		};
	});

	return {
		paths,

		// paths: [

		// 	{
		// 		params: { postId: "1" },
		// 	},
		// 	{
		// 		params: { postId: "2" },
		// 	},
		// 	{
		// 		params: { postId: "3" },
		// 	},
		// ],

		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { params } = context;

	//

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);

	const data = await response.json();

	return {
		props: {
			post: data,
		},
	};
}
