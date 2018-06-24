function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(r) {
    if (r.status != 'connected') {
        window.location = '../login.html';
    }
    else {
        
    }
}

window.onload = function() {
    checkLoginState();
}
