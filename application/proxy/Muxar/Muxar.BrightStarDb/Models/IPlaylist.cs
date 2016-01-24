using System.Collections.Generic;
using BrightstarDB.EntityFramework;

namespace Muxar.BrightStarDb.Models
{
    [Entity]
    public interface IPlaylist
    {
        string Id { get; }
        string Name { get; set; }
        string Description { get; set; }
        IUser Author { get; set; }
        [InverseProperty("Playlists")]
        ICollection<ISong> Songs { get; set; }
    }
}
