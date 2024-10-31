import Header from '../Header/Header'
import Primary from '../Main/Primary/Primary'
import Default from '../Main/Default/Default'
import Danger from '../Main/Danger/Danger'
import Warning from '../Main/Warning/Warning'
import Success from '../Main/Success/Success'

function Webpage() {
  return (
    <body className='mt-16 mx-40'>
        <header>
            <Header />
        </header>

        <main>
            <Primary />

            <Default />

            <Danger />

            <Warning />

            <Success />
        </main>
    </body>
  )
}

export default Webpage