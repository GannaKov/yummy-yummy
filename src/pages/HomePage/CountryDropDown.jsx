import React, { useState, useEffect } from 'react';
import { Form, FormControl, Dropdown } from 'react-bootstrap';

const cities = ["Rome", "Tokyo", "Bangkok", "Barcelona", "New York", "Portland, Oregon, USA"];

const CountryDropdown = ({ onSelectCity }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const filtered = cities.filter(city =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [searchTerm]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    onSelectCity(city);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedCity ? selectedCity : 'Select a City'}
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
          {filteredCities.map(city => (
            <Dropdown.Item
              key={city}
              onClick={() => {
                handleCitySelect(city);
              }}
            >
              {city}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CountryDropdown;