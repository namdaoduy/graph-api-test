function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(r) {
    if (r.status === 'connected') {
        window.location = '../';
    }
    else {
        
    }
}

window.onload = function() {
    checkLoginState();
}
