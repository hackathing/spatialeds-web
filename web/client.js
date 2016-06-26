function getSchema() {
  fetch('/control-schema', {
    credentials: 'same-origin',
  })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      updateSchema(json.schema);
    }).catch(function(ex) {
      console.log('parsing failed', ex);
    });
}

var sliders = document.querySelector("#sliders");

var schema;
function updateSchema(newSchema) {
  if (JSON.stringify(schema) !== JSON.stringify(newSchema)) {
    schema = newSchema;
    createSliders(schema)
  }
}

// Create a div containing slider, its name and min/max values
function createSlider(sliderObj) {
  // console.log("called createSlider");  
  var listel = document.createElement("li");
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.type = "range";
  input.dataset.key = sliderObj.key;
  input.min = sliderObj.min;
  input.max = sliderObj.max;
  // input.className = "css-class-name"; // set the CSS class
  label.innerHTML = sliderObj.label;
  listel.appendChild(label);
  listel.appendChild(input);
  sliders.appendChild(listel);
}

function createSliders(schema) {
  sliders.innerHTML = "";
  schema.map(createSlider);
}

getSchema();
setInterval(getSchema, 1000);


