import React from 'react';
import { SearchBarContainer } from "./search-bar.styles";

// External
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons";

interface SearchBarProps {
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}
const SearchBar: React.FC <SearchBarProps> = ({searchQuery, setSearchQuery}) => {
    return (
        <SearchBarContainer>
            <div className="whole-container">
                <input type="text" className='search' value={searchQuery} onChange={(event) => {setSearchQuery(event.target.value)}}/>
                <div className="search-form-button">
                    <IconContext.Provider value={{ className: "magnify-glass" }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                </div>
            </div>
        </SearchBarContainer>
    );
};

export default SearchBar;