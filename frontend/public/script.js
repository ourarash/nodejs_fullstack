function initialize() {
  let x = document.getElementById("random-value");
  document.getElementById("min_value").value = "0";
  document.getElementById("max_value").value = "100";

  let loader = document.getElementById("loader");
  loader.style.display = "none";

}

initialize();

document.getElementById("submit").onclick = function() {
  submit();
};

async function submit() {
  console.log("In submit!");
  document.body.style.cursor = "wait";

  let x = document.getElementById("random-value");

  x.innerHTML = "Please wait...";
  let loader = document.getElementById("loader");
  loader.style.display = "inline-block";

  try {
    let min_value = document.getElementById("min_value").value;
    let max_value = document.getElementById("max_value").value;

    let request = `http://127.0.0.1:5000/?min_value=${min_value}&max_value=${max_value}`;
    console.log("request: ", request);
    const data = await axios.get(request);
    console.log("data.data: ", JSON.stringify(data.data, null, 2));
    x.innerHTML = "Here is your random number: " + data.data.randomValue;
  } catch (error) {
    console.log("error: ", error);
  }
  document.body.style.cursor = "default";
  loader.style.display = "none";
}
