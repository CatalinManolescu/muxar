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
        IArtist Artist { get; set; }
    }
}
