     'use strict';
     import React, {
       AppRegistry,
       Component,
       Image,
       StyleSheet,
       Text,
       View
     } from 'react-native';

     var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
     var weatherStyles;
     class Location extends Component {
      
       getTemp(temp) {
         var temp; /*Got in Kelvin*/

         if(!this.state.toggleTemp) {
           temp = parseInt(1.8*(temp-273.15)+32)+'<span><sup>o</sup>F</span>'; /*Fahrenheit*/
         } else {
           temp = parseInt(temp-273.15)+'<span><sup>o</sup>C</span>'; /*Celsium*/
         }

         return temp;
       }
       constructor(props) {
         super(props);
         this.state={
              initialPosition: 'unknown', 
              lastPosition: 'unknown', 
         }; 
       }
       componentDidMount() { 

        navigator.geolocation.getCurrentPosition(
         (position) => { 
           var initialPosition = JSON.stringify(position); 
           this.setState({initialPosition}); 
           fetch('http://api.openweathermap.org/data/2.5/weather/', {method: "POST", body:JSON.stringify(
               {lat: position.coords.latitude,
               lon: position.coords.longitude,
               appid: 'a6cb58e2168bcc94fdb23e0c468dc4b8'})
           }).then((response) =>response.json())
           .then((responseData)=>{
              
               if(responseData.weather)
               {
                  switch(responseData.weather[0].icon) {
                      case '01d': data.icon = 'wi wi-day-sunny'; break;
                      case '02d': data.icon = 'wi wi-day-sunny-overcast'; break;
                      case '03d': data.icon = 'wi wi-day-cloudy'; break;
                      case '04d': data.icon = 'wi wi-cloudy'; break;
                      case '09d': data.icon = 'wi wi-rain'; break;
                      case '10d': data.icon = 'wi wi-day-rain'; break;
                      case '11d': data.icon = 'wi wi-thunderstorm'; break;
                      case '13d': data.icon = 'wi wi-day-snowy'; break;
                      
                      case '01n': data.icon = 'wi wi-night-clear'; break;
                      case '02n': data.icon = 'wi wi-night-alt-partly-cloudy'; break;
                      case '03n': data.icon = 'wi wi-night-alt-cloudy'; break;
                      case '04n': data.icon = 'wi wi-night-cloudy'; break;
                      case '09n': data.icon = 'wi icon-drizzle'; break;
                      case '10n': data.icon = 'wi wi-night-alt-hail'; break;
                      case '11n': data.icon = 'wi wi-night-sleet-storm'; break;
                      case '13n': data.icon = 'wi wi-night-snow'; break;
                      case '50d': data.icon = 'wi wi-day-fog'; break;
                      case '50n': data.icon = 'wi wi-night-fog'; break;
                  }
                  switch(responseData.weather[0].icon){
                            case '01d':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://pexels.imgix.net/photos/3032/summer-ray-of-sunshine-bikes-bicycles.jpg?fit=crop&w=1600&h=853")'
                                  }
                                });
                            break;
                            case '01n':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://images.forwallpaper.com/files/thumbs/preview/14/147140__mountain-night-city-lights-lake_p.jpg")'
                                  }
                                });
                           break;
                            case '02d':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("https://newevolutiondesigns.com/images/freebies/nature-hd-background-1.jpg")'
                                  }
                                });
                            break;
                            case '02n':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://cdn.weatheravenue.com/img/background/background-night.jpg")'
                                  }
                                });
                            break;
                            case '03d':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://pexels.imgix.net/photos/2083/city-clouds-cloudy-ray-of-sunshine.jpg?fit=crop&w=1600&h=853")'
                                  }
                                });
                            break;
                            case '03n':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://www.siwallpaper.com/wp-content/uploads/2015/09/night_sky_cloudy_moon_wallpaper.jpg")'
                                  }
                                });
                            break;
                            case '04d':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://pexels.imgix.net/photos/2083/city-clouds-cloudy-ray-of-sunshine.jpg?fit=crop&w=1600&h=853")'
                                  }
                                });
                            break;
                            case '04n':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://www.siwallpaper.com/wp-content/uploads/2015/09/night_sky_cloudy_moon_wallpaper.jpg")'
                                  }
                                });
                            break;
                            case '09d':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853")'
                                  }
                                });
                            break;
                            case '09n':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("https://openbookrk.files.wordpress.com/2015/04/a-highway-bridge-in-a-foggy-rainy-night-hd-wallpaper-509682.jpg")'
                                  }
                                });
                            break;
                             case '10d': 
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853")'
                                  }
                                  });
                            break;
                            case '10n':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://www.hdwallpapersact.com/wp-content/gallery/rainy-night/rainy-night.jpg")'
                                  }
                                  });
                            break;
                            case '11d':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://pexels.imgix.net/photos/2271/clouds-cloudy-field-meadow.jpg?fit=crop&w=1600&h=853")'
                                  }
                                });
                            break;  
                            case '11n':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("https://quoted.space/images/thunderstorm/night-sea-pier-lightning-thunderstorm-night-2116c28ac48a6a7ef42234021f56c955-large-101150.jpg")' 
                                  }
                                });
                            break;
                            case '13d':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://pexels.imgix.net/photos/2377/snow-black-and-white-street-winter.jpg?fit=crop&w=1600&h=853")'
                                  }
                                });
                            break;  
                            case '13n':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://windows10free.org/wp-content/uploads/2015/09/snowy-nights-Background.jpg")'
                                  }
                                });
                            break;  
                            case '50d':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("http://pexels.imgix.net/photos/5230/road-fog-foggy-mist.jpg?fit=crop&w=1600&h=853")'
                                }
                              });
                           break;                                          
                            case '50n':
                                weatherStyles = StyleSheet.create({
                                  body: {
                                    backgroundImage:'url("https://wallpaperscraft.com/image/road_fog_night_haze_gloom_trees_protection_dirt_61255_3840x2160.jpg")'
                                 }
                                  });
                            break;  

                        }

               
                   var date = new Date().toString().match(/(\w+)\s(\d+)/),
                     weather = data.weather[0].description.replace(/\b./g, function(m){ return m.toUpperCase(); });

                   this.setState({
                     class: 'loaded',
                     btnRefreshClass: 'entypo-ccw',
                     toggleTemp: false,
                     children: function() {
                       var temp = this.getTemp(data.main.temp);

                       return (
                         <div className={this.state.class+" widget-container"}>
                           <div className="widget-header">
                             <i className={data.icon}></i>
                           </div>
                           <div className="widget-content">
                             <span title="Click to toggle F/C" className="temp" onClick={(function() { this.setState({toggleTemp: !this.state.toggleTemp}); }).bind(this)} dangerouslySetInnerHTML={{__html: temp}}></span>
                             <span className="date">
                               <span className="month">{date[1]}</span>
                               <i className="day">{date[2].replace(/^0/, '')}</i>
                             </span>
                             <span className="location">
                               <span className="weather">{weather}</span>
                               <i className="city">{data.name+", "+data.sys.country}</i>
                             </span>
                           </div>
                              <ul className="widget-footer">
                                  <li title="Wind (Meters per second)"><i className="wi wi-cloudy-gusts"></i><span>{data.wind.speed} M/s</span></li>
                                  <li title="Humidity (Percent)"><i className="wi wi-humidity"></i><span>{data.main.humidity}%</span></li>
                                  <li title="Sunrise (Local time, 12 Hour format)"><i className="wi wi-sunrise"></i><span>{new Date(data.sys.sunrise*1000).toString().match(/(\d+):(\d+)/)[0]}</span></li>
                                  <li title="Sunset (Local time, 12 Hour format)"><i className="wi wi-sunset"></i><span>{new Date(data.sys.sunset*1000).toString().match(/(\d+):(\d+)/)[0]}</span></li>
                              </ul>
                         </div>
                       );
                     }
                   });

             } //End of if statements
           })
           .done();
         }, 
         (error) => alert(error.message),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000} 
          );
          
       }
       
       render() {
          if(this.state.interval) clearInterval(this.state.interval);
         this.state.interval = setInterval(this.componentDidMount, 1000*60*10);

         return (
           <View id="weather-widget" className={this.state.class} style={styles.container}>
             <View className={"btn-refresh entypo "+this.state.btnRefreshClass} onClick={this.componentDidMount.bind(this)}></View>
             {this.state.children}
           </View>
         );
       }
       
     }

     const styles = StyleSheet.create({
       container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF',
       },
       welcome: {
         fontSize: 20,
         textAlign: 'center',
         margin: 10,
       },
       instructions: {
         textAlign: 'center',
         color: '#333333',
         marginBottom: 5,
       },
       thumbnail: {
         width: 53,
         height: 81,
       },
       title: { fontSize: 20, marginBottom: 8, textAlign: 'center', }, year: { textAlign: 'center', },
     });

     AppRegistry.registerComponent('Location', () => Location);
