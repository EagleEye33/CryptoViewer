let coin = '';
let low = Number.POSITIVE_INFINITY;
let high = Number.NEGATIVE_INFINITY;

function set_low(value) {
    testValue = parseInt(value, 10)
    if (!Number.isNaN(testValue)) {
        low = testValue
        document.getElementById("lowisset").innerHTML = "low is set to: " + low
        document.getElementById("lowisset").style.color = "white"
    }
    else {
        document.getElementById("lowisset").innerHTML = " Please enter a valid number"
        document.getElementById("lowisset").style.color = "red"
    }
}

function set_high(value) {
    testValue = parseInt(value,10)
    if(!Number.isNaN(testValue)) {
      high = testValue
      document.getElementById("highisset").innerHTML = "high is set to: " + high
      document.getElementById("highisset").style.color = "white"
  }
    else {
      document.getElementById("highisset").innerHTML = " Please enter a valid number"
      document.getElementById("highisset").style.color = "red"
    }
}

function set_coin(text) {
    coin = text.toUpperCase()
    document.getElementById("cryptoisset").innerHTML = "cryptocurrency is set to: " + coin

}

function notifyMe() {
    console.log(coin)
    console.log(low)
    console.log(high)
    if (coin !== '' && (low !== Number.POSITIVE_INFINITY || high !== Number.NEGATIVE_INFINITY))
    {
        document.getElementById("notifyisset").innerHTML = ''
        if (!window.Notification) {
            console.log('Browser does not support notifications.');
        } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
            // show notification here
            setInterval(function() {
                $.ajax({

                dataType: 'json', // type of response data
                url : 'https://min-api.cryptocompare.com/data/price?fsym='+coin+'&tsyms=USD&api_key=ec2e8882cd27fcbe32ed27687f29807cbf1da7d48bdb20618663752206e8af0b',
                type : 'GET',
                success : function(response) {
                    let value = response.USD
                    var notify = new Notification('Hi there!', {
                        body: 'the price of ' +coin+ 'is: ' + value,
                        icon: 'space.jpg',
            });
                },
            })
            }, 10000);
            
        } else {
            // request permission from user
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new Notification('Hi there!', {
                        body: 'How are you doing?',
                        icon: 'space.jpg',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }
} else {
    document.getElementById("notifyisset").innerHTML = " Provide valid values first"
    document.getElementById("notifyisset").style.color = "red"
}
}