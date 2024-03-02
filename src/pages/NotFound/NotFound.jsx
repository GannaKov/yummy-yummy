// import notFound from "../../assets/images/no_found.jpg";
import { useRouteError } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return <div No found></div>;
};

export default NotFound;
