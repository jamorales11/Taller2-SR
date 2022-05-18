import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  location = {lat:0, lng:0};
  
  label = {
    color:"black",
    text:"Marcador"
  };

  recomendaciones2 : any[] = [
    {
        "name": "Wonder Cuts",
        "address": "225 Veterans Memorial Blvd",
        "city": "Metairie",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 30.0020397,
        "longitude": -90.1254069
    },
    {
        "name": "K9 Second Line",
        "address": "",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 30.0123342503,
        "longitude": -90.1566817159
    },
    {
        "name": "HELI CO. New Orleans",
        "address": "",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 30.03905646,
        "longitude": -90.020572365
    },
    {
        "name": "Pete Broussard Massage Therapy",
        "address": "3925 North I-10 Service Rd W, Ste 109S",
        "city": "Metairie",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 29.9993218,
        "longitude": -90.1729837
    },
    {
        "name": "Victoria's Nails",
        "address": "2317 Metairie Rd",
        "city": "Metairie",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 29.9836569,
        "longitude": -90.1495171
    },
    {
        "name": "Gerber Collision & Glass",
        "address": "4047 S Carrollton Ave",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 29.9687345584,
        "longitude": -90.1073643221
    },
    {
        "name": "Redd's Uptilly Tavern",
        "address": "7601 Maple St",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 29.9414229,
        "longitude": -90.1286875
    },
    {
        "name": "Kathy's Nails",
        "address": "3116 Magazine St",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 29.924157,
        "longitude": -90.085724
    },
    {
        "name": "Unique General Store",
        "address": "127 Royal St",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 29.9539123,
        "longitude": -90.0686731
    },
    {
        "name": "Magnolia Bridge",
        "address": "Corner Of Moss And Harding St",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 5,
        "latitude": 29.9809294343,
        "longitude": -90.0887735395
    },
    {
        "name": "Green To Go",
        "address": "400 Poydras St, Ste 130",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 7.3513513514,
        "latitude": 29.9478536751,
        "longitude": -90.0681765607
    },
    {
        "name": "She She's",
        "address": "9000 Chef Menteur Hwy, Ste M",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 7.3513513514,
        "latitude": 30.014728472,
        "longitude": -89.9806883013
    },
    {
        "name": "Ann Becnel Companion Dogs",
        "address": "6107 W End Blvd",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 7.3513513514,
        "latitude": 30.0017108,
        "longitude": -90.1146572
    },
    {
        "name": "New Orleans Public Library",
        "address": "219 Loyola Ave",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 7.3513513514,
        "latitude": 29.9544731,
        "longitude": -90.0756622
    },
    {
        "name": "El Pavo Real",
        "address": "4401 S Broad Ave",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 7.3513513514,
        "latitude": 29.9491260251,
        "longitude": -90.1044203379
    },
    {
        "name": "Elysian Fields Animal Clinic",
        "address": "4237 Elysian Fields Ave",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 7.3513513514,
        "latitude": 30.0019130082,
        "longitude": -90.0591484085
    },
    {
        "name": "The Stacks, Art and Design Bookstore",
        "address": "900 Camp St",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 7.3513513514,
        "latitude": 29.9435888,
        "longitude": -90.0705161
    },
    {
        "name": "Pete Broussard Massage Therapy",
        "address": "3925 North I-10 Service Rd W, Ste 109S",
        "city": "Metairie",
        "state": "LA",
        "review_stars_predicted": 7.3513513514,
        "latitude": 29.9993218,
        "longitude": -90.1729837
    },
    {
        "name": "Blo Blow Dry Bar",
        "address": "5530 Magazine St",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 6.3513513514,
        "latitude": 29.9209431,
        "longitude": -90.1168278
    },
    {
        "name": "Cupcake Fairies",
        "address": "2511 Bayou Rd",
        "city": "New Orleans",
        "state": "LA",
        "review_stars_predicted": 6.3513513514,
        "latitude": 29.976258,
        "longitude": -90.076105
    }
  ];


  



  constructor() { 
    let lat_min = Number.MAX_SAFE_INTEGER;
    let lat_max = Number.MIN_SAFE_INTEGER;
    let lng_min = Number.MAX_SAFE_INTEGER;
    let lng_max = Number.MIN_SAFE_INTEGER; 

    this.recomendaciones2.forEach(element => {
        if(element["latitude"] > lat_max ){
          lat_max = element["latitude"];
        }

        if(element["latitude"] < lat_min ){
          lat_min = element["latitude"];
        }

        if(element["longitude"] > lng_max ){
          lng_max = element["longitude"];
        }

        if(element["longitude"] < lng_min ){
          lng_min = element["longitude"];
        }
      });

    let latCenter = (lat_max + lat_min) / 2.0;
    let lngCenter = (lng_max + lng_min) / 2.0;

    console.log(lat_max);
    console.log(lat_min);
    console.log(latCenter);

    console.log(lng_max);
    console.log(lng_min);
    console.log(lngCenter);



    this.location = { lat: latCenter, lng: lngCenter};
  }

  ngOnInit(): void {

  }



}
