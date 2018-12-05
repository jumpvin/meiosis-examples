import m from "mithril"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream()
const models = stream.scan((model, func) => func(model),
  app.model(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ models ]})

const actions = app.actions(update)
m.mount(document.getElementById("app"),
  { view: () => m(App, { model: models(), actions }) })
