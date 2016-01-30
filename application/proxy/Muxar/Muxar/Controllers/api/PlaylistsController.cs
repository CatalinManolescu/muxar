using System.Threading.Tasks;
using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;

namespace Muxar.Controllers.api
{
    public class PlaylistsController : BaseApiController
    {
        private DbpediaEndpoint dbpediaEndpoint;
        private EchonestEndpoint echonestEndpoint;

        public PlaylistsController()
        {
            dbpediaEndpoint = new DbpediaEndpoint();
            echonestEndpoint = new EchonestEndpoint();
        }

        /// <summary>
        ///builds a playlist starting from a given genre;
        ///returns a list of songs, each with its own spotifyId
        ///To further find if there is a resource associated in dbpedia, must call Songs/AssociateWithDbpedia
        ///with each entity
        /// </summary>
        /// <param name="genre"></param>
        /// <returns>
        /// A simple example of response for genre=jazz would be:
        ///[{
        ///    "Id": null,
        ///    "SpotifyId": "spotify:track:2nvISupNY503G0mKbHgbYO",
        ///    "EchonestId": "SODRKBP13167715F0D",
        ///    "Name": "Bluesnik",
        ///    "ArtistEchonestId": "ARANLBO1187FB3E121",
        ///    "ArtistName": "Jackie McLean",
        ///    "Thumbnail": null
        ///},...]
        /// </returns>
        [HttpGet]
        [Route("api/Playlists/GetByGenre")]
        public async Task<IHttpActionResult> GetByGenre(string genre)
        {
            var playlist = await echonestEndpoint.GenerateGenrePlaylist(genre);
            return Ok(playlist);
        }

        /// <summary>
        /// builds a playlist starting from the echonest id of an artist;
        /// it resurns a list of Songs, which include spotifyId of each song.
        /// To further find if there is a resource associated in dbpedia, must call Songs/AssociateWithDbpedia
        /// with each entity
        /// </summary>
        /// <param name="artistUri"></param>
        /// <returns>
        /// A simple example of response would be:
        ///[{
        ///    "Id": null,
        ///    "SpotifyId": "spotify:track:520DbYnofadcEwvlfggev0",
        ///    "EchonestId": "SOPPGRU131C39A8195",
        ///    "Name": "Piledriver waltz",
        ///    "ArtistEchonestId": "ARGOA5P1187FB3647B",
        ///    "ArtistName": "Alex Turner",
        ///    "Thumbnail": null
        ///}]
        /// </returns>
        [HttpGet]
        [Route("api/Playlists/GetByArtist")]
        public async Task<IHttpActionResult> GetByArtist(string artistUri)
        {
            var playlist = await echonestEndpoint.GenerateArtistPlaylist(artistUri);
            return Ok(playlist);
        }

        /// <summary>
        /// given a mood and (optionally) a decade
        /// it generates a playlist (a list of songs, each of them with both echonestSongId and spotifyId)
        /// To further find if there is a resource associated in dbpedia, must call Songs/AssociateWithDbpedia
        /// with each entity
        /// </summary>
        /// <param name="mood"></param>
        /// <param name="decade"></param>
        /// <returns>
        /// a sample responsec can be:
        /// [{
        ///    "Id": null,
        ///    "SpotifyId": "spotify:track:3hte5js2tNis6zLqiKjQQy",
        ///    "EchonestId": "SOCWWXP146123737C1",
        ///    "Name": "The Way You Make Me Feel",
        ///    "ArtistEchonestId": "ARXPPEY1187FB51DF4",
        ///    "ArtistName": "Michael Jackson",
        ///    "Thumbnail": null
        ///  },...]
        /// </returns>
        [HttpGet]
        [Route("api/Playlists/GetByMoodAndDecade")]
        public async Task<IHttpActionResult> GetByMoodAndDecade(string mood, string decade = "")
        {
            var playlist = await echonestEndpoint.GenerateMoodAndDecadePlaylist(mood, decade);
            return Ok(playlist);
        }

        /// <summary>
        /// an example of call would be 
        /// api/Playlists/StartSongRadio?songEchonestId=SOEAJRB14489DDEFE4
        /// given a song id as a seed, it generates a playlist
        ///returns a list of songs, each with its own spotifyId
        ///To further find if there is a resource associated in dbpedia, must call Songs/AssociateWithDbpedia
        ///with each entity
        /// </summary>
        /// <param name="songEchonestId"></param>
        /// <returns>
        /// A sample response would be:
        /// [{
        ///    "Id": null,
        ///    "SpotifyId": "spotify:track:24NkyvPgkyW7aWYrh9H1wZ",
        ///    "EchonestId": "SONCSXR12AF72A7A7B",
        ///    "Name": "Don't Worry Baby",
        ///    "ArtistEchonestId": "AR2DGPY1187FB4CECF",
        ///    "ArtistName": "The Beach Boys",
        ///    "Thumbnail": null
        ///  },...]
        /// </returns>
        [HttpGet]
        [Route("api/Playlists/StartSongRadio")]
        public async Task<IHttpActionResult> StartSongRadio(string songEchonestId)
        {
            var playlist = await echonestEndpoint.GenerateSongPlaylist(songEchonestId);
            return Ok(playlist);
        }
    }
}
