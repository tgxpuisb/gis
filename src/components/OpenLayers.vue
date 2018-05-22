<template>
    <div class="map" id="map">

    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted () {
      var projExtent = ol.proj.get('EPSG:3857').getExtent();
      /*
      var startResolution = ol.extent.getWidth(projExtent) / 256;
      var resolutions = new Array(22);
      for (var i = 0, ii = resolutions.length; i < ii; ++i) {
        resolutions[i] = startResolution / Math.pow(2, i);
      }
      var tileGrid = new ol.tilegrid.TileGrid({
        extent: [-13884991, 2870341, -7455066, 6338219],
        resolutions: resolutions,
        tileSize: [512, 256]
      });
      */

      var layers = [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS({
            url: 'http://39.106.10.110:8080/geoserver/wms?service=WMS&version=1.1.0&request=GetMap&layers=tasmania&styles=&bbox=143.83482400000003,-43.648056,148.47914100000003,-39.573891&width=768&height=673&srs=EPSG:4326&format=application/openlayers',
            serverType: 'geoserver',
          })
        })
      ];
      var map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
          center: [-10997148, 4569099],
          zoom: 2
        })
      });
    }
}
</script>

<style>
    .map {
        height: 400px;
    }
</style>
