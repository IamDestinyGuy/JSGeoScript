async function logVisitorData() {
    const endpoint = "https://script.google.com/macros/s/AKfycbzIfulkJQ-O1Fs_VK5xMOtYIALvRkCsGgXv9EzdK5Xnr3uk90Fy-j1q41kaUUkyC8nz/exec"; //My script url to send logged data, gotta extend it later
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                const payload = {
                    latitude: latitude,
                    longitude: longitude,
                    userAgent: navigator.userAgent,
                    timestamp: new Date().toISOString()
                };

                fetch(endpoint, {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                }).then(() => alert("Data sent successfully!"))
                  .catch(err => console.error("Error sending data:", err));
            },
            error => {
                alert("Error getting location: " + error.message);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Trigger the function
logVisitorData();
