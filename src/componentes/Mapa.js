import React, { Component} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import GoogleMaps from 'simple-react-google-maps';
import credential from '../credential';


export default class Mapa extends Component {
    constructor(props){
        super(props);
        this.state ={
            latitude: null,
            longitude:null
        };
        this.getLocation =this.getLocation.bind(this);
        this.getCoordinates =this.getCoordinates.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
          alert("Geolocation is not supported by this browser.")
        }
      }

      getCoordinates(position){
          console.log(position.coords.latitude)
          this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
          })
      }

    render() {
        return (
            <Card sx={{ maxWidth: 545, margin:'2rem', padding: '2rem'}} alignItems="center">
                <CardContent>
               {
                   this.state.latitude && this.state.longitude ?
                   <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${credential.mapsKey}`} alt='' />
                   :
                   null
               }
               {
                   this.state.latitude && this.state.longitude ?
                   <div display= "flex" justifyContent="center">
                   <GoogleMaps
                       apiKey={credential.mapsKey} 
                       style={{ height: "400px", width: "300px" }}
                       zoom={12}
                       center={{
                           lat: this.state.latitude,
                           lng: this.state.longitude
                       }}
                       markers={{ lat: this.state.latitude, lng: this.state.longitude }}
                   />
               </div>
                   :
                   null
               }
               

                <div className="input-field col s12">
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
                </div>
                </CardContent>
                <CardActions style={{display: 'flex', justifyContent: 'right'}}>
                <Button
                    disableElevation
                    variant="contained"
                    onClick={this.getLocation}>
                        GET MY LOCATION
                </Button>
                </CardActions>
            
            </Card>

        );
    }
}