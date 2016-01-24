using System;
using System.Collections.Generic;
using BrightstarDB.EntityFramework;

namespace Muxar.BrightStarDb.Models
{
    [Entity]
    public interface IAlbum
    {
        string Id { get; }
        string Name { get; set; }
        DateTime ReleaseDate { get; set; }
        string CoverUri { get; set; }
        [InverseProperty("Albums")]
        IArtist Artist { get; set; }
        [InverseProperty("Album")]
        ICollection<ISong> Songs { get; set; }
    }
}
