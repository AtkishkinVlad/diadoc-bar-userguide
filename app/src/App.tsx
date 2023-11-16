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
      <h1 style={{
        textWrap: 'pretty'
      }}>Руководство по использованию Диадок.Бар</h1>
    </header>
    <main>
      <p style={{
        textWrap: 'pretty'
      }}>
        Привет, диадоковец 👋
      </p>
      <p style={{
        textWrap: 'pretty'
      }}>
        Ты заглянул на страничку с правилами использования командного холодильника!
      </p>
      <strong style={{
        textWrap: 'pretty'
      }}>
        Есть только одно правило: взял напиток - поставь что-нибудь взамен. 
      </strong>
      <blockquote style={{
        textWrap: 'pretty'
      }}>
        Желательно вкусное и в течение недели <cite>Ярик</cite>
      </blockquote>
      <p style={{
        textWrap: 'pretty'
      }}>
        Приятного распития 😘
      </p>
    </main>
    <footer style={{
        textWrap: 'pretty',
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
