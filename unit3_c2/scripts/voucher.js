let details = JSON.parse(localStorage.getItem("user"));
let w_balance = document.getElementById("wallet_balance");
w_balance.innerText = details[3];


let getVoucher = async() =>{
    try{
        const url = " https://masai-vouchers-api.herokuapp.com/api/vouchers";
        let res = await fetch(url);
        let data = await res.json();
       
        // console.log(data[0].vouchers);
        appendVoucher(data[0].vouchers);
    }
    catch(err){
        console.log("err");
    }
}
getVoucher();

let v_list = document.getElementById("voucher_list");
let appendVoucher = (data) =>{
    data.forEach((el)=>{
        let vCard = document.createElement("div");
        vCard.setAttribute("class","voucher");

        let name = document.createElement("h4");
        name.innerText = el.name;

        let image = document.createElement("img");
        image.src = el.image;

        let price = document.createElement("p");
        price.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = "BUY";
        btn.setAttribute("class","buy_voucher");
        btn.addEventListener("click",function(){
            purchase(el);
        });

        vCard.append(image,name,price,btn);
        v_list.append(vCard);

    });
    
}
let purchase = (el) =>{
    let temp = Number(w_balance.innerText);
    
}

