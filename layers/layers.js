var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Trattodiintervento_1 = new ol.format.GeoJSON();
var features_Trattodiintervento_1 = format_Trattodiintervento_1.readFeatures(json_Trattodiintervento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trattodiintervento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trattodiintervento_1.addFeatures(features_Trattodiintervento_1);
var lyr_Trattodiintervento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trattodiintervento_1, 
                style: style_Trattodiintervento_1,
                interactive: true,
                title: '<img src="styles/legend/Trattodiintervento_1.png" /> Tratto di intervento'
            });
var format_Lavoriincorso_2 = new ol.format.GeoJSON();
var features_Lavoriincorso_2 = format_Lavoriincorso_2.readFeatures(json_Lavoriincorso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lavoriincorso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lavoriincorso_2.addFeatures(features_Lavoriincorso_2);
var lyr_Lavoriincorso_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lavoriincorso_2, 
                style: style_Lavoriincorso_2,
                interactive: true,
                title: '<img src="styles/legend/Lavoriincorso_2.png" /> Lavori in corso'
            });
var format_IdrometriAIPO_3 = new ol.format.GeoJSON();
var features_IdrometriAIPO_3 = format_IdrometriAIPO_3.readFeatures(json_IdrometriAIPO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdrometriAIPO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdrometriAIPO_3.addFeatures(features_IdrometriAIPO_3);
var lyr_IdrometriAIPO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IdrometriAIPO_3, 
                style: style_IdrometriAIPO_3,
                interactive: true,
                title: '<img src="styles/legend/IdrometriAIPO_3.png" /> Idrometri AIPO'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Trattodiintervento_1.setVisible(true);lyr_Lavoriincorso_2.setVisible(true);lyr_IdrometriAIPO_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Trattodiintervento_1,lyr_Lavoriincorso_2,lyr_IdrometriAIPO_3];
lyr_Trattodiintervento_1.set('fieldAliases', {'id': 'id', });
lyr_Lavoriincorso_2.set('fieldAliases', {'id': 'id', });
lyr_IdrometriAIPO_3.set('fieldAliases', {'Nome': 'Nome', 'Idrometro': 'Idrometro', });
lyr_Trattodiintervento_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Lavoriincorso_2.set('fieldImages', {'id': 'TextEdit', });
lyr_IdrometriAIPO_3.set('fieldImages', {'Nome': 'TextEdit', 'Idrometro': '', });
lyr_Trattodiintervento_1.set('fieldLabels', {'id': 'no label', });
lyr_Lavoriincorso_2.set('fieldLabels', {'id': 'no label', });
lyr_IdrometriAIPO_3.set('fieldLabels', {'Nome': 'header label', 'Idrometro': 'inline label', });
lyr_IdrometriAIPO_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});