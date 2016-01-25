using BrightstarDB.EntityFramework;

namespace Muxar.BrightStarDb.Models
{
    [Entity]
    public interface IMember
    {
        string Id { get; }
        string FirstName { get; set; }
        string LastName { get; set; }
        string StageName { get; set; }
        [PropertyType("foaf:gender")]
        string Gender { get; set; }
        IArtist Artist { get; set; }
    }
}
