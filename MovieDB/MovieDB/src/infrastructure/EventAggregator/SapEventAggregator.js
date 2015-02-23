var infrastructure;
(function (infrastructure) {
    var EventAggregator;
    (function (EventAggregator) {
        jQuery.sap.require("movieDB.src.infrastructure.EventAggregator.IEventAggregator");
        var SapEventAggregator = (function () {
            function SapEventAggregator() {
                this.eventBus = sap.ui.getCore().getEventBus();
            }
            SapEventAggregator.prototype.subscribe = function (channel, event, handler, context) {
                this.eventBus.subscribe(channel, event, handler, context);
                return this;
            };
            SapEventAggregator.prototype.unsubscribe = function (channel, event, handler, context) {
                this.eventBus.unsubscribe(channel, event, handler, context);
                return this;
            };
            SapEventAggregator.prototype.publish = function (channel, event, payload) {
                this.eventBus.publish(channel, event, payload);
                return this;
            };
            SapEventAggregator.singleton = new SapEventAggregator();
            return SapEventAggregator;
        })();
        EventAggregator.SapEventAggregator = SapEventAggregator;
    })(EventAggregator = infrastructure.EventAggregator || (infrastructure.EventAggregator = {}));
})(infrastructure || (infrastructure = {}));
