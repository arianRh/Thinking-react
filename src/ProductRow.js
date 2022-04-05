export function ProductRow({ products }) {
	const name = products.stocked ? (
		products.name
	) : (
		<span style={{ color: "red" }}>{products.name}</span>
	);

	return (
		<tr>
			<td>{name}</td>
			<td>{products.price}</td>
		</tr>
	);
}
