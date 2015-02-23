module infrastructure.EventAggregator {

    jQuery.sap.require("movieDB.src.infrastructure.EventAggregator.IEventAggregator");

    export class SapEventAggregator implements infrastructure.EventAggregator.IEventAggregator {
        private eventBus: any;
        constructor() {
            this.eventBus = sap.ui.getCore().getEventBus();
        }
        public subscribe<T>(channel: string, event: string, handler: (channel: string, event: string, payload: T) => any, context: any): infrastructure.EventAggregator.IEventAggregator {
             this.eventBus.subscribe(channel, event, handler, context);
             return this;
        }
        public unsubscribe<T>(channel: string, event: string, handler: () => any, context: any): infrastructure.EventAggregator.IEventAggregator {
            this.eventBus.unsubscribe(channel, event, handler, context);
            return this;
        }
        public publish<T>(channel: string, event: string, payload: T): infrastructure.EventAggregator.IEventAggregator {
             this.eventBus.publish(channel, event, payload);
             return this;
        }
        public static singleton: SapEventAggregator = new SapEventAggregator();
    }

}