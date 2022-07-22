using Microsoft.AspNetCore.Mvc;

namespace keyboard.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(0, 1).Select(index => new WeatherForecast
        {
            Notes = new string[] { "C5", "C5", "G5", "G5", "A5", "A5", "G5", "rest", "F5", "F5", "E5", "E5", "D5", "D5", "C5"}
            //Notes = new string[] {"E6","E6","E6","E5","Eb6","Eb6","Eb6","Eb5","Db6","Db6","Db6","Db5","A5","A5","Ab5","E6"}
        })
        .ToArray();
    }
}

