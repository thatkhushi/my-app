import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const style = {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    backgroundColor: "#2d313a",
    display: "flex",
    justifyContent: "space-evenly",
  };


    const navigate=useNavigate()
    const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
        navigate("/movies");
    } else if (value === 2) {
        navigate("/series");
    } else if (value === 3) {
        navigate("/search");
    }
  }, [value]);

  return (
    
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={style}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
