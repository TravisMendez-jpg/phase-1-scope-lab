var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}

const leastFavoriteCustomer = 'Karen';
function changeLeastFavoriteCustomer (){
    leastFavoriteCustomer = 'my dog chocko';
}