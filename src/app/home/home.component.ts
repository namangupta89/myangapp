import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { NavComponent } from "../nav/nav.component";
import { MouseEvent } from "@agm/core";
import * as CanvasJS from "canvasjs";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { NgZone } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  users: Object;

  //private chart: am4charts.PieChart;

  constructor(
    private dataService: DataService,
    private navComponent: NavComponent,
    private zone: NgZone
  ) {}

  isLoggedIn = false;

  zoom: number = 8;

  // initial center position for the map
  lat: number = 41.808389;
  lng: number = -71.402476;

  ngOnInit() {
    console.log(this.navComponent.loggedIn);
    this.isLoggedIn = true;
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }

  // mouseOver(m: marker,$event: MouseEvent){
  //   console.log(m, $event);
  // }

  //markers: Mapservic

  markers: marker[] = [
    {
      "serialNumber": "AU534028",
      "model": "DFE28JSHBSS",
      "timestamp": 1415903400000,
      "latitude": "41.808389",
      "longitude": "-71.402476",
      "severity": 1,
      "vehicleId": "8"
    },
    {
      "serialNumber": "FF503491",
      "model": "PYE22PSHSS",
      "timestamp": 1425666600000,
      "latitude": "41.830485",
      "longitude": "-71.418091",
      "severity": 0,
      "vehicleId": "11"
    },
    {
      "serialNumber": "RF513777",
      "model": "CYE22TSHSS",
      "timestamp": 1440441000000,
      "latitude": "41.794382",
      "longitude": "-71.454387",
      "severity": 2,
      "vehicleId": "17"
    },
    {
      "serialNumber": "TG400464",
      "model": "SE25JSHEC",
      "timestamp": 0,
      "latitude": "41.807059",
      "longitude": "-71.389835",
      "severity": 0,
      "vehicleId": "4"
    },
    {
      "serialNumber": "SG518856",
      "model": "GFE28GSKBSS",
      "timestamp": 1475692200000,
      "latitude": "41.835105",
      "longitude": "-71.395573",
      "severity": 0,
      "vehicleId": "16"
    },
    {
      "serialNumber": "AU505754",
      "model": "GFE28HMHES",
      "timestamp": 1412533800000,
      "latitude": "41.859255",
      "longitude": "-71.418097",
      "severity": 0,
      "vehicleId": "14"
    },
    {
      "serialNumber": "SF513945",
      "model": "CFE28TSHSS",
      "timestamp": 1444242600000,
      "latitude": "41.790556",
      "longitude": "-71.392485",
      "severity": 0,
      "vehicleId": "5"
    },
    {
      "serialNumber": "SF513945",
      "model": "CFE28TSHSS",
      "timestamp": 1444242600000,
      "latitude": "41.772453",
      "longitude": "-71.402153",
      "severity": 2,
      "vehicleId": "5"
    },
    {
      "serialNumber": "RF522945",
      "model": "PYE22PSHISS",
      "timestamp": 1441218600000,
      "latitude": "41.794262",
      "longitude": "-71.449579",
      "severity": 0,
      "vehicleId": "5"
    },
    {
      "serialNumber": "TG519967",
      "model": "CFE28USHFSS",
      "timestamp": 1476901800000,
      "latitude": "41.791655",
      "longitude": "-71.459981",
      "severity": 0,
      "vehicleId": "7"
    },
    {
      "serialNumber": "TG519967",
      "model": "CFE28USHFSS",
      "timestamp": 1476901800000,
      "latitude": "41.834275",
      "longitude": "-71.44992",
      "severity": 2,
      "vehicleId": "7"
    },
    {
      "serialNumber": "GG504997",
      "model": "CYE22USHESS",
      "timestamp": 1460313000000,
      "latitude": "41.808637",
      "longitude": "-71.431589",
      "severity": 0,
      "vehicleId": "17"
    },
    {
      "serialNumber": "HG504743",
      "model": "CFE28USHESS",
      "timestamp": 1463423400000,
      "latitude": "41.786661",
      "longitude": "-71.413474",
      "severity": 0,
      "vehicleId": "3"
    }

  ];

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Themes begin
      // Themes end

      // Create chart instance
      let chart = am4core.create("chartdiv", am4charts.PieChart);

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";

      // Let's cut a hole in our Pie chart the size of 30% the radius
      chart.innerRadius = am4core.percent(30);

      // Put a thick white border around each Slice
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      // change the cursor on hover to make it apparent the object can be interacted with
      pieSeries.slices.template.cursorOverStyle = [
        {
          property: "cursor",
          value: "pointer"
        }
      ];

      pieSeries.alignLabels = false;
      pieSeries.labels.template.disabled = true;
      pieSeries.labels.template.bent = true;
      pieSeries.labels.template.radius = 3;
      pieSeries.labels.template.padding(0, 0, 0, 0);

      pieSeries.ticks.template.disabled = true;

      // Create a base filter effect (as if it's not there) for the hover to return to
      let shadow = pieSeries.slices.template.filters.push(
        new am4core.DropShadowFilter()
      );
      shadow.opacity = 0;

      // Create hover state
      let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

      // Slightly shift the shadow and make it more prominent on hover
      let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
      hoverShadow.opacity = 0.7;
      hoverShadow.blur = 5;

      // Add a legend
      chart.legend = new am4charts.Legend();

      chart.data = [
        {
          country: "O-Load",
          litres: 10
        },
        {
          country: "C-Load",
          litres: 20
        },
        {
          country: "U-Load",
          litres: 4
        },
        {
          country: "No-Load",
          litres: 2
        }
      ];
    });
  }
}

// just an interface for type safety.
interface marker {
  serialNumber: string;
  model: string;
  timestamp: number;
  latitude: string;
  longitude: string;
  severity: number;
  vehicleId: string;
}
