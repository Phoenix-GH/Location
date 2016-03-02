           'use strict';
           import React, {
             AppRegistry,
             Component,
             Image,
             StyleSheet,
             Text,
             View
           } from 'react-native';

           var temp, bgImage,date;
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
                 
                 fetch('http://api.openweathermap.org/data/2.5/weather/?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid=a6cb58e2168bcc94fdb23e0c468dc4b8')
                 .then((response) =>response.json())
                 .then((responseData)=>{
                    
                   
                       
                        switch(responseData.weather[0].icon) {
                            case '01d': responseData.icon = 'wi wi-day-sunny'; break;
                            case '02d': responseData.icon = 'wi wi-day-sunny-overcast'; break;
                            case '03d': responseData.icon = 'wi wi-day-cloudy'; break;
                            case '04d': responseData.icon = 'wi wi-cloudy'; break;
                            case '09d': responseData.icon = 'wi wi-rain'; break;
                            case '10d': responseData.icon = 'wi wi-day-rain'; break;
                            case '11d': responseData.icon = 'wi wi-thunderstorm'; break;
                            case '13d': responseData.icon = 'wi wi-day-snowy'; break;
                            
                            case '01n': responseData.icon = 'wi wi-night-clear'; break;
                            case '02n': responseData.icon = 'wi wi-night-alt-partly-cloudy'; break;
                            case '03n': responseData.icon = 'wi wi-night-alt-cloudy'; break;
                            case '04n': responseData.icon = 'wi wi-night-cloudy'; break;
                            case '09n': responseData.icon = 'wi icon-drizzle'; break;
                            case '10n': responseData.icon = 'wi wi-night-alt-hail'; break;
                            case '11n': responseData.icon = 'wi wi-night-sleet-storm'; break;
                            case '13n': responseData.icon = 'wi wi-night-snow'; break;
                            case '50d': responseData.icon = 'wi wi-day-fog'; break;
                            case '50n': responseData.icon = 'wi wi-night-fog'; break;
                        }
                        switch(responseData.weather[0].icon){
                            case '01d':
                                  bgImage="http://pexels.imgix.net/photos/3032/summer-ray-of-sunshine-bikes-bicycles.jpg?fit=crop&w=1600&h=853";
                                
                            break;
                            case '01n':
                                
                                 bgImage="http://images.forwallpaper.com/files/thumbs/preview/14/147140__mountain-night-city-lights-lake_p.jpg";
                                  
                           break;
                            case '02d':
                                bgImage="https://newevolutiondesigns.com/images/freebies/nature-hd-background-1.jpg";
                                
                            break;
                            case '02n':
                                bgImage="http://cdn.weatheravenue.com/img/background/background-night.jpg";
                                 
                            break;
                            case '03d':
                                bgImage="http://pexels.imgix.net/photos/2083/city-clouds-cloudy-ray-of-sunshine.jpg?fit=crop&w=1600&h=853";
                        
                            break;
                            case '03n':
                                bgImage="http://www.siwallpaper.com/wp-content/uploads/2015/09/night_sky_cloudy_moon_wallpaper.jpg";
                                  
                            break;
                            case '04d':
                               bgImage="http://pexels.imgix.net/photos/2083/city-clouds-cloudy-ray-of-sunshine.jpg?fit=crop&w=1600&h=853";
                                 
                            break;
                            case '04n':
                               bgImage="http://www.siwallpaper.com/wp-content/uploads/2015/09/night_sky_cloudy_moon_wallpaper.jpg";
                          
                            break;
                            case '09d':
                                bgImage="http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853";
                                
                            break;
                            case '09n':
                                bgImage="https://openbookrk.files.wordpress.com/2015/04/a-highway-bridge-in-a-foggy-rainy-night-hd-wallpaper-509682.jpg";
                                
                            break;
                             case '10d': 
                                bgImage="http://pexels.imgix.net/photos/1551/field-thunderstorm-rainy-meadow.jpg?fit=crop&w=1600&h=853";
                                  
                            break;
                            case '10n':
                                bgImage="http://www.hdwallpapersact.com/wp-content/gallery/rainy-night/rainy-night.jpg";
                                 
                            break;
                            case '11d':
                                bgImage="http://pexels.imgix.net/photos/2271/clouds-cloudy-field-meadow.jpg?fit=crop&w=1600&h=853";
                                
                            break;  
                            case '11n':
                                bgImage="https://quoted.space/images/thunderstorm/night-sea-pier-lightning-thunderstorm-night-2116c28ac48a6a7ef42234021f56c955-large-101150.jpg";
                            break;
                            case '13d':
                                bgImage="http://pexels.imgix.net/photos/2377/snow-black-and-white-street-winter.jpg?fit=crop&w=1600&h=853";
                            break;  
                            case '13n':
                               bgImage="http://windows10free.org/wp-content/uploads/2015/09/snowy-nights-Background.jpg";
                            break;  
                            case '50d':
                                bgImage="http://pexels.imgix.net/photos/5230/road-fog-foggy-mist.jpg?fit=crop&w=1600&h=853";
                            break;                                          
                            case '50n':
                                bgImage="https://wallpaperscraft.com/image/road_fog_night_haze_gloom_trees_protection_dirt_61255_3840x2160.jpg";
                            break;  
                        }

                       var date = new Date().toString().match(/(\w+)\s(\d+)/),
                         weather = responseData.weather[0].description.replace(/\b./g, function(m){ return m.toUpperCase(); });

                        temp = this.getTemp(responseData.main.temp);
                         this.setState({
                           class: 'loaded',
                           btnRefreshClass: 'entypo-ccw',
                           toggleTemp: false,
                           responseData: responseData,
                           date1 : date[1],
                           date2: date[2].replace(/^0/, ''),
                           weather: weather,
                           name : responseData.name,
                           country : responseData.sys.country,
                           sunrise : responseData.sys.sunrise,
                           windspeed: responseData.wind.speed+" M/s",
                           mainhumidity : responseData.main.humidity+"%",
                           sunset : responseData.sys.sunset,
                           location : responseData.name+", "+responseData.sys.country,
                           formattedSunrise :new Date(responseData.sys.sunrise*1000).toString().match(/(\d+):(\d+)/)[0],
                           formattedSunset : new Date(responseData.sys.sunset*1000).toString().match(/(\d+):(\d+)/)[0]
                         });
                 })
                 .done();
               }, 
               (error) => alert(error.message),
                {enableHighAccuracy: true, timeout: 20, maximumAge: 1000} 
                );
                
             }
             
             render() {
                if(this.state.interval) clearInterval(this.state.interval);
                this.state.interval = setInterval(this.componentDidMount, 1000*60*10);

                return (
                  <View id="weather-widget" className={this.state.class} style={styles.container}>
                    <Image source={{uri : bgImage}} style={styles.bgImage} />
                    <View className={"btn-refresh entypo "+this.state.btnRefreshClass} onClick={this.componentDidMount.bind(this)}></View>
                  
                     <View className="widget-container" style={styles.widgetcontainer}>
                       <View className="widget-header">
                         <View className={this.state.icon}>
                         </View>
                       </View>
                       <View className="widget-content">
                         <View title="Click to toggle F/C" className="temp" onClick={(function() { this.setState({toggleTemp: !this.state.toggleTemp}); }).bind(this)} dangerouslySetInnerHTML={{__html: temp}}>
                         
                          </View>
                         <View className="date">
                          <View className="month"><Text style={styles.dateStyle}>{this.state.date1}</Text></View>
                           <View className="day"><Text style={styles.dateStyle}>{this.state.date2}</Text></View>
                         </View>
                         <View className="location">
                           <View className="weather"><Text style={styles.textStyle}>{this.state.weather}</Text></View>
                           <View className="city"><Text style={styles.textStyle}>{this.state.location}</Text></View>
                         </View>
                       </View>
                        <View className="widget-footer">
                            <Text style={styles.textStyle}>{this.state.windspeed}</Text>
                            <Text style={styles.textStyle}>{this.state.mainhumidity}</Text>
                            
                            <Text style={styles.textStyle}>
                                {this.state.formattedSunrise}
                            </Text>
                               
                            <Text style={styles.textStyle}>
                              {this.state.formattedSunset}
                            </Text>
                            
                        </View>
                     </View>
                    
                 </View>
               );
             }
             
           }

           const styles = StyleSheet.create({
              widgetcontainer:
              {
                  backgroundColor : '#ffffff',
                  alignItems:'center',
                  flex:1,
              },
              bgImage: {
               
                  flex: 1,
                  resizeMode: "cover",
                  alignItems:"center"
              },
             container: {
               flex: 1,
               alignItems: 'stretch',
               backgroundColor: '#F5FCFF',
             },
             dateStyle:{
              fontSize: 20,
               
             },
             textStyle: {

               fontSize: 20,
               marginTop: 10,
             },
           
           });

           AppRegistry.registerComponent('Location', () => Location);
