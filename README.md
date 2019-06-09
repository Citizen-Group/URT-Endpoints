# Documentation for EndPoint Folder
Endpoints are auto detected
## Style
- GeoJSON
- EPSG:3857 - WGS 84 / Pseudo-Mercator - Projected
## Adding an EndPoint
- Create Folder
- Create a GeoJSON for the EndPoint
- Update properties

### Template
{
  "type": "FeatureCollection",
  "name": "CityBounds",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:EPSG::3857" }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "NAME": "The City of Newberg",
        "DESCRIPTIO": "Bounds of the City of Newberg",
        "LEVEL": "Bounds of the City of Newberg",
        "AGE": "2019-12-30"    
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-8449566.03085504, 5686441.89277737]
          ]
        ]
      }
    }
  ]
}
