using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Muxar.BrightStarDb.Helpers
{
    public class HttpClientHelper
    {
        public static async Task<JObject> GetResponseMessage(Uri uri)
        {
            var client = new HttpClient();
            var response = await client.GetAsync(uri).ConfigureAwait(false);
            if (!response.IsSuccessStatusCode) return null;

            var content = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
            dynamic iObj = JsonConvert.DeserializeObject(content) as JObject;

            return iObj;
        }
    }
}
