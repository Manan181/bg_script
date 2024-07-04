console.log('hello from the pxbigcintegration script');
(function() {
    // Get the script element
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[scripts.length - 1];
    console.log(myScript, 'myScript');
    // Get the query string from the script's src
    var queryString = myScript.src.replace(/^[^\?]+\??/, '');

    // Parse the query string into an object
    var params = {};
    queryString.split("&").forEach(function(param) {
        var keyValue = param.split("=");
        params[keyValue[0]] = decodeURIComponent(keyValue[1]);
    });

    // Now you can use the params object
    console.log(params);

    // Example: Access individual parameters
    var param1 = params['param1'];
    var param2 = params['param2'];
    
    console.log("Param1:", param1);
    console.log("Param2:", param2);

    // Use the parameters as needed in your script
})();

class SecretDemo {
  #secret='eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOlsxXSwiY29ycyI6WyJodHRwczovL3N0b3JlLTliaXE3anVnaXkubXliaWdjb21tZXJjZS5jb20iXSwiZWF0IjoxNzIwMjQzMDM4LCJpYXQiOjE3MjAwNzAyMzgsImlzcyI6IkJDIiwic2lkIjoxMDAzMjAzODIwLCJzdWIiOiJCQyIsInN1Yl90eXBlIjowLCJ0b2tlbl90eXBlIjoxfQ.K9nYKFti8nO_ye4hbsghyXLF2yKxO5D4KfrRoB2rtge_HvEv3NZwWcbBBFkt7jf6dD9dpOT0jkJOPrY9RGATPg
';
  hasSecret() {
    return #secret in this;
  }
}
const secretDemo = new SecretDemo();
console.log(secretDemo.hasSecret(), 'hasSecret');
