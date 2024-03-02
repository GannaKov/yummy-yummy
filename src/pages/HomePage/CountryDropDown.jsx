import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormControl, Dropdown } from 'react-bootstrap';

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [countries, searchTerm]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">

          {selectedCountry ? selectedCountry.name : 'Select a Country'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
        <Form className="m-3">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
          {filteredCountries.map(country => (
            <Dropdown.Item
              key={country.alpha2Code}
              onClick={() => {
                handleCountrySelect(country);
              }}
            >
              {country.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CountryDropdown;