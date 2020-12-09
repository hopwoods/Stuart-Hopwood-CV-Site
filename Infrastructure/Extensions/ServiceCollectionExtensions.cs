using Application.Interfaces;
using Core.Entities;
using Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Extensions
{
    /// <summary>
    /// 
    /// </summary>
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// Extension method to add and register the API services to a service collection. 
        /// </summary>
        /// <param name="serviceCollection">The service collection to which the services will be registered with.</param>
        /// <returns></returns>
        public static IServiceCollection AddApiServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<ISkillRepository<Skill>, SkillRepository<Skill>>();

            return serviceCollection;
        }
    }
}