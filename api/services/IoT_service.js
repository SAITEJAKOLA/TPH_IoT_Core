const generateRandomSensoryData = () => {
    const timeStamp = Date.now();
    const Device_ID = "m5core2";
    const temperature = (Math.random() * (30 - 25) + 25).toFixed(2);
    const pressure = (Math.random() * (101000 - 100000) + 100000).toFixed(2);
    const humidity = (Math.random() * (65 - 55) + 55).toFixed(2);
    return {
        timeStamp,
        Device_ID,
        temperature: parseFloat(temperature),
        pressure: parseFloat(pressure),
        humidity: parseFloat(humidity)
    };
};

module.exports.generateRandomSensoryData = generateRandomSensoryData;