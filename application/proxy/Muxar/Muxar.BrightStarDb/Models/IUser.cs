using System.Collections.Generic;
using BrightstarDB.EntityFramework;

namespace Muxar.BrightStarDb.Models
{
    [Entity]
    public interface IUser
    {
        string Id { get; }
        string FirstName { get; set; }
        string LastName { get; set; }
        string Email { get; set; }
        string Country { get; set; }
        [InverseProperty("Author")]
        ICollection<IPlaylist> Playlists { get; set; }
    }
}
