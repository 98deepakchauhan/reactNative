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
import ListingsScreen from "./app/screen/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screen/LoginScreen";

AppRegistry.registerComponent(appName, () => LoginScreen);
