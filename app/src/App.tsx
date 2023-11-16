import { Center } from '@skbkontur/react-ui';

import { WarningCircleIcon24Solid } from '@skbkontur/icons'

function App() {
  return (
    <Center style={{
      display: 'flex',
      flexFlow: 'column wrap',
      height: '100dvh',
      margin: '32px'
    }}>
    <header>
      <h1>Руководство по использованию Диадок.Бар</h1>
    </header>
    <main>
      <p>
        Привет, диадоковец 👋
      </p>
      <p>
        Ты заглянул на страничку с правилами использования командного холодильника!
      </p>
      <strong>
        Есть только одно правило: взял напиток - поставь что-нибудь взамен. 
      </strong>
      <blockquote>
        Желательно вкусное и в течение недели <cite>Ярик</cite>
      </blockquote>
      <p>
        Приятного распития 😘
      </p>
    </main>
    <footer style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: '16px'
      }}>
        <WarningCircleIcon24Solid />
        <p>
          Руководство может меняться в процессе работы
        </p>
    </footer>
    </Center>
  )
}

export default App
