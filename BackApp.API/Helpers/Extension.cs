using System;
using Microsoft.AspNetCore.Http;

namespace BackApp.API.Helpers
{
    public static class Extension
    {
        public static void AddApplicationError(this HttpResponse response,string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Acces-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Acces-Control-Allow-Origin", "*");
        }
        public static int CalculateAge(this DateTime dateTime)  {
            int age = DateTime.Now.Year - dateTime.Year;
            if (dateTime.Month > DateTime.Now.Month) {
                age--;
            }
            return age;
        }
    }
}