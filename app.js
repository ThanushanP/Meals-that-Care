const SearchButton = document.getElementById('searchButton');

SearchButton.addEventListener('click', function(){
    console.log("hi");
});

function run(){
    let search = document.getElementById("searchBar").value;
    if (search == null || search == ""){
        
    }

    else{
        alert("Loading data for "+search);
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

      

      row.innerHTML = '<td class="bankName">Food Bank Name</td><td class="desription"><p id="test">peeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeDescription</p></td><td><a class= "hyper" id="'+i+'" href="second.html">Learn More</a></td>';
    }
     
  }

