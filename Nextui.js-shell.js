(function (nx) {
    /**
     * define application
     */
    var Shell = nx.define(nx.ui.Application, {
        methods: {
            start: function () {
                //your application main entry

                var topo = new nx.graphic.Topology({
                    width: 580,
                    height: 580,
                    nodeConfig: {
                        label: 'model.name'
                    },
                    showIcon: true
                });

                topo.data(topologyData);
                topo.attach(this);

                topo.on('topologyGenerated', function () {
                    var links1 = [topo.getLink(0), topo.getLink(3), topo.getLink(7)];
                    var path1 = new nx.graphic.Topology.Path({
                        links: links1,
                        arrow: 'cap'
                    });

                    var pathLayer = topo.getLayer("paths");
                    pathLayer.addPath(path1);
                });
            }
        }
    });

    /**
     * create application instance
     */
    var shell = new Shell();

    /**
     * invoke start method
     */
    shell.start();
})(nx);
