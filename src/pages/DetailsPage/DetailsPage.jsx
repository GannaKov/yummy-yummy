import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinnerOur from "../../components/Spinner/Spinner";
import { testRest } from "../../fakeData";

const DetailsPage = () => {
  const [restaurant, setRestaurant] = useState({
    _id: "65e2fd7d27311941a95af56d",
    id: 1,
    name: "Italian Pizzeria",
    city_name: "Rome",
    address: "Via della Magliana, 224, 00146 Roma RM, Italy",
    img_url:
      "https://www.remessaonline.com.br/blog/wp-content/uploads/2022/05/culinaria-italiana-1170x762.jpg.webp",
    timetable: {
      Monday: {
        open: "10:00 AM",
        close: "10:00 PM",
        _id: "65e2fd7d27311941a95af56f",
      },
      Tuesday: {
        open: "10:00 AM",
        close: "10:00 PM",
        _id: "65e2fd7d27311941a95af570",
      },
      Wednesday: {
        open: "10:00 AM",
        close: "10:00 PM",
        _id: "65e2fd7d27311941a95af571",
      },
      Thursday: {
        open: "10:00 AM",
        close: "10:00 PM",
        _id: "65e2fd7d27311941a95af572",
      },
      Friday: {
        open: "10:00 AM",
        close: "11:00 PM",
        _id: "65e2fd7d27311941a95af573",
      },
      Saturday: {
        open: "10:00 AM",
        close: "11:00 PM",
        _id: "65e2fd7d27311941a95af574",
      },
      Sunday: {
        open: "10:00 AM",
        close: "10:00 PM",
        _id: "65e2fd7d27311941a95af575",
      },
      _id: "65e2fd7d27311941a95af56e",
    },
    comments: [
      {
        id: 1,
        content: "Authentic Italian pizza, a must-try!",
        _id: "65e2fd7d27311941a95af576",
      },
      {
        id: 2,
        content: "Great ambiance and delicious food.",
        _id: "65e2fd7d27311941a95af577",
      },
    ],
    tags: [
      {
        id: 1,
        name: "Italian food",
        _id: "65e2fd7d27311941a95af578",
      },
      {
        id: 2,
        name: "Pizza",
        _id: "65e2fd7d27311941a95af579",
      },
    ],
    createdAt: "2024-03-02T10:20:45.330Z",
    updatedAt: "2024-03-02T10:20:45.330Z",
    __v: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  // useEffect(() => {
  //   setLoading(true);
  //   getSingleUserById(id)
  //     .then((res) => {
  //       setUser(res);
  //     })
  //     .catch((error) => console.log(error.message))
  //     .finally(() => {
  //       setLoading(false);
  //       setIsFetch(true);
  //     });
  // }, [id]);
  return (
    <div>
      {isLoading && <SpinnerOur />}
      <h1>{restaurant.name}</h1>
      <img src={restaurant.img_url} alt={restaurant.name} />

      <p>{restaurant.city_name}</p>
      <p>{restaurant.address}</p>
      <div>
        <p>Monday</p>
        <p>{restaurant.timetable.Monday.open}</p>
        <p>{restaurant.timetable.Monday.close}</p>
        <p>Tuesday</p>
        <p>{restaurant.timetable.Tuesday.open}</p>
        <p>{restaurant.timetable.Tuesday.close}</p>
        <p>Wednesday</p>
        <p>{restaurant.timetable.Wednesday.open}</p>
        <p>{restaurant.timetable.Wednesday.close}</p>
        <p>Thursday</p>
        <p>{restaurant.timetable.Thursday.open}</p>
        <p>{restaurant.timetable.Thursday.close}</p>
        <p>Friday</p>
        <p>{restaurant.timetable.Friday.open}</p>
        <p>{restaurant.timetable.Friday.close}</p>
        <p>Saturday</p>
        <p>{restaurant.timetable.Saturday.open}</p>
        <p>{restaurant.timetable.Saturday.close}</p>
        <p>Sunday</p>
        <p>{restaurant.timetable.Sunday.open}</p>
        <p>{restaurant.timetable.Sunday.close}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
