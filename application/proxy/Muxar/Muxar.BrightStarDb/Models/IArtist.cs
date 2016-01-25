using System;
using System.Collections.Generic;
using BrightstarDB.EntityFramework;

namespace Muxar.BrightStarDb.Models
{
    [Entity("dbpedia-owl:MusicalArtist")]
    public interface IArtist
    {
        string Id { get; }
        string Name { get; set; }

        [InverseProperty("Artist")]
        ICollection<IMember> Members { get; set; }

        DateTime FoundedIn { get; set; }
        ICollection<IAlbum> Albums { get; set; }
    }
}
