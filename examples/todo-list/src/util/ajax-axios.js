import axios from "axios"
import * as R from "ramda"

const ajaxPromise = function(options) {
  return axios(options).then(R.prop("data"))
}

const ajax = {
  getJSON: function(url) {
    return ajaxPromise({
      url: url
    })
  },

  postJSON: function(url, body) {
    return ajaxPromise({
      method: "POST",
      url: url,
      data: JSON.stringify(body)
    })
  },

  deleteJSON: function(url) {
    return ajaxPromise({
      method: "DELETE",
      url: url
    })
  }
}

export default ajax
