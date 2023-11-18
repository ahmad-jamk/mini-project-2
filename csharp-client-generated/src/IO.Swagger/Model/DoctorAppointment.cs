/* 
 * Doctor Appointment API
 *
 * API for managing Doctor Appointment
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;
namespace IO.Swagger.Model
{
    /// <summary>
    /// DoctorAppointment
    /// </summary>
    [DataContract]
        public partial class DoctorAppointment :  IEquatable<DoctorAppointment>, IValidatableObject
    {
        /// <summary>
        /// Doctor appointment status
        /// </summary>
        /// <value>Doctor appointment status</value>
        [JsonConverter(typeof(StringEnumConverter))]
                public enum StatusEnum
        {
            /// <summary>
            /// Enum Scheduled for value: Scheduled
            /// </summary>
            [EnumMember(Value = "Scheduled")]
            Scheduled = 1,
            /// <summary>
            /// Enum Completed for value: Completed
            /// </summary>
            [EnumMember(Value = "Completed")]
            Completed = 2,
            /// <summary>
            /// Enum Canceled for value: Canceled
            /// </summary>
            [EnumMember(Value = "Canceled")]
            Canceled = 3,
            /// <summary>
            /// Enum Pending for value: Pending
            /// </summary>
            [EnumMember(Value = "Pending")]
            Pending = 4        }
        /// <summary>
        /// Doctor appointment status
        /// </summary>
        /// <value>Doctor appointment status</value>
        [DataMember(Name="status", EmitDefaultValue=false)]
        public StatusEnum? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="DoctorAppointment" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="doctor">doctor.</param>
        /// <param name="patient">patient.</param>
        /// <param name="date">date.</param>
        /// <param name="time">time.</param>
        /// <param name="status">Doctor appointment status.</param>
        public DoctorAppointment(long? id = default(long?), Doctor doctor = default(Doctor), Patient patient = default(Patient), DateTime? date = default(DateTime?), string time = default(string), StatusEnum? status = default(StatusEnum?))
        {
            this.Id = id;
            this.Doctor = doctor;
            this.Patient = patient;
            this.Date = date;
            this.Time = time;
            this.Status = status;
        }
        
        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public long? Id { get; set; }

        /// <summary>
        /// Gets or Sets Doctor
        /// </summary>
        [DataMember(Name="doctor", EmitDefaultValue=false)]
        public Doctor Doctor { get; set; }

        /// <summary>
        /// Gets or Sets Patient
        /// </summary>
        [DataMember(Name="patient", EmitDefaultValue=false)]
        public Patient Patient { get; set; }

        /// <summary>
        /// Gets or Sets Date
        /// </summary>
        [DataMember(Name="date", EmitDefaultValue=false)]
        [JsonConverter(typeof(SwaggerDateConverter))]
        public DateTime? Date { get; set; }

        /// <summary>
        /// Gets or Sets Time
        /// </summary>
        [DataMember(Name="time", EmitDefaultValue=false)]
        public string Time { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DoctorAppointment {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Doctor: ").Append(Doctor).Append("\n");
            sb.Append("  Patient: ").Append(Patient).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  Time: ").Append(Time).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as DoctorAppointment);
        }

        /// <summary>
        /// Returns true if DoctorAppointment instances are equal
        /// </summary>
        /// <param name="input">Instance of DoctorAppointment to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DoctorAppointment input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Doctor == input.Doctor ||
                    (this.Doctor != null &&
                    this.Doctor.Equals(input.Doctor))
                ) && 
                (
                    this.Patient == input.Patient ||
                    (this.Patient != null &&
                    this.Patient.Equals(input.Patient))
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.Time == input.Time ||
                    (this.Time != null &&
                    this.Time.Equals(input.Time))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Doctor != null)
                    hashCode = hashCode * 59 + this.Doctor.GetHashCode();
                if (this.Patient != null)
                    hashCode = hashCode * 59 + this.Patient.GetHashCode();
                if (this.Date != null)
                    hashCode = hashCode * 59 + this.Date.GetHashCode();
                if (this.Time != null)
                    hashCode = hashCode * 59 + this.Time.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }
}
