let side = 0; //0: head, 1: tail

/**
 * Set the initial values of min_value and max_value
 */
function initialize() {
  // Initialize min and max values
  // document.getElementById("min_value").value = "0";
  // document.getElementById("max_value").value = "100";

  document.getElementById("coin-side-a").style.display = "block";
  document.getElementById("coin-side-b").style.display = "none";

  // Hide the loader in the beginning
  let loader = document.getElementById("loader");
  loader.style.display = "none";
}

initialize();

function coinFlip() {
  if (side % 2) {
    document.getElementById("coin-side-a").style.display = "block";
    document.getElementById("coin-side-b").style.display = "none";
  } else {
    document.getElementById("coin-side-a").style.display = "none";
    document.getElementById("coin-side-b").style.display = "block";
  }
  side++;
}

/**
 * An async function to send the request to the backend.
 */
async function submit() {
  console.log("In submit!");

  // Set the mouse cursor to hourglass
  document.body.style.cursor = "wait";

  let coinFlipInterval = setInterval(coinFlip, 100);

  // Accessing the div that has random value
  let random_value_element = document.getElementById("random-value");

  random_value_element.innerHTML = "Please wait...";

  // Show the loader element (spinning wheels)
  let loader = document.getElementById("loader");
  loader.style.display = "inline-block";

  try {
    // Get the min/max values from the user
    let min_value = 0;
    let max_value = 100;

    // Address of your backend
    let request = `http://127.0.0.1:5000/?min_value=${min_value}&max_value=${max_value}`;
    console.log("request: ", request);

    // Send an HTTP GET request to the backend
    const data = await axios.get(request);

    console.log("data.data: ", JSON.stringify(data.data, null, 2));

    // Display the random value
    console.log("data.data.randomValue: ", data.data.randomValue);
    if (data.data.randomValue < 50) {
      side = 0;
    } else {
      side = 1;
    }

    random_value_element.innerHTML = "It is: " + (side === 0 ? "head" : "tail");

    
  } catch (error) {
    console.log("error: ", error);
  }

  // Stop the animation
  clearInterval(coinFlipInterval);
  
  // Set the cursor back to default
  document.body.style.cursor = "default";

  // Hide loader animation
  loader.style.display = "none";
}
