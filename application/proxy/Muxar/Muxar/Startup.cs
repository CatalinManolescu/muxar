using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Muxar.Startup))]
namespace Muxar
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
