/**
 * @format
 */

import {AppRegistry} from "react-native";
import App from "./App";
import {name as appName} from "./app.json";
import Learn from "./app/Learn";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import Card from "./app/components/Card";
import TestScreen from "./app/screen/TestScreen";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import AccountScreen from "./app/screen/AccountScreen";

AppRegistry.registerComponent(appName, () => AccountScreen);
