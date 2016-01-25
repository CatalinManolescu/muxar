using System.Collections.Generic;
using BrightstarDB.EntityFramework;

namespace Muxar.BrightStarDb.Models
{
    [Entity("foaf:Person")]
    public interface IUser
    {
        [Identifier("http://localhost/muxar/api/users/", KeyProperties = new[] { "Email" })]
        string Id { get; }
        string FirstName { get; set; }
        string LastName { get; set; }
        [PropertyType("schema:email")]
        string Email { get; set; }
        [PropertyType("foaf:gender")]
        string Gender { get; set; }
        [PropertyType("dbpprop:locationCountry")]
        string Country { get; set; }
        [InverseProperty("Author")]
        ICollection<IPlaylist> Playlists { get; set; }
    }
}
