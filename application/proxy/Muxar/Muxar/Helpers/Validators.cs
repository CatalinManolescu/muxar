namespace Muxar.Helpers
{
    public class Validators
    {
        public static bool StringInputValidator(string artistLabel)
        {
            return string.IsNullOrEmpty(artistLabel) || string.IsNullOrWhiteSpace(artistLabel);
        }
    }
}