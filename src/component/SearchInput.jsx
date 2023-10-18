// eslint-disable-next-line react/prop-types
function SearchInput({search, onSearch}){
    return(
        <input id='search' placeholder='Search Notes' value={search} onChange={onSearch}></input>
    )
}

export default SearchInput