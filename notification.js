let coin = '';
let low = Number.POSITIVE_INFINITY;
let high = Number.NEGATIVE_INFINITY;
let nInterval = 60;

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

    if (coin !== '' && (low !== Number.POSITIVE_INFINITY || high !== Number.NEGATIVE_INFINITY))
    {

        document.getElementById("notifyisset").innerHTML = ''
        let greaterThanHigh = false
        let lessThanLow = false

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
                    if (value >= high) {
                        var notify = new Notification('High surpassed!', {
                            body: 'the price of ' +coin+ ' in USD is: ' +value+ '. Your high was set to ' +high,
                            icon: 'space.jpg',    
                        })
                        greaterThanHigh = true
                        lessThanLow = false
                    }
                    if(value <= low) {
                        var notify = new Notification('Low surpassed!', {
                            body: 'the price of ' +coin+ ' in USD is: ' +value+ '. Your low was set to ' +low,
                            icon: 'space.jpg',    
                        })
                        lessThanLow = true
                        greaterThanHigh = false
                    }
                    if(value <= high && greaterThanHigh == true) {
                        var notify = new Notification('Dipped back below high!', {
                            body: 'the price of ' +coin+ ' in USD is: ' +value+ '. Your high was set to ' +high,
                            icon: 'space.jpg',    
                        })
                        greaterThanHigh = false
                        lessThanLow = false
                    }
                    if(value >= low && lessThanLow == true) {
                        var notify = new Notification('price rised above the low!', {
                            body: 'the price of ' +coin+ ' in USD is: ' +value+ '. Your low was set to ' +low,
                            icon: 'space.jpg',    
                        })
                        greaterThanHigh = false
                        lessThanLow = false
                    }
                }

            });

                    }, nInterval*1000);

                    } else {
            // request permission from user
            Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    setInterval(function() {
                        $.ajax({

                dataType: 'json', // type of response data
                url : 'https://min-api.cryptocompare.com/data/price?fsym='+coin+'&tsyms=USD&api_key=ec2e8882cd27fcbe32ed27687f29807cbf1da7d48bdb20618663752206e8af0b',
                type : 'GET',
                success : function(response) {
                    let value = response.USD
                    if (value >= high) {
                        var notify = new Notification('High surpassed!', {
                            body: 'the price of ' +coin+ ' in USD is: ' +value+ '. Your high was set to ' +high,
                            icon: 'space.jpg',    
                        })
                        greaterThanHigh = true
                        lessThanLow = false
                    }
                    if(value <= low) {
                        var notify = new Notification('Low surpassed!', {
                            body: 'the price of ' +coin+ ' in USD is: ' +value+ '. Your low was set to ' +low,
                            icon: 'space.jpg',    
                        })
                        lessThanLow = true
                        greaterThanHigh = false
                    }
                    if(value <= high && greaterThanHigh == true) {
                        var notify = new Notification('Dipped back below high!', {
                            body: 'the price of ' +coin+ ' in USD is: ' +value+ '. Your high was set to ' +high,
                            icon: 'space.jpg',    
                        })
                        greaterThanHigh = false
                        lessThanLow = false
                    }
                    if(value >= low && lessThanLow == true) {
                        var notify = new Notification('price rised above the low!', {
                            body: 'the price of ' +coin+ ' in USD is: ' +value+ '. Your low was set to ' +low,
                            icon: 'space.jpg',    
                        })
                        greaterThanHigh = false
                        lessThanLow = false
                    }
                }

            });
                        
                    }, nInterval*1000);
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