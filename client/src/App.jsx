import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import { useCookies } from "react-cookie";
const serverUrl = import.meta.env.VITE_REACT_APP_SERVERURL;

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userEmail = cookies.Email;
  const [tasks, setTasks] = useState(null);
  const authToken = cookies.AuthToken;

  const getData = async () => {
    try {
      const response = await fetch(`${serverUrl}/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (authToken) getData();
  }, []);

  // Sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <p className="user-email">
            Welcome back{" "}
            <span style={{ textDecorationLine: "underline" }}>{userEmail}</span>
          </p>
          <ListHeader listName={"Get shit done!"} getData={getData} />
          {sortedTasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
