using System.Collections.Generic;
using System.Threading.Tasks;
using Muxar.EntitiesDto;
using Newtonsoft.Json.Linq;

namespace Muxar.BrightStarDb.Helpers
{
    public class EchonestHelper
    {
        public static async Task<JObject> GetSearchResponse(string artistName)
        {
            var uri = EchonestUriHelper.GenerateSearchUri(artistName);
            var response = await HttpClientHelper.GetResponseMessage(uri);
            return response;
        }

        public static ArtistDto CreateSearchArtistResponse(JObject response)
        {
            ArtistDto artist = null;
            var result = ((response[EchonestResources.Response] as JObject)[EchonestResources.Artists] as JArray)?.First;
            if (result != null)
                artist = new ArtistDto
                {
                    EchonestId = result[EchonestResources.Id].ToString(),
                    EchonestName = result[EchonestResources.Name].ToString()
                };
            return artist;
        }

        public static async Task<JObject> GetWebsiteResponse(string echonestId)
        {
            var uri = EchonestUriHelper.GenerateWebsiteUri(echonestId);
            var response = await HttpClientHelper.GetResponseMessage(uri);
            return response;
        }

        public static ArtistDto CreateFindWebsiteResponse(JObject response, ArtistDto artistDto)
        {
            var result = (response[EchonestResources.Response] as JObject)[EchonestResources.Urls] as JObject;
            if (result != null)
                artistDto.Website = result[EchonestResources.OfficialWebsite]?.ToString();
                artistDto.Wiki = result[EchonestResources.Wiki]?.ToString();
            return artistDto;
        }

        public static async Task<JObject> GetPlaylistByArtist(string artistUri)
        {
            var uri = EchonestUriHelper.GeneratePlaylistByArtistUri(artistUri);
            var response = await HttpClientHelper.GetResponseMessage(uri);
            return response;
        }

        public static IList<SongDto> CreatePlaylistResponse(JObject response)
        {
            var result = ((response[EchonestResources.Response] as JObject)[EchonestResources.Songs] as JArray);
            var songs = new List<SongDto>();
            if (result == null) return songs;
            foreach (var songResult in result)
            {
                var newSong = new SongDto();
                var song = songResult as JObject;
                newSong.Name = song[EchonestResources.Title]?.ToString();
                newSong.ArtistName = song[EchonestResources.ArtistName]?.ToString();
                newSong.EchonestId = song[EchonestResources.Id]?.ToString();
                newSong.ArtistEchonestId = song[EchonestResources.ArtistId]?.ToString();
                var trackDetails = (song[EchonestResources.Tracks] as JArray)?.First as JObject;
                newSong.SpotifyId = trackDetails[EchonestResources.ForeignId]?.ToString();
                songs.Add(newSong);
            }
            return songs;
        }
        public static async Task<JObject> GetPlaylistByGenre(string genre)
        {
            var uri = EchonestUriHelper.GeneratePlaylistByGenreUri(genre);
            var response = await HttpClientHelper.GetResponseMessage(uri);
            return response;
        }

        public static async Task<JObject> GetPlaylistBySong(string song)
        {
            var uri = EchonestUriHelper.GeneratePlaylistBySong(song);
            var response = await HttpClientHelper.GetResponseMessage(uri);
            return response;
        }

        public static async Task<JObject> GetPlaylistByMoodAndDecade(string mood, string decade)
        {
            var uri = EchonestUriHelper.GeneratePlaylistByMoodAndDecadeUri(mood, decade);
            var response = await HttpClientHelper.GetResponseMessage(uri);
            return response;
        }
    }
}
