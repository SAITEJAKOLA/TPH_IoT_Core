const { IoTDataPlaneClient, PublishCommand } = require("@aws-sdk/client-iot-data-plane")
const { generateRandomSensoryData } = require("./services/IoT_service");

const iotClient = new IoTDataPlaneClient({ region: "us-east-1" });

async function publishToIoT(event) {
    const topic = "sensor/data";
    const payload = generateRandomSensoryData();

    const prarams = {
        topic,
        payload: JSON.stringify(payload),
        qos: 0,
    };

    try {
        const command = new PublishCommand(prarams);
        await iotClient.send(command);
        console.log("Message Published to IOT Core Successfully: ", payload);
        return {
            statusCode: 200,
            body: JSON.stringify(payload)
        }
    } catch (err) {
        console.error("Error in publishing message to IOT Core: ", err)
        return {
            statusCode: 500,
            body: JSON.stringify(err)
        }
    }
}

module.exports.publishToIoT = publishToIoT;