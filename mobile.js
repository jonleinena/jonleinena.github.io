//change first link if user is on mobile
//too lazy to make the web fully responsive

document.getElementById("abc").onclick = function () {
  console.log("helloworld");
  var link = document.getElementById("abc");
  link.setAttribute("href", "sup.html");
  return false;
};
