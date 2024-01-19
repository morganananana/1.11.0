
import './App.css'
import Titulo from './Titulo/titulo'
import Mensagem from './Mensagem/mensagem';
const mensagens = [
  {
    mensagem: 'Oi...',
    visualizado: true,
    remetente: false,
  },
  {
    mensagem: 'Tu não me ama mais?',
    visualizado: true,
    remetente: false,
  },
  {
    mensagem: 'Oi, boa tarde.',
    visualizado: false,
    remetente: true,
  },
  {
    mensagem: 'Quem é você mesmo?',
    visualizado: false,
    remetente: true,
  },
];

function App() {
  return (
    <>
      <body>
        <div class="chat">
          <Titulo></Titulo>
          <div class="content">
            <ul>
              <Mensagem mensagem={"Hi honey"} visualizado={true} remetente={false}/>
              <Mensagem mensagem={"You don't love me anymore?"} visualizado={true} remetente={false}/>
              <Mensagem mensagem={"no."} visualizado={false} remetente={true}/>
              <Mensagem mensagem={"cry"} visualizado={false} remetente={true}/>
            </ul>
          </div>
        </div>
      </body>
    </>
  )
}

export default App