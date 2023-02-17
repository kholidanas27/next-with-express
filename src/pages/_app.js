import Head from "next/head";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Alert } from "../app/components";

export default App;

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js 10 - CRUD Example with React Hook Form</title>
      </Head>

      <div className="app-container bg-light">
        <Nav />
        <Alert />
        <div className="container pt-4 pb-4">
          <Component {...pageProps} />
        </div>
      </div>

      {/* credits */}
      <div className="text-center mt-4">
        <p>
          Semua kodingan ini milik Allah Swt
        </p>
      </div>
    </>
  );
}
