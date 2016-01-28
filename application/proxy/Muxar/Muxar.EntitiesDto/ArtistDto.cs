using System;
using System.Collections.Generic;

namespace Muxar.EntitiesDto
{
    public class ArtistDto
    {
        public string Id { get; set; }
        public string SpotifyId { get; set; }
        public string EchonestId { get; set; }
        public string Name { get; set; }
        public string Website { get; set; }

        //ICollection<MemberDto> Members { get; set; }

        //DateTime FoundedIn { get; set; }
        //ICollection<AlbumDto> Albums { get; set; }

    }
}
