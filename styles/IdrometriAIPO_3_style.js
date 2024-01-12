var size = 0;
var placement = 'point';

var style_IdrometriAIPO_3 = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    var labelText = "";
    size = 0;
    var labelFont = "bold 12px 'Century Gothic', sans-serif";
    var labelFill = "#000";  // Colore del testo: nero
    var labelBackgroundFill = "#fff";  // Colore dello sfondo: bianco
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = -20;
    var placement = 'point';
    
    if (feature.get("Nome") !== null) {
        labelText = String(feature.get("Nome"));
    }
    
    var style = [
        new ol.style.Style({
            image: new ol.style.RegularShape({
                radius: 13.2 + size,
                points: 3,
                stroke: new ol.style.Stroke({
                    color: 'rgba(184,8,8,1.0)',
                    lineDash: null,
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    width: 0
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(184,8,8,1.0)'
                })
            }),
            text: new ol.style.Text({
                text: labelText,
                font: labelFont,
                fill: new ol.style.Fill({
                    color: labelFill
                }),
                backgroundFill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.8)' // Sfondo bianco con opacità
                }),
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                placement: placement
            })
        })
    ];

    return style;
};
