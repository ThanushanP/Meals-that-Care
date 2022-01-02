let LearnMore_Id = 0;
let Table = [];

window.onload = function () {
  addRows();
}

window.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) {
    run();
  }
});

function run() {
  let search = document.getElementById("searchBar").value;
  if (search == null || search == "") {

  }

  else {

    let path = window.location.pathname;
    let page = path.split("/").pop();
    //Problem here
    if (page !== "index.html") {
      window.location.href = 'index.html';
    }

    const table = document.getElementById("Table");
    let r = table.rows;
    let count = r.length;

    if (count < 5) {
      // addRows();
    }

    for (let i = 0; i < count; i++) {
      let c = r[i].cells;
      let result = c[0].innerHTML.localeCompare(search);
      if (result >= 0) {

      }
      else {
        table.deleteRow(i);
        i--;
        r = table.rows;
        count = r.length;
      }
    }

    if (count == 0) {
      let message = table.insertRow(0);
      table.style.height = "200px";
      table.style.top = "25%";
      message.innerHTML = '<td style="text-align:center;" >Sorry... No Results..</td>';
    }
  }
}

// Initialize and add the map
function initMap() {
  // Shelter Loc
  // change lat and lng for whatever shelter
  const location = { lat: 43.606892, lng: -79.505963 };
  // Centered at location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  // Loc marker
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });

}


function addRows() {
  const table = document.getElementById("Table");
  let count = 5;

  let h = 200 * count;
  table.style.height = h + "px";
  for (let i = 0; i < count; i++) {
    let row = table.insertRow(i);
    if (i === 0) {
      row.innerHTML = row.innerHTML = '<td class="bankName">Allan Gardens Food Bank</td><td class="desription"><p id="test">Intends to create a safe environment to provide easy access to food for those in unstable positions. Open Thurs to Fri 12:30 pm to 3 pm</p></td><td><a class= "hyper" id="' + 0 + '" href="second.html" onclick=" return MoreId(this.id)">Learn More</a></td>';
    }
    else if (i === 1) {
      row.innerHTML = '<td class="bankName">Avenue Road Food Bank</td><td class="desription"><p id="test">The Church of the Messiah (Anglican) is on the corner of Avenue Road and Dupont in Toronto. They seek to transform lives by offering a rich encounter with the living God and through donations. Open Tues from 2:00 pm to 6:00 pm</p></td><td><a class= "hyper" id="' + 1 + '" href="second.html" onclick=" return MoreId(this.id)">Learn More</a></td>';
    }
    else if (i === 2) {
      row.innerHTML = row.innerHTML = '<td class="bankName">Bethany Baptist Church Food Bank</td><td class="desription"><p id="test">Welcome to anyone in the community every Thursday from 1:15 – 3pm.Food bags are given out each Thursday afternoon. Please line up on Cosburn Ave and remember to practice physical distancing. If you are feeling unwell in any way please stay home. Open Thurs from 1:15pm to 3pm</p></td><td><a class= "hyper" id="' + 2 + '" href="second.html" onclick=" return MoreId(this.id)">Learn More</a></td>';
    }
    else if (i === 3) {
      row.innerHTML = row.innerHTML = '<td class="bankName">Bloor West Food Bank</td><td class="desription"><p id="test">In the summer of 2020, a group of residents from Bloor West, Swansea and Roncesvalles banded together to start the Bloor West “Loaves and Fishes” Food Bank out of St. Pius X Church. They were brought together by the Neighbours Helping Neighbours Project out of Windermere Church and with the help of Redeemer Lutheran Church for start-up funds. Food bank open Fri from 1pm to 3pm</p></td><td><a class= "hyper" id="' + 3 + '" href="second.html" onclick=" return MoreId(this.id)">Learn More</a></td>';
    }
    else if (i === 4) {
      row.innerHTML = row.innerHTML = '<td class="bankName">Daily Bread Food Bank</td><td class="desription"><p id="test">Founded in 1983, Daily Bread Food Bank has grown to become one of Canada’s largest food banks. Through its research and advocacy, Daily Bread has become a key thought leader locally, provincially and nationally on issues about hunger, life on low income, housing, and income security. Open Mon to Fri 8am to 4pm</p></td><td><a class= "hyper" id="' + 4 + '" href="second.html" onclick=" return MoreId(this.id)">Learn More</a></td>';
    }
  }
}

function loadSec() {

  const itemDiv = document.getElementById("items");
  const contactDiv = document.getElementById("contact");

  let p = document.createElement("p");
  p.innerHTML = "List of Items of needed " + x;
  itemDiv.appendChild(p);

  let Con = document.createElement("p");
  Con.innerHTML = "Phones number and Address";
  contactDiv.appendChild(Con);
}
