var schema;
var sliderContainer = document.querySelector("#sliders");

function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function sendControls() {
  var controls = {};
  var sliders = sliderContainer.querySelectorAll('input');
  var i = sliders.length;
  while (i--) {
    controls[sliders[i].dataset.key] = sliders[i].value;
  }
  fetch('/controls', {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ controls: controls }),
  });
}

var debouncedSendControls = debounce(sendControls, 200);

function getSchema() {
  fetch('/control-schema', {
    credentials: 'same-origin',
  })
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    updateSchema(json.schema);
  }).catch(function(ex) {
    console.error(ex);
  });
}

function updateSchema(newSchema) {
  if (JSON.stringify(schema) !== JSON.stringify(newSchema)) {
    schema = newSchema;
    sliderContainer.innerHTML = "";
    schema.map(createSlider);
  }
}

// Create a div containing slider, its name and min/max values
function createSlider(sliderObj) {
  var listel = document.createElement("li");
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.type = "range";
  input.dataset.key = sliderObj.key;
  input.min = sliderObj.min;
  input.max = sliderObj.max;
  input.onchange = debouncedSendControls;
  label.innerHTML = sliderObj.label;
  listel.appendChild(label);
  listel.appendChild(input);
  sliderContainer.appendChild(listel);
}

getSchema();
setInterval(getSchema, 1000);
