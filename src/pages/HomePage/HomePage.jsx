import React, { useState, useEffect } from 'react';
import styles from "./HomePage.module.css";
import { Input, IconButton, Box, Text, Image, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import CountryDropdown from "./CountryDropDown";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://yelp-backend-2.vercel.app/api/restaurant');
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching data from Yelp API', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Ensure that the data is fetched before attempting to filter
    if (restaurants.length > 0) {
      handleSearch();
    }
  }, [restaurants, searchInput, selectedCity]);

  const handleSearch = () => {
    const filteredResults = restaurants.filter(restaurant =>
      (restaurant.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      restaurant.city_name.toLowerCase().includes(searchInput.toLowerCase()) ||
      restaurant.tags.some(tag =>
        tag.name.toLowerCase().includes(searchInput.toLowerCase())
      )) &&
      (selectedCity ? restaurant.city_name.toLowerCase() === selectedCity.toLowerCase() : true)
    );
    setFilteredRestaurants(filteredResults);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    handleSearch(); // Trigger search when the city is selected
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.searchFields}>
          <Input
            placeholder='Search for your restaurant here...'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <IconButton
            colorScheme='blue'
            aria-label='Search database'
            icon={<SearchIcon />}
            onClick={handleSearch}
          />
          <div className={styles.dropdownCountries}>
            <CountryDropdown onSelectCity={handleCitySelect} />
          </div>
        </div>
      </div>
      <div className={styles.filteredResults}>
        <h2>Filtered Results</h2>
        <p>Number of hits: {filteredRestaurants.length}</p>
        {filteredRestaurants.map(restaurant => (
          <Flex
            key={restaurant.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m="2"
            p="4"
          >
            <Box>
              <Link to="/restaurants">
                <Text fontSize="xl" fontWeight="bold">
                  {restaurant.name}
                </Text>
              <Text>City: {restaurant.city_name}</Text>
              <Text>Tags: {restaurant.tags.map(tag => tag.name).join(', ')}</Text>
              </Link>
              </Box>


          </Flex>
        ))}
      </div>
    </>
  );
};

export default HomePage;