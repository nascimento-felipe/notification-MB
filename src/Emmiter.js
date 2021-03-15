const Emmiter = {
  events: {},

  on(event, cb) {
    Emmiter.events[event] = Emmiter.events[event] || [];
    Emmiter.events[event].push(cb);
  },

  emit(event, ...rest) {
    if (event in Emmiter.events === false) {
      return;
    }

    Emmiter.events[event].forEach((e) => {
      e(...rest);
    });
  },
};

export { Emmiter };
