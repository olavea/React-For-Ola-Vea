(function(nx, global) {
    nx.define('demo.TopologyViaApi', nx.ui.Component, {
        view: {
            props: {
                'class': "demo-topology-via-api"
            },
            content: {
                name: 'topology',
                type: 'nx.graphic.Topology',
                props: {
                    showIcon: true,
                    theme: 'green',
                    identityKey: 'id',
                    data: '{#topologyData}',
                    nodeConfig: {
                        iconType: "model.device_type",
                        label: "model.label"
                    }
                }
            }
        },
        properties: {
            topologyData: {}
        },
        methods: {
            init: function(options) {
                this.inherited(options);
                this.loadRemoteData();
            },
            loadRemoteData: function() {
                // CAUTION you must resolve the cross-domain problem in you own environment!
                var URL_TOPOLOGY = 'https://apic-em-cluster-03.cisco.com/api/v0/topology/physical-topology';
                $.ajax({
                    url: URL_TOPOLOGY,
                    success: function(data) {
                        this.topologyData(data.response);
                    }.bind(this)
                });
            }
        }
    });
})(nx, nx.global);
