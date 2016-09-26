import { createComponent } from "meiosis";

import nestComponent from "../util/nest-component";

import initialModel from "./model";
import nextAction from "./nextAction";
import receive from "./receive";
//import view from "./view";
import view from "./view.jsx";

import entry from "../entry/main";
import date from "../date/main";
import temperature from "../temperature/main";

const entryComponent = createComponent(nestComponent(entry, "store.entry"));
const dateComponent = createComponent(nestComponent(date, "store.date"));

const nestTemperatureComponent = (path, id, label) =>
  createComponent(nestComponent(temperature(id, label), path));

const airTemperature = nestTemperatureComponent("store.temperature.air", "t1", "Air temperature:");
const waterTemperature = nestTemperatureComponent("store.temperature.water", "t2", "Water temperature:");

const FormComponent = createComponent({
  initialModel,
  view: view(entryComponent, dateComponent, airTemperature, waterTemperature),
  nextAction,
  receive
});

export default FormComponent;