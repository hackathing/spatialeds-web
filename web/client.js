var inputSchema = [
  {
    label: 'Shininess',
    key: 'shininess',
    type: 'range',
    max: 100,
    min: 0,
  },
  {
    label: 'Loudness',
    key: 'loudness',
    type: 'range',
    max: 11,
    min: 0,
  },
];

var sliders = document.querySelector("#sliders");

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

inputSchema.map(createSlider);

