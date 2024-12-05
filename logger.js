function sendData(location) {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbz4esELp7uGskSsnNeIfaIHDi4OmdTNwZQxOayYeHE08tFBx0XgqirKy_9njMoSu8RY/exec';
            const data = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
            };

            fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: "no-cors"
            })
            //     .then(response => {
            //     if (response.ok) {
            //         alert("Data sent successfully!");
            //     } else {
            //         alert("Error sending data.");
            //     }
            // });
        }

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(sendData, showError);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }


// Trigger the function
sendData();
