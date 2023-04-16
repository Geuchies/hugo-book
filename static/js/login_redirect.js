document.getElementById("sendData").addEventListener("click", async () => {
    const field1Value = document.getElementById("field1").value;
    const field2Value = document.getElementById("field2").value;
    const endpoint = "http://localhost:8080";

    try {
    const response = await fetch(endpoint, {
        method: "POST",
        redirect: 'follow',
        headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
        field1: field1Value,
        field2: field2Value
        })
    });

    if (response.ok) {
        const responseData = await response.json();
        console.log("Data sent successfully", responseData);
        window.location.href = "../../hidden/account_created"
        // window.location.href = response.url;  // or, location.replace(res.url); 

    } else {
        console.error("Error sending data:", response.status, response.statusText);
        document.getElementById("info").innerHTML = "Major fucking error";

    }
    } catch (error) {
    console.error("Error:", error);
    }
});