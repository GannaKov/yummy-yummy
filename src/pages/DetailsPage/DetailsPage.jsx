import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinnerOur from "../../components/Spinner/Spinner";
import { testRest } from "../../fakeData";

const DetailsPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);
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
      <SpinnerOur />
    </div>
  );
};

export default DetailsPage;
