# IO.Swagger.Api.DefaultApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DoctorAppointmentAppointmentIdDelete**](DefaultApi.md#doctorappointmentappointmentiddelete) | **DELETE** /doctor-appointment/{appointmentId} | Delete a doctor appointment by ID
[**DoctorAppointmentAppointmentIdGet**](DefaultApi.md#doctorappointmentappointmentidget) | **GET** /doctor-appointment/{appointmentId} | Get a doctor appointment by ID
[**DoctorAppointmentAppointmentIdPut**](DefaultApi.md#doctorappointmentappointmentidput) | **PUT** /doctor-appointment/{appointmentId} | Update a doctor appointment by ID
[**DoctorAppointmentDelete**](DefaultApi.md#doctorappointmentdelete) | **DELETE** /doctor-appointment | Delete all doctor appointments
[**DoctorAppointmentGet**](DefaultApi.md#doctorappointmentget) | **GET** /doctor-appointment | Get all doctor appointment
[**DoctorAppointmentPost**](DefaultApi.md#doctorappointmentpost) | **POST** /doctor-appointment | Add a new doctor appointment
[**DoctorAppointmentPut**](DefaultApi.md#doctorappointmentput) | **PUT** /doctor-appointment | Update all doctor appointments
[**DoctorAppointmentSearchGet**](DefaultApi.md#doctorappointmentsearchget) | **GET** /doctor-appointment/search | Search doctor appointment

<a name="doctorappointmentappointmentiddelete"></a>
# **DoctorAppointmentAppointmentIdDelete**
> void DoctorAppointmentAppointmentIdDelete (int? appointmentId)

Delete a doctor appointment by ID

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DoctorAppointmentAppointmentIdDeleteExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var appointmentId = 56;  // int? | 

            try
            {
                // Delete a doctor appointment by ID
                apiInstance.DoctorAppointmentAppointmentIdDelete(appointmentId);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.DoctorAppointmentAppointmentIdDelete: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appointmentId** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="doctorappointmentappointmentidget"></a>
# **DoctorAppointmentAppointmentIdGet**
> DoctorAppointment DoctorAppointmentAppointmentIdGet (int? appointmentId)

Get a doctor appointment by ID

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DoctorAppointmentAppointmentIdGetExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var appointmentId = 56;  // int? | 

            try
            {
                // Get a doctor appointment by ID
                DoctorAppointment result = apiInstance.DoctorAppointmentAppointmentIdGet(appointmentId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.DoctorAppointmentAppointmentIdGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appointmentId** | **int?**|  | 

### Return type

[**DoctorAppointment**](DoctorAppointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="doctorappointmentappointmentidput"></a>
# **DoctorAppointmentAppointmentIdPut**
> void DoctorAppointmentAppointmentIdPut (DoctorAppointmentInput body, int? appointmentId)

Update a doctor appointment by ID

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DoctorAppointmentAppointmentIdPutExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var body = new DoctorAppointmentInput(); // DoctorAppointmentInput | 
            var appointmentId = 56;  // int? | 

            try
            {
                // Update a doctor appointment by ID
                apiInstance.DoctorAppointmentAppointmentIdPut(body, appointmentId);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.DoctorAppointmentAppointmentIdPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DoctorAppointmentInput**](DoctorAppointmentInput.md)|  | 
 **appointmentId** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="doctorappointmentdelete"></a>
# **DoctorAppointmentDelete**
> void DoctorAppointmentDelete ()

Delete all doctor appointments

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DoctorAppointmentDeleteExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // Delete all doctor appointments
                apiInstance.DoctorAppointmentDelete();
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.DoctorAppointmentDelete: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="doctorappointmentget"></a>
# **DoctorAppointmentGet**
> List<DoctorAppointmentList> DoctorAppointmentGet ()

Get all doctor appointment

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DoctorAppointmentGetExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // Get all doctor appointment
                List&lt;DoctorAppointmentList&gt; result = apiInstance.DoctorAppointmentGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.DoctorAppointmentGet: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<DoctorAppointmentList>**](DoctorAppointmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="doctorappointmentpost"></a>
# **DoctorAppointmentPost**
> void DoctorAppointmentPost (DoctorAppointmentInput body)

Add a new doctor appointment

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DoctorAppointmentPostExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var body = new DoctorAppointmentInput(); // DoctorAppointmentInput | 

            try
            {
                // Add a new doctor appointment
                apiInstance.DoctorAppointmentPost(body);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.DoctorAppointmentPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DoctorAppointmentInput**](DoctorAppointmentInput.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="doctorappointmentput"></a>
# **DoctorAppointmentPut**
> void DoctorAppointmentPut (List<DoctorAppointment> body)

Update all doctor appointments

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DoctorAppointmentPutExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var body = new List<DoctorAppointment>(); // List<DoctorAppointment> | 

            try
            {
                // Update all doctor appointments
                apiInstance.DoctorAppointmentPut(body);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.DoctorAppointmentPut: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**List&lt;DoctorAppointment&gt;**](DoctorAppointment.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="doctorappointmentsearchget"></a>
# **DoctorAppointmentSearchGet**
> List<DoctorAppointment> DoctorAppointmentSearchGet (string id = null, string doctor = null, string patient = null, DateTime? startDate = null, DateTime? endDate = null)

Search doctor appointment

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DoctorAppointmentSearchGetExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var id = id_example;  // string | doctor appointment provided by the id (optional) 
            var doctor = doctor_example;  // string | Doctor name (optional) 
            var patient = patient_example;  // string | Patient name (optional) 
            var startDate = 2013-10-20;  // DateTime? | Start date of the time period (optional) 
            var endDate = 2013-10-20;  // DateTime? | End date of the time period (optional) 

            try
            {
                // Search doctor appointment
                List&lt;DoctorAppointment&gt; result = apiInstance.DoctorAppointmentSearchGet(id, doctor, patient, startDate, endDate);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.DoctorAppointmentSearchGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| doctor appointment provided by the id | [optional] 
 **doctor** | **string**| Doctor name | [optional] 
 **patient** | **string**| Patient name | [optional] 
 **startDate** | **DateTime?**| Start date of the time period | [optional] 
 **endDate** | **DateTime?**| End date of the time period | [optional] 

### Return type

[**List<DoctorAppointment>**](DoctorAppointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
