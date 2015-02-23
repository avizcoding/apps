var infrastructure;
(function (infrastructure) {
    var EventAggregator;
    (function (EventAggregator) {
        var EventFactory = (function () {
            function EventFactory() {
            }
            Object.defineProperty(EventFactory, "current", {
                get: function () {
                    return EventFactory._current;
                },
                set: function (factory) {
                    EventFactory._current = factory;
                },
                enumerable: true,
                configurable: true
            });
            return EventFactory;
        })();
        EventAggregator.EventFactory = EventFactory;
        var EventAggregatorFactory = (function () {
            function EventAggregatorFactory() {
            }
            Object.defineProperty(EventAggregatorFactory, "current", {
                get: function () {
                    return EventAggregatorFactory._current;
                },
                set: function (factory) {
                    EventAggregatorFactory._current = factory;
                },
                enumerable: true,
                configurable: true
            });
            return EventAggregatorFactory;
        })();
        EventAggregator.EventAggregatorFactory = EventAggregatorFactory;
    })(EventAggregator = infrastructure.EventAggregator || (infrastructure.EventAggregator = {}));
})(infrastructure || (infrastructure = {}));
