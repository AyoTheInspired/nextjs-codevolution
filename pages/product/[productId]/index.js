import React from "react";
import { useRouter } from "next/router";

function ProductDetails() {
	const router = useRouter();

	console.log(router);

	const productId = router.query.productId;

	return (
		<div>
			<h1>Details about Product {productId} </h1>
		</div>
	);
}

export default ProductDetails;
