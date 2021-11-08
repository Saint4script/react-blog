
const SearchInput= ({value ,onChange}) => {
    onChange = (e) => {
        onChange(e.target.vale);
    }
  return (
    <input
        value={value}
        type="text" 
        placeholder="Поиск..."
    />
  );
}

export default SearchInput;