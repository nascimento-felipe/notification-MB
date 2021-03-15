import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emmiter } from './Emmiter.js';

const notify = Notifyer.notify({
  title: 'Hora do Post',
  body: 'Crie algum post pra ajudar a comunidade',
});

const App = {
  async start() {
    try {
      await Notifyer.init();

      Emmiter.on('countdown-start', notify);

      Emmiter.on('countdown-end', Timer.init);

      Timer.init();
    } catch (error) {
      console.log(error.message);
    }
  },
};

export { App };
