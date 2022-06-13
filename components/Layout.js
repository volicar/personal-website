import Head from 'next/head'

const Layout = ({ children}) => {
  return (
   
    <>
      <Head>
        <title>Vinícius Olicar</title>
      </Head>
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout;