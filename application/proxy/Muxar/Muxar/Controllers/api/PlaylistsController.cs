using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Muxar.BrightStarDb.Endpoints;
using Muxar.EntitiesDto;

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

        [HttpGet]
        [Route("api/Playlists/GetByGenre")]
        public async Task<IHttpActionResult> GetByGenre(string genreLabel)
        {
            //query echonest for artists ranked by hotttness
            //query local db to find if already know info about artists
            //query dbpedia to complete info about artists and store info where nedeed
            //query echonest for playlist generation

            return Ok();
        }

        [HttpGet]
        [Route("api/Playlists/GetByArtist")]
        public async Task<IHttpActionResult> GetByArtist(string artistUri)
        {
            var playlist = await echonestEndpoint.GenerateArtistPlaylist(artistUri);
            return Ok(playlist);
        }

        [HttpGet]
        [Route("api/Playlists/StartSongRadio")]
        public async Task<IHttpActionResult> StartSongRadio(string songEchonestId)
        {
            //query echonest for playlist generation;
            return Ok();
        }

        [HttpPost]
        [Route("api/Playlists/Create")]
        public async Task<IHttpActionResult> Create(string playListName, [FromBody] SongDto song)
        {
            //create new playlist -> owner is user;
            //add song to local db;
            //Add songUri to list;
            return Ok();
        }

        [HttpPost]
        [Route("api/Playlists/AddSong")]
        public async Task<IHttpActionResult> AddSong(string playListUri, [FromBody] SongDto song)
        {
            //create new playlist -> owner is user;
            //add song to local db if does not exist yet;
            //Add songUri to list;
            return Ok();
        }

        [HttpPut]
        [Route("api/Playlists/Update")]
        public async Task<IHttpActionResult> Update(string playlistUri, [FromBody] IList<string> songUris)
        {
            //get users playlist from local db;
            //update songs uris;
            return Ok();
        }

        [HttpDelete]
        [Route("api/Playlists/Delete")]
        public async Task<IHttpActionResult> Delete(string playlistUri)
        {
            //get users playlist from local db;
            //delete;
            return Ok();
        }

        [HttpPut]
        [Route("api/Playlists/Follow")]
        public async Task<IHttpActionResult> Follow(string playlistUri)
        {
            //add playlist's uri to users following list;
            return Ok();
        }
    }
}
