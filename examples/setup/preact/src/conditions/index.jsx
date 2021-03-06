import { h, Component } from "preact"
import Checkbox from "preact-material-components/Checkbox"
import Formfield from "preact-material-components/FormField"
import Radio from "preact-material-components/Radio"

import "preact-material-components/Checkbox/style.css"
import "preact-material-components/FormField/style.css"
import "preact-material-components/Radio/style.css"
import "preact-material-components/Theme/style.css"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const conditions = {
  initialState,
  actions
}

const conditionsOption = ({ state, actions, value, label }) => (
  <Formfield>
    <Radio id={value} name="conditions" value={value}
      checked={state.conditions.sky === value}
      onChange={evt => actions.changeSky(evt.target.value)}/>
    <label htmlFor={value}>{label}</label>
  </Formfield>
)

export class Conditions extends Component {
  render() {
    const { state, actions } = this.props

    return (
      <div>
        <Formfield>
          <Checkbox id="precipitations" checked={state.conditions.precipitations}
            onChange={evt => actions.togglePrecipitations(evt.target.checked)}/>
          <label htmlFor="precipitations">Precipitations</label>
        </Formfield>
        <div>
          {conditionsOption({ state, actions, value: "SUNNY", label: "Sunny" })}
          {conditionsOption({ state, actions, value: "CLOUDY", label: "Cloudy" })}
          {conditionsOption({ state, actions, value: "MIX", label: "Mix of sun and clouds" })}
        </div>
      </div>
    )
  }
}
