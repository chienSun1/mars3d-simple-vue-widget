<template>
  <div id="cesiumContainer" class="cesium-container"></div>
</template>

<script>
import { getMapConfig,getWidgetConfig } from "../map/api";
import { createMap,initStaticWidget } from "../map/main";

export default {
  name: "cesiumContainer",
  mounted() {
    getMapConfig().then(data => {
      var viewer = createMap("cesiumContainer", data);
      window.viewer = viewer; //绑定到全局，widgets目录用
 
      getWidgetConfig().then(widgetdata => { 
        initStaticWidget(viewer, widgetdata); 
      });

    });
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style >
.cesium-container {
  width: 100%;
  height: 100%;
}

/**cesium按钮背景色*/
.cesium-button {
    background-color: #3f4854;
    color: #e6e6e6;
    fill: #e6e6e6;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.cesium-viewer-geocoderContainer .cesium-geocoder-input {
    background-color: rgba(63, 72, 84, 0.7);
}

.cesium-viewer-geocoderContainer .cesium-geocoder-input:focus {
    background-color: rgba(63, 72, 84, 0.9);
}

.cesium-viewer-geocoderContainer .search-results {
    background-color: #3f4854;
}

.cesium-geocoder-searchButton {
    background-color: #3f4854;
}

.cesium-infoBox-title {
    background-color: #3f4854;
}

.cesium-infoBox {
    background: rgba(63, 72, 84, 0.9);
}
 .cesium-toolbar-button img{
     height:100%;
 }
 
.cesium-performanceDisplay-defaultContainer {
    top: auto;
    bottom: 35px;
}


/**cesium工具栏位置*/
.cesium-viewer-toolbar {
    top: auto;
    left: auto;
    right: 12px;
    bottom: 35px;
}

.cesium-viewer-toolbar>.cesium-toolbar-button,
.cesium-navigationHelpButton-wrapper,
.cesium-viewer-geocoderContainer {
    margin-bottom: 5px;
    float: right;
    clear: both;
    text-align: center;
}

.cesium-baseLayerPicker-dropDown {
    bottom: 0;
    right: 40px;
    max-height: 700px;
    margin-bottom: 5px;
}

.cesium-navigation-help {
    top: auto;
    bottom: 0;
    right: 40px;
    transform-origin: right bottom;
}

.cesium-sceneModePicker-wrapper {
    width: auto;
}

.cesium-sceneModePicker-wrapper .cesium-sceneModePicker-dropDown-icon {
    float: left;
    margin: 0 3px;
}

.cesium-viewer-geocoderContainer .search-results {
    left: 0;
    right: 40px;
    width: auto;
    z-index: 9999;
}

.cesium-infoBox-title {
    background-color: #3f4854;
}

.cesium-infoBox {
    top: 50px;
    background: rgba(63, 72, 84, 0.9);
}

/**左下工具栏菜单*/
.toolbar-dropdown-menu-div {
    background: rgba(43, 44, 47, 0.8);
    border: 1px solid #2b2c2f;
 
    z-index: 991;
    position: absolute;
    right: 60px;
    bottom: 40px;
    display:none;
}

.toolbar-dropdown-menu { 
    min-width: 110px; 
    padding: 0;
}
.toolbar-dropdown-menu > li {
    padding: 0 3px;
    margin: 2px 0;
}
.toolbar-dropdown-menu > li > a {
    color: #edffff;
    display: block;
    padding: 4px 10px;
    clear: both;
    font-weight: normal;
    line-height: 1.6;
    white-space: nowrap;
    text-decoration: none;
}

.toolbar-dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: #444d59;
}

.toolbar-dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #444d59;
}

.toolbar-dropdown-menu i {
    padding-right: 5px;
}

</style>