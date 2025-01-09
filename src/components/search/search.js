import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

// The search component
const Search = ({ onSearchChange }) => {
    // State variable for the search value
    const [search, setSearch] = useState(null);

    // Function to load options for autocomplete search
    const loadOptions = (inputValue) => {
        // Fetch cities from the GeoDB API
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {

                // Map the response to an options list for the select input
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            });
    };

    // Function to handle changes to the search input
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        // Render the component
        <div className="async-search-container">
            <AsyncPaginate
                placeholder="Search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    );
};

export default Search;