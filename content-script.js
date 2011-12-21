var count = 0;
var timer = setInterval(function(){
  var login_id = document.querySelector('input[name="login_id"]');
  var password = document.querySelector('input[name="password"]');
  if (!login_id || !password) {
    clearInterval(timer);
    return;
  }

  if (login_id.value.length > 0 && password.value.length > 0) {
    var message = document.createTextNode();
    message.nodeValue = 'miraiz auto login(Chrome Extensions) Logging in...';
    var div = document.createElement('div');
    div.setAttribute('style', 'width: 100%; font: 35px bold; position: absolute; opacity:0.5; background-color: black; color: white; left: 0px; top: 0px;');
    div.appendChild(message);
    document.querySelector('body').appendChild(div);

    var form = document.querySelector('form[action="/Default/Login/"]');
    form.submit();
    clearInterval(timer);
    return;
  }
  if (count > 10) {
    clearInterval(timer);
    return;
  }
  count++;
}, 500);
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
