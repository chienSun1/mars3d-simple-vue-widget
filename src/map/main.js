//地图创建处理js


//地图创建 
export function createMap(id, config) {
    var viewer = mars3d.createMap({
        id: id,
        data: config.map3d,
        serverURL: config.serverURL,
    });
    return viewer;
}


//初始化外部静态widget功能（兼容使用传统模式开发的一些widget）
export function initStaticWidget(viewer, widget) {
    mars3d.widget.init(viewer, widget);


    //绑定图层管理
    window.bindToLayerControl = function (options) {
        var layer = viewer.mars.addOperationalLayer(options);

        var manageLayersWidget = mars3d.widget.getClass('widgets/manageLayers/widget.js');
        if (manageLayersWidget) {
            manageLayersWidget.addOverlay(options);
        }
        return layer;
    };
    //取消绑定图层管理 ， 参数为bindToLayerControl返回的图层
    window.unbindLayerControl = function (layer) {
        viewer.mars.removeOperationalLayer(layer.config.id);

        var manageLayersWidget = mars3d.widget.getClass('widgets/manageLayers/widget.js');
        if (manageLayersWidget) {
            manageLayersWidget.removeLayer(layer.config.name);
        }
    };
}
