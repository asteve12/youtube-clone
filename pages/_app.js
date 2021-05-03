import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchBar from "material-ui-search-bar";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ThemeProvider } from "react-jss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
