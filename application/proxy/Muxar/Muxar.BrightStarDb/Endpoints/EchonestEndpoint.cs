using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Muxar.BrightStarDb.Helpers;
using Muxar.EntitiesDto;

namespace Muxar.BrightStarDb.Endpoints
{
    public class EchonestEndpoint
    {
        public async Task<ArtistDto> SearchArtist(string artistName)
        {
            var response = await EchonestHelper.GetSearchResponse(artistName);
            if (response == null) return null;

            var artist = EchonestHelper.CreateSearchArtistResponse(response);
            return artist;
        }

        public async Task FindWebsite(ArtistDto artistDto)
        {
            var response = await EchonestHelper.GetWebsiteResponse(artistDto.EchonestId);
            EchonestHelper.CreateFindWebsiteResponse(response, artistDto);
        }

        public async Task<IList<SongDto>> GenerateArtistPlaylist(string artistUri)
        {
            var response = await EchonestHelper.GetPlaylistByArtist(artistUri);
            var playlist = EchonestHelper.CreatePlaylistResponse(response);
            return playlist;
        }

        public async Task<IList<SongDto>> GenerateGenrePlaylist(string genre)
        {
            var response = await EchonestHelper.GetPlaylistByGenre(genre);
            var playlist = EchonestHelper.CreatePlaylistResponse(response);
            return playlist;
        }
        public async Task<IList<SongDto>> GenerateSongPlaylist(string genre)
        {
            var response = await EchonestHelper.GetPlaylistBySong(genre);
            var playlist = EchonestHelper.CreatePlaylistResponse(response);
            return playlist;
        }

        public async Task<IList<SongDto>> GenerateMoodAndDecadePlaylist(string mood, string decade)
        {
            var response = await EchonestHelper.GetPlaylistByMoodAndDecade(mood, decade);
            var playlist = EchonestHelper.CreatePlaylistResponse(response);
            return playlist;
        }
    }
}
