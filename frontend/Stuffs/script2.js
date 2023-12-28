const checkPermission = () =>{
    if(!('serviceWorker' in navigator)){
        throw new Error('No support for service worker!')
    }

    if(!('Notification' in window)){
        throw new Error('No support for notification!')
    }
}

const registerSW = async() => {
    const registration = await navigator.serviceWorker.register('sw.js')
    return registration
}

const requestNotificationPermission = async() =>{
    const permission = await Notification.requestPermission()
    if(permission !== 'granted'){
        throw new Error('Notification permission not granted')
    }
    
}

const main = async() => {
    checkPermission()
    await requestNotificationPermission()
    await registerSW()
    // reg.showNotification("Hello World")
}  


// checkPermission()
// registerSW()
// requestNotificationPermission()
// main()