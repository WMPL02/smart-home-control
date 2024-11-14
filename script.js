// Toggle light on/off by sending an HTTP request to NodeMCU
function toggleLight(lightNumber) {
    fetch(`http://<NODEMCU_IP_ADDRESS>/lights/${lightNumber}/toggle`)
        .then(response => response.json())
        .then(data => {
            console.log(`Light ${lightNumber} status:`, data.status);
        })
        .catch(error => console.error('Error:', error));
}

// Toggle motor on/off
function toggleMotor() {
    fetch(`http://<NODEMCU_IP_ADDRESS>/motor/toggle`)
        .then(response => response.json())
        .then(data => {
            console.log('Motor status:', data.status);
        })
        .catch(error => console.error('Error:', error));
}

// Fetch water level status
function getWaterLevel() {
    fetch(`http://<NODEMCU_IP_ADDRESS>/water-level`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("water-level").innerText = `Water Level: ${data.level}`;
        })
        .catch(error => console.error('Error:', error));
}

// Call the function to update water level on page load
document.addEventListener("DOMContentLoaded", getWaterLevel);
