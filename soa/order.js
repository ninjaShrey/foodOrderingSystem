document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('placeorder').addEventListener('click', function(event) {
        event.preventDefault();
        var form = event.target;
        var name = form.querySelector('#name').value;
        var contact = form.querySelector('#contact').value;
        var dish = form.querySelector('#dish').value;
        var address = form.querySelector('#address').value;
        var payment = form.querySelector('#payment').value;
        var price;
        
        switch (dish) {
            case 'Briyani':
                price = 200;
                break;
            case 'Delicacy':
                price = 300;
                break;
            case 'Drink':
                price = 100;
                break;
            default:
                price = 0;
        }

        // Display order details
        document.getElementById('nameOutput').innerText = 'Name: ' + name;
        document.getElementById('contactOutput').innerText = 'Contact: ' + contact;
        document.getElementById('dishOutput').innerText = 'Dish: ' + dish;
        document.getElementById('addressOutput').innerText = 'Address: ' + address;
        document.getElementById('paymentOutput').innerText = 'Payment mode: ' + payment;
        document.getElementById('priceOutput').innerText = 'Total amount: $' + price;
        
        // Show the order details division
        document.getElementById('orderDetails').style.display = 'block';
    });
});
