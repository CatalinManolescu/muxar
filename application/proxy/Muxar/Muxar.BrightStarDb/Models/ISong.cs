using System.Collections.Generic;
using BrightstarDB.EntityFramework;

namespace Muxar.BrightStarDb.Models
{
    [Entity]
    public interface ISong
    {
        string Id { get; }
        string Name { get; set; }
        IArtist Artist { get; set; }
        ICollection<IPlaylist> Playlists { get; set; }
        IAlbum Album { get; set; }
        [PropertyType("dbpedia-owl:thumbnail")]
        string Thumbnail { get; set; }
    }
}
