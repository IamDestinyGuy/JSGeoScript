async function logVisitorData() {
    const endpoint = "https://script.google.com/macros/s/AKfycbwMMGdQp0aCxXX1VL5sGCHKImZEGrDiyXSnO_FaJES5PNWMANJ1RmoVQhu-tDt4lQ8_/exec"; //My script url to send logged data, gotta extend it later
    //IDENT: AKfycbzBWItsiEbOn-B1-5bIL_24NICYnHg3pHsio3jn2tpMLV6FObh5VwSd7uhCgVD6lOXO
    const data = {
        latitude: null,
        longitude: null,
        userAgent: navigator.userAgent,
        language: navigator.language,
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                data.latitude = position.coords.latitude;
                data.longitude = position.coords.longitude;

                fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.text())
                    .then((result) => console.log("Success:", result))
                    .catch((error) => console.error("Error:", error));
            },
            (error) => console.error("Geolocation error:", error)
        );
    }
}

// Trigger the function
logVisitorData();
