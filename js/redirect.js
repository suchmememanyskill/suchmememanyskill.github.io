(function() {
  var oldBase = "https://suchmememanyskill.github.io/OpenCentauri";
  //var oldBase = "http://127.0.0.1:8000/OpenCentauri";
  var newBase = "https://opencentauri.github.io/OpenCentauri";
  
  console.log(window.location.href);

  if (window.location.href.startsWith(oldBase)) {
    var suffix = window.location.href.slice(oldBase.length);
    window.location.replace(newBase + suffix);
  }
})();