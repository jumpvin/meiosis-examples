import flyd from "flyd"
import { P } from "patchinko/explicit"
import { render } from "lit-html"

import { loadInitialState, app } from "./app"
import { router } from "./router"

loadInitialState().then(initialState => {
  const update = flyd.stream()
  const states = flyd.scan(P, initialState, update)

  // Only for using Meiosis Tracer in development.
  require("meiosis-tracer")({ selector: "#tracer", rows: 35, streams: [ states ]})

  const actions = app.actions({ update })

  const element = document.getElementById("app")
  states
    .map(app.service)
    .map(state => render(app.view({ state, actions }), element))

  router.listenToRouteChanges(update)
})
