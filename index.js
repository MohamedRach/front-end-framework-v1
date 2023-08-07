import {init} from "./framework/index";
import { User } from "./src/user";

const firstName = "Mohamed"
const lastName = "Rachidi"

init("#app", User({firstName, lastName}))