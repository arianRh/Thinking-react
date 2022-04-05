import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export function ProductTable({ products, inputText, stockCheck }) {
	const rows = [];
	let lastCategory = null;

	products.map((product) => {
		if (product.name.indexOf(inputText) === -1) {
			return;
		}
		if (stockCheck && !product.stocked) {
			return;
		}
		if (product.category !== lastCategory) {
			rows.push(
				<ProductCategoryRow
					category={product.category}
					key={product.category}
				/>
			);
		}
		rows.push(<ProductRow products={product} key={product.name} />);
		lastCategory = product.category;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}
