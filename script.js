document.getElementById("candle").addEventListener("click", function() {
    this.src = "Picture3.png"; // Change to extinguished candle image
    setTimeout(function() {
        window.location.href = "newpage.html"; // Redirect to another page
    }, 0); // Wait for 1 second before redirecting
});
