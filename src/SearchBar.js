export function SearchBar({ value, inputChange, checkValue, stockChange }) {
	return (
		<div>
			<input
				type='text'
				placeholder='Search...'
				value={value}
				onChange={inputChange}
			></input>
			<p>
				<input type='checkbox' checked={checkValue} onChange={stockChange} />
				Only show products in stock
			</p>
		</div>
	);
}
