import { div } from "../framework/element";
import { onClick } from "../framework/event";
import { CreateComponent } from "../framework";
const initialState = {firstName: "Marvin", lastName: "Frachet"};
const methods = {
    changeName : (state, firstName) => ({...state, firstName})
}

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("Thomas")
  )} Hello ${firstName} ${lastName}`;

export const User = CreateComponent({template, methods, initialState})