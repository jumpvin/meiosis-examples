import React from "react"
import { render } from "react-dom"
import flyd from "flyd"

import { app, App } from "./app"

const update = flyd.stream()
const states = flyd.scan((state, patch) => patch(state),
  app.initialState(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [ states ]})

const actions = app.actions(update)
render(<App states={states} actions={actions}/>, document.getElementById("app"))
