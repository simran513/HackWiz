const urlBase64Toint8Array = base64String => {
    const padding = "=".repeat((4-(base64String.length %4))%4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for(i = 0; i < rawData.length; i++){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

self.addEventListener("activate", async(e) =>{
    const subscription = await self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 
    })
    console.log(subscription)
})


// Public Key:
// BBvahQjoSnewlNlHUhlYNpMyiqMk688NoH0QPdWgghrCb2JB6LhSMZ6WNV6o63E5fj3c0a3FNdIVQlTk6RnTCe4

// Private Key:
// 0a3gCBX4kQ0S725AdV42lgZ4jNfPJvnVtnvGVbxBwmQ