

async function get_data() {
    let response = await fetch("http://localhost:3000/Details");
    let result = await response.json();
    display(result); 
}

function display(result){
    let container = document.getElementById("container");
    result.forEach((obj)=>{
        let item = document.createElement("div");
        item.innerHTML = ``
        item.innerHTML = `
        <p><b>Id : </b>${obj.id}</p>
        <p><b>Name : </b>${obj.name}</p>
        <button onclick='delete_data("${obj.id}")'>Delete</button>
        `;
        container.appendChild(item);
    })
}

async function add_data() {
    let input = document.getElementById("name");
    let options = {
    "method" : "POST",
    "header" : {
    "content-Type" : "application/json"
    },
    "body" : JSON.stringify({
    "name" : input.value
    })
    }
    let response = await fetch("http://localhost:3000/Details",options);
    if(response.ok){
        input.value = '';
        // get_data();
    }
}

async function delete_data(id) {
    let options = {
        "method" : "DELETE"
    }
    let response = await fetch(`http://localhost:3000/Details/${id}`,options)
    if(response.ok){
        // get_data();
    }
}
get_data();
