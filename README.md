# API Project: Timestamp Microservice
This is the boilerplate code for the Timestamp Microservice project which is part of the FreeCodeCamp Back End Course Certification.

The details of the required test can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

## User Stories:
- Users can input between dates or Unix timestamps with a variety of date formats into the application and it will return both Unix timestamp and UTC representation of the desired time.
- If users do not input any date or Unix timestamps then the application will return both Unix timestamp and UTC representation of the current time.
- If users input invalid date or Unix timestamps then the application will return error messages.

# Link to the Application
https://get-your-timestamp.glitch.me

Example of Usage:


https://get-your-timestamp.glitch.me/api/2015-12-25


https://get-your-timestamp.glitch.me/api/1451001600000

Output:

{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
