'use strict';
import React, {
 AppRegistry,
 Component,
 Image,
 StyleSheet,
 Text,
 View,
 Click
} from 'react-native';

var temp, bgImage,date,cLat=0,cLong=0,flag=0;
class Location extends Component {
  updatelocation(position)
   {
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

          temp = responseData.main.temp;
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
   }
   getTemp(temp) {
     var temp; /*Got in Kelvin*/
     if(!this.state.toggleTemp) {
       temp = parseInt(1.8*(temp-273.15)+32)+'F'; /*Fahrenheit*/
     } else {
       temp = parseInt(temp-273.15)+'C'; /*Celsium*/
     }

     return temp;
   }
  toggle() {
      this.setState({toggleTemp: !this.state.toggleTemp});
   }
   constructor(props) {
     super(props);

     this.state={
          initialPosition: 'unknown', 
          lastPosition: 'unknown', 
     }; 
   }
   componentDidMount() { 
    navigator.geolocation.watchPosition((position)=>
    {
      if((cLat-position.coords.latitude)^2+(cLong-position.coords.longitude)^2>1000) 
        flag=1;
      if(flag==0)
      {
          cLat=position.coords.latitude;
          cLong=position.coords.longitude;
          this.updatelocation(position);
          flag=1;
      }
    },
    (error) => function(){},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000} 
    
    );
    navigator.geolocation.getCurrentPosition(
     (position) => { 
       var initialPosition = JSON.stringify(position); 
       this.setState({initialPosition}); 
        this.updatelocation(position)
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
          <Image source={{uri : bgImage}} style={styles.bgImage} />
          <View className={"btn-refresh entypo "+this.state.btnRefreshClass} ></View>
            <Text style={styles.buttonStyle} onTouchStart={this.componentDidMount.bind(this)}>
              Refresh
            </Text>
           <View className="widget-container" style={styles.widgetcontainer}>
             <View className="widget-header">
               <View className={this.state.icon}>
               </View>
             </View>
             <View className="widget-content" style={styles.widgetcontainer}>
               
               <Text onTouchStart={this.toggle.bind(this)} style={styles.tempText}>
                  {this.getTemp(temp)}
                </Text>
                
               <View className="date" style={styles.dateView}>
                <View className="month"><Text style={styles.dateText}>{this.state.date1}</Text></View>
                 <View className="day"><Text style={styles.dateText}>{this.state.date2}</Text></View>
               </View>
               <View className="location" style={styles.locationView}>
                 <View className="weather" style={styles.container}><Text style={styles.weatherText}>{this.state.weather}</Text></View>
                 <View className="city" style={styles.container}><Text style={styles.locationText}>{this.state.location}</Text></View>
               </View>
             </View>
              <View className="widget-footer" style={styles.widgetFooter}>
                  <Text style={styles.footerText}>{this.state.windspeed}  {this.state.mainhumidity}  {this.state.formattedSunrise}  {this.state.formattedSunset}</Text>
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
     backgroundColor: '#F5FCFF',
     alignItems:"center"
   },
   dateText:{
    fontSize: 20,
    color: "#fff",
   
   },
   footerText: {
     fontSize: 15,
     color: "#fff"
   },
   weatherText: {
     fontSize: 25,
     marginTop: 10,
   },
   locationText: {
     fontSize: 18,
     marginTop: 10, 
   },
   tempText :{
    fontSize:50,
    color : "#0000ff",
   },
   dateView:
   {
     padding:20,
     backgroundColor:"#666",
     alignItems: "center"
   },
   locationView:
   {
      padding:10,
      alignItems: "center"
   },
   widgetFooter:{
     padding:10,
     alignItems:"stretch",
     backgroundColor:"#666"
   }

});

AppRegistry.registerComponent('Location', () => Location);
