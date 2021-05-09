/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const updateLuggageBag = (update) => {
  let main = document.querySelector("main"); // main is an element
  main.innerHTML = markup(luggageBag);
  console.info(update);
};

const luggageBag = {
  width: 40,
  height: 100,
  color: "red",
  wheelerType: "Four Double Wheeler",
  handleBarLength: "Variable",
  outsidePocketsCount: 2,
  insidePocketsCount: 1,
  insidePocket: {
    type: "pouch",
    width: 40,
    height: 20,
  },
  bagMaterial: "Synthetic",
  brand: "TraWorld",
  tsaLockPresent: true,
  warrantyPeriodInYears: 5,
  bagOpen: false,
  openBag: function () {
    this.bagOpen = true;
    updateLuggageBag(`Bag is open now...`);
  },
  closeBag: function () {
    this.bagOpen = false;
    updateLuggageBag(`Bag is closed now...`);
  },
};

const markup = (luggageBag) => {
  return `
    <div>
      <h3>${luggageBag.brand}</h3>
      <ul>
        <li>Height: ${luggageBag.height}</li>
        <li>Width: ${luggageBag.width}</li>
        <li>Color: ${luggageBag.color}</li>
        <li>Number of Outside Pockets: ${luggageBag.outsidePocketsCount}</li>
        <li>Number of Inside Pockets: ${luggageBag.insidePocketsCount}</li>
        <li>Inside Pocket Type: ${luggageBag.wheelerType}</li>
        <li>Wheeler Type: ${luggageBag.insidePocket.type}</li>
        <li>Bag Status: ${luggageBag.bagOpen ? "Open" : "Closed"}</li>
      </ul>
    </div>
  `;
};

const main = document.createElement("main");
main.innerHTML = markup(luggageBag);
document.body.appendChild(main);
