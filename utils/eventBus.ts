class _EventBus {
  bus: {
    [key: string]: Function;
  } = {};

  $off(id: string) {
    delete this.bus[id];
  }

  $on(id: string, callback: Function) {
    this.bus[id] = callback;
  }

  $emit(id: string, ...params: any) {
    if (this.bus[id]) this.bus[id](...params);
  }
}

export const EventBus = new _EventBus();
