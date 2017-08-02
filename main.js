let customers = customerinfo.results;

let pagebody = "";

for (i=0; i < customers.length; i++){
    var customer = customers[i];

    pagebody += newCustomer(customer.picture.large, customer.name.first, customer.name.last, customer.email, customer.location.street, customer.location.city, customer.location.state, customer.location.postcode, customer.phone, customer.id.value);
}

document.querySelector('.wrapper').innerHTML = pagebody;

function newCustomer(img, first, last, email, street, city, state, postcode, tel, SSN){
let post = `
    <div class = "employee">        
        <img src=${img}>
        <h3 class = "name">${first} ${last}</h3>    
        <span class = "email"> ${email}</span>
        <ul class="locinfo">
            <li>${street}</li>
            <li>${city} ${state} ${postcode}</li>
            <li>${tel}</li>    
        </ul>
        <div class = "ssn">${SSN}</div>
    </div>`;
return post;
}
console.log(customerinfo.results);
