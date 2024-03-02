import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinnerOur from "../../components/Spinner/Spinner";
import { testRest } from "../../fakeData";
import { getSingleRestaurantById } from "../../services/requests";
import styles from "./DetailsPage.module.css";
import {
  Box,
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
    <div className={styles.pageWrp}>
      {/* <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">  </Box> */}

      {isLoading && <SpinnerOur />}
      {restaurant && (
        <>
          <h1 className={styles.restTitle}>{restaurant.name}</h1>
          <img
            src={restaurant.img_url}
            alt={restaurant.name}
            className={styles.restImg}
          />
          <div>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <div className={styles.timeTableWrp}>
                <div className={styles.restTimeInnerWrp}>
                  <p className={styles.restTimeDay}>Monday</p>
                  <div className={styles.restTimeWrp}>
                    <p>{restaurant.timetable.Monday.open}</p>
                    <p>-</p>
                    <p>{restaurant.timetable.Monday.close}</p>
                  </div>
                </div>

                <div className={styles.restTimeInnerWrp}>
                  <p className={styles.restTimeDay}>Tuesday</p>
                  <div className={styles.restTimeWrp}>
                    <p>{restaurant.timetable.Tuesday.open}</p> <p>-</p>
                    <p>{restaurant.timetable.Tuesday.close}</p>
                  </div>
                </div>

                <div className={styles.restTimeInnerWrp}>
                  <p className={styles.restTimeDay}>Wednesday</p>
                  <div className={styles.restTimeWrp}>
                    <p>{restaurant.timetable.Wednesday.open}</p> <p>-</p>
                    <p>{restaurant.timetable.Wednesday.close}</p>
                  </div>
                </div>

                <div className={styles.restTimeInnerWrp}>
                  {" "}
                  <p className={styles.restTimeDay}>Thursday</p>
                  <div className={styles.restTimeWrp}>
                    <p>{restaurant.timetable.Thursday.open}</p> <p>-</p>
                    <p>{restaurant.timetable.Thursday.close}</p>
                  </div>
                </div>

                <div className={styles.restTimeInnerWrp}>
                  <p className={styles.restTimeDay}>Friday</p>
                  <div className={styles.restTimeWrp}>
                    <p>{restaurant.timetable.Friday.open}</p> <p>-</p>
                    <p>{restaurant.timetable.Friday.close}</p>
                  </div>
                </div>

                <div className={styles.restTimeInnerWrp}>
                  <p className={styles.restTimeDay}>Saturday</p>
                  <div className={styles.restTimeWrp}>
                    <p>{restaurant.timetable.Saturday.open}</p> <p>-</p>
                    <p>{restaurant.timetable.Saturday.close}</p>
                  </div>
                </div>

                <div className={styles.restTimeInnerWrp}>
                  <p className={styles.restTimeDay}>Sunday</p>
                  <div className={styles.restTimeWrp}>
                    <p>{restaurant.timetable.Sunday.open}</p> <p>-</p>
                    <p>{restaurant.timetable.Sunday.close}</p>
                  </div>
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
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPage;
