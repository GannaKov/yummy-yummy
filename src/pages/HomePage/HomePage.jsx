import styles from "./HomePage.module.css";
import { testRest } from "../../fakeData";
import { Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import CountryDropdown from "./CountryDropDown";

const HomePage = () => {
  console.log(testRest);
  return (
    <>
      <div className={styles.searchFields}>
        <Input placeholder='Search for your restaurant here...' />
        <IconButton
          colorScheme='blue'
          aria-label='Search database'
          icon={<SearchIcon />} />
          <div className={styles.dropdownCountries}>
            <CountryDropdown />
            </div>
          
      </div>
    </>
  );
};

export default HomePage;
