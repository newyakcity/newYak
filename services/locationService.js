export const locationService = {
    getLocation: () => new Promise((resolve, reject) => {
        navigator.geolocation.requestAuthorization();

        navigator.geolocation.getCurrentPosition(resolve, reject, {enableHighAccuracy: true});
    })
}