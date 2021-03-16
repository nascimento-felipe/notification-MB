import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emmiter } from './Emmiter.js';

const messages = [
  'Crie algum post para ajudar a comunidade',
  'Está na hora de ir para o IG',
  'O post está pronto para ser postado?',
  'Seus seguidores te aguardam!',
  'O chefe dos posts do IG requisita sua presença',
];

const notify = Notifyer.notify({
  title: 'Hora do Post',
  body: messages[Math.floor(Math.random() * (messages.length - 0) - 0)],
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
