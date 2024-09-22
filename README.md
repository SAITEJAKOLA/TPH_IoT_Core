# TPH_IoT_Core
Simulate an IoT device using AWS Lambda to generate and publish random sensor data to AWS IoT Core every 1 min, with integration to Timestream and Grafana for real-time data visualization

# Deploy the Application

- Configure your AWS credentials in your local using "aws configure" command
- Run "serverless deploy" command.

# Monitor Data in AWS IoT Core and Timestream Database

- create your own timestream database and the table so that we can push the data.
- Set up an IoT Core Rule to route the data from the sensor/data topic into the Timestream Database.
- Create a Grafana Dashboard to visualize the data for temperature, humidity, and pressure over time.
- Creation of IoT Core rule 
    - SELECT timestamp, Device_ID, temperature, pressure, humidity FROM 'sensor/data';
-Target: Timestream Action : Configure the Timestream action to store the data in the appropriate database and table.

# Summary

- Lambda generates random IoT data (temperature, pressure, humidity) every 1 min.
- EventBridge triggers Lambda to ensure continuous data generation.
- IoT Core receives the data published by Lambda.
- IoT Rule sends the data to the Timestream Database for storage and analysis.
- Grafana visualizes the data using queries from the Timestream Database.