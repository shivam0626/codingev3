let details_arr = [];
// document.querySelector("form").addEventListener("submit",getDetails());
 function getDetails(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;
    details_arr.push(name,email,address,amount);
    // console.log(details_arr);

    localStorage.setItem("user",JSON.stringify(details_arr));
    window.location.reload();
}
