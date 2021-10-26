import Link from "next/link";

function PostList({ posts }) {
	return (
		<div>
			<h2>Posts List</h2>

			{posts.map((post) => (
				<div key={post.id}>
					<Link href={`posts/${post.id}`}>
						<h2>
							Post {post.id} -- {post.title}
						</h2>
					</Link>

					<hr />
				</div>
			))}
		</div>
	);
}

export default PostList;

export async function getStaticProps(context) {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");

	console.log(context);

	const data = await response.json();

	return {
		props: {
			posts: data,
		},
	};
}
