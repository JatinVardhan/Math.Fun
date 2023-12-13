let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("wrapper").style.top = "0";
  } else {
    document.getElementById("wrapper").style.top = "-100px"; 

  prevScrollPos = currentScrollPos;
};
}
/*function handleSearch() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase();

  // Define your module names or keywords for redirection
 var modules ={
    'number checker':'http://127.0.0.1:5500/math.html/Checker.html',
    'series generator':'Printer.html',
    'calculator':'Calculator.html',
    'table generator': 'Table.html',
    'area calculator': 'Area.html',
    'take quiz': 'Quiz.html',
    'prime number': 'Note1.html', 
    'palindrome number': 'Note1.html',
    'gcd': 'Note1.html',
    'basic arithmetic operations': 'Note1.htmll',
    'bodmas': 'Note1.html',
    'square': 'Note1.html',
    'square root': 'Note1.html',
    'exponent': 'Note1.html',
    'modulo': 'Note1.html',
    'logarithm': 'Note1.html',
    'factorial': 'Note1.html',
    'trigonometry functions': 'Note1.html',
    'tables': 'Note1.html',
    'area and circumference of circle': 'Note1.html',
    'area and perimeter of triangle': 'Note1.html',
    'area and perimeter of square': 'Note1.html',
    'area and perimeter of rectangle': 'Note1.html',
  };

  if (searchInput === "checker") {
    window.location.assign("Checker.html");
  } else if (searchInput === "printer") {
    window.location.href = "Printer.html";
  }
  // Add more conditions for other modules...

  // Default redirection if no match is found
  else {
    alert("Module not found!");
  }
}
  if (modules.hasOwnProperty(searchInput)) {
    window.location.href = modules[searchInput];
  } else {
    alert('Module not found. Please try a different search term.');
  }

  // Prevent the form from submitting in the traditional way
  return false;
}*/