module infrastructure.EventAggregator {
    export interface IEventAggregator{
        publish<T>(channel: string, event: string, payload: T): IEventAggregator;
        subscribe<T>(channel: string, event: string, handler: (channel: string, event: string, payload: T) => any, context: any): IEventAggregator;
        unsubscribe<T>(channel: string, event: string, handler: (channel: string, event: string, payload: T) => any, context: any): IEventAggregator;
    }
    export interface IEventFactory {
        setEvent(defaultValues?: any): any;
    }
    export interface IEventAggregatorFactory {
        createEventAggregator(defaultValues?: any): any;
    }

    export class EventFactory {
        private static _current: IEventFactory;
        public static get current(): IEventFactory {
            return EventFactory._current;
        }
        public static set current(factory: IEventFactory) {
            EventFactory._current = factory;
        }
    }

    export class EventAggregatorFactory {
        private static _current: IEventAggregatorFactory;
        public static get current(): IEventAggregatorFactory {
            return EventAggregatorFactory._current;
        }
        public static set current(factory: IEventAggregatorFactory) {
            EventAggregatorFactory._current = factory;
        }
    }
} 