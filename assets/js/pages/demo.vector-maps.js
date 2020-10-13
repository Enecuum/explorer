!function(a) {
  "use strict";
  var n=function() {}
  ;
  n.prototype.init=function() {
      a("#world-map-markers").vectorMap( {
          map:"world_mill_en", normalizeFunction:"polynomial", hoverOpacity:.7, hoverColor:!1, regionStyle: {
              initial: {
                  fill: "#e3eaef"
              }
          }
          , markerStyle: {
              initial: {
                  r: 9, fill: "#727cf5", "fill-opacity": .9, stroke: "#fff", "stroke-width": 7, "stroke-opacity": .4
              }
              , hover: {
                  stroke: "#fff", "fill-opacity": 1, "stroke-width": 1.5
              }
          }
          , backgroundColor:"transparent", markers:[  {
              latLng: [49.452, 11.0767], name: "Nuremberg"
          }, {
              latLng: [40.0992, -83.1141], name: "Dublin"
          }, {
              latLng: [60.1733, 24.941], name: "Helsinki"
          }, {
              latLng: [60.404, 25.0131], name: "Tuusula"
          }, {
              latLng: [49.1247, 10.7806], name: "Gunzenhausen"
          },
          ]
      }
      )
  }
  ,
  a.VectorMap=new n,
  a.VectorMap.Constructor=n
}

(window.jQuery),
function(a) {
  "use strict";
  window.jQuery.VectorMap.init()
}

();