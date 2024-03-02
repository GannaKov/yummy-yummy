import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Flex, List, ListItem, Text, Box, Button,Image, Input, IconButton, Grid, Center} from '@chakra-ui/react';
import { testRest } from "../../fakeData";




const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  


  useEffect(() => {
    fetch('https://yelp-backend-2.vercel.app/api/restaurant')
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);

  


  return (
    <>
    <Text fontSize="3xl" fontWeight="bold" textAlign="center" margin="auto" padding="50px">Restaurants</Text>
    <Flex margin="auto" padding="50px">
    <Input placeholder="Filter" margin="auto" padding="20px" onChange={(e)=> setSearch(e.target.value)}  />
    </Flex>
    <Center>
    <Grid templateColumns='repeat(3, 1fr)' gap={10}  >
      {restaurants.filter((item)=>{return search.toLowerCase()=== '' ? item : item.name.toLowerCase().includes(search)}).map(restaurant => (
        <Link to={`${restaurant.id}`}>
            <Box w='100%' h='10'
             key={restaurant.id}
              p={2}
              shadow="md"
              borderWidth="1px"
              background="white"
              borderRadius="md"
              transition="all 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
              height={300}
              width={300}
            >
              <Text>{restaurant.name}</Text>
              <Image src={restaurant.img_url} alt={restaurant.name} />
              <Text>Adress: {restaurant.address}</Text>
             </Box>
          </Link>
        
      ))}
      
    </Grid>
    </Center>
    <br />

      <Link  to="/"><Button size='lg'  mb={4}>Back</Button></Link>
    </>
  
    
  );

  
};

export default RestaurantsPage;
