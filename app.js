const SearchButton = document.getElementById('searchButton');

SearchButton.addEventListener('click', function(){
    console.log("hi");
});

function run(){
    let search = document.getElementById("searchBar").value;
    if (search == null || search == ""){
        
    }

    else{
      let path = window.location.pathname;
      let page = path.split("/").pop();

      //Problem here
      if (page !== "index.html"){
        window.location.href='index.html';
      }

      const table = document.getElementById("Table");
      let r = table.rows;
      let count = r.length;
      if (count<5){
        location.reload();
      }
      for (let i=0; i<count; i++){
        let c = r[i].cells;
        let result = c[0].innerHTML.localeCompare(search);
        if (result >= 0 ){
          
        }
        else {
          table.deleteRow(i);
          i--;
          r = table.rows;
          count = r.length;
        }
      }
      if (count==0){
        let message = table.insertRow(0);
        table.style.height="200px";  
        table.style.top="25%";
        message.innerHTML= '<td style="text-align:center;" >Sorry... No Results..</td>';
      }
    }
}


// Initialize and add the map
function initMap() {
    // Shelter Loc
    // change lat and lng for whatever shelter
    const location = { lat: 43.606892, lng:  -79.505963 };
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


  function addRows(){
    const table = document.getElementById("Table");
    let count = 5;

    let h = 200*count;
    table.style.height=h+"px";  
    for (let i=0; i<count; i++){
      let row = table.insertRow(i);

      

       row.innerHTML = '<td class="bankName">Food Bank Name</td><td class="desription"><p id="test">peeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeDescription</p></td><td><a class= "hyper" id="'+i+'" href="second.html" onclick=" return MoreId(this.id)">Learn More</a></td>';
    }
     
  }


  let LearnMore_Id = 0 ;

  function MoreId(num){
    LearnMore_Id=num;
  }
  
  function loadSec(){

    const itemDiv = document.getElementById("items");
    const contactDiv = document.getElementById("contact");

    let p = document.createElement("p");
    p.innerHTML="List of Items of needed";
    itemDiv.appendChild(p);

    let Con = document.createElement("p");
    Con.innerHTML="Phones number and Address";
    contactDiv.appendChild(Con);
  }
