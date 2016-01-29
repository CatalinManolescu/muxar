using System;
using System.Collections.Generic;

namespace Muxar.EntitiesDto
{
    public class ArtistDto
    {
        public string Id { get; set; }
        public string Thumbnail { get; set; }
        public string EchonestId { get; set; }
        public string EchonestName { get; set; }
        public string Name { get; set; }
        public string Website { get; set; }
        public string Wiki { get; set; }
        public string Abstract { get; set; }

        //ICollection<MemberDto> Members { get; set; }

        //DateTime FoundedIn { get; set; }
        //ICollection<AlbumDto> Albums { get; set; }

    }
}
