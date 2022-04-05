import { useState } from "react";
import { createRoot } from "react-dom/client";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";
import { PRODUCTS } from "./data";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function FilterableProductTable({ products }) {
	const [inputText, setInputText] = useState("");
	const [stockCheck, setStockCheck] = useState(false);

	const handleChange = (i) => {
		setInputText(i.target.value);
	};

	const handleClick = () => {
		setStockCheck(!stockCheck);
	};

	return (
		<>
			<SearchBar
				value={inputText}
				inputChange={handleChange}
				checkValue={stockCheck}
				stockChange={handleClick}
			/>
			<ProductTable
				products={products}
				inputText={inputText}
				stockCheck={stockCheck}
			/>
		</>
	);
}

root.render(<FilterableProductTable products={PRODUCTS} />);
