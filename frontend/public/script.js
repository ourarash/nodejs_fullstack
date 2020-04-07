/**
 * Set the initial values of min_value and max_value
 */
function initialize() {
  document.getElementById("min_value").value = "0";
  document.getElementById("max_value").value = "100";

  let loader = document.getElementById("loader");
  loader.style.display = "none";

}

initialize();

/**
 * Handle the click event on Submit (Generate) button
 */
document.getElementById("submit").onclick = function() {
  submit();
};

/**
 * An async function to send the request to the backend.
 */
async function submit() {
  console.log("In submit!");

  // Set the mouse cursor to hourglass
  document.body.style.cursor = "wait";

  // Accessing the div that has random value 
  let random_value_element = document.getElementById("random-value");

  random_value_element.innerHTML = "Please wait...";
  
  // Show the loader element (spinning wheels)
  let loader = document.getElementById("loader");
  loader.style.display = "inline-block";

  try {
    // Get the min/max values from the user 
    let min_value = document.getElementById("min_value").value;
    let max_value = document.getElementById("max_value").value;


    let request = `http://127.0.0.1:5000/?min_value=${min_value}&max_value=${max_value}`;
    console.log("request: ", request);

    // Send an HTTP GET request to the backend
    const data = await axios.get(request);

    console.log("data.data: ", JSON.stringify(data.data, null, 2));
    

    // Display the random value
    random_value_element.innerHTML = "Here is your random number: " + data.data.randomValue;
  } catch (error) {
    console.log("error: ", error);
  }

  // Set the cursor back to default
  document.body.style.cursor = "default";

  // Hide loader animation
  loader.style.display = "none";
}
