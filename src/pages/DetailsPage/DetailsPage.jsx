import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinnerOur from "../../components/Spinner/Spinner";
import { testRest } from "../../fakeData";
import { getSingleRestaurantById } from "../../services/requests";
import styles from "./DetailsPage.module.css";
import {
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

const DetailsPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleRestaurantById("2")
      .then((res) => {
        setRestaurant(res);
        console.log("res", res);
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <div>
      {isLoading && <SpinnerOur />}
      {restaurant && (
        <>
          {" "}
          <h1>{restaurant.name}</h1>
          <img src={restaurant.img_url} alt={restaurant.name} />
          <p>{restaurant.city_name}</p>
          <p>{restaurant.address}</p>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <div className={styles.timeTableWrp}>
              <p>Monday</p>
              <div>
                <p>{restaurant.timetable.Monday.open}</p>
                <p>{restaurant.timetable.Monday.close}</p>
              </div>

              <p>Tuesday</p>
              <div>
                <p>{restaurant.timetable.Tuesday.open}</p>
                <p>{restaurant.timetable.Tuesday.close}</p>
              </div>

              <p>Wednesday</p>
              <div>
                <p>{restaurant.timetable.Wednesday.open}</p>
                <p>{restaurant.timetable.Wednesday.close}</p>
              </div>

              <p>Thursday</p>
              <div>
                {" "}
                <p>{restaurant.timetable.Thursday.open}</p>
                <p>{restaurant.timetable.Thursday.close}</p>
              </div>

              <p>Friday</p>
              <div>
                <p>{restaurant.timetable.Friday.open}</p>
                <p>{restaurant.timetable.Friday.close}</p>
              </div>

              <p>Saturday</p>
              <div>
                <p>{restaurant.timetable.Saturday.open}</p>
                <p>{restaurant.timetable.Saturday.close}</p>
              </div>

              <p>Sunday</p>
              <div>
                <p>{restaurant.timetable.Sunday.open}</p>
                <p>{restaurant.timetable.Sunday.close}</p>
              </div>
            </div>

            <Stack>
              <CardBody>
                <Heading size="sm">{restaurant.name}</Heading>

                <Text py="2">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Text variant="solid" colorScheme="blue">
                  {restaurant.city_name}
                </Text>
                <Text variant="solid" colorScheme="blue">
                  {restaurant.address}
                </Text>
              </CardFooter>
            </Stack>
          </Card>
        </>
      )}
    </div>
  );
};

export default DetailsPage;
