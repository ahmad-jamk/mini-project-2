using System;
using System.Diagnostics;
using System.Reflection.Emit;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;


var apiInstance = new DefaultApi();

try
{
    // Get all working hours
    List<DoctorAppointmentList> result = apiInstance.DoctorAppointmentGet();


    Console.WriteLine(result[0].ToJson());

}
catch (Exception e)
{
    Debug.Print("Exception when calling DefaultApi.DoctorAppointmentGet: " + e.Message);
}