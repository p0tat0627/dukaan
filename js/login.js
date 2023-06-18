document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting and navigating to the dashboard.html page
    event.preventDefault();
    
    // Redirect to the dashboard.html page
    window.location.href = "dashboard.html";
  });
  