import { useRouter } from "next/router";

function Doc() {
	const router = useRouter();

	const { params } = router.query;

	console.log(params);

	return (
		<div>
			<h1>Docs Homepage</h1>
		</div>
	);
}

export default Doc;
