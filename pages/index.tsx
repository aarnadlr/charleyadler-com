import Link from 'next/link';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { noRenderWs } from '../functions';

const IndexPage = () => {
  const [inputVal, setInputVal] = useState('');
  // const [result, setResult] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(':', e.target.value);
    setInputVal(e.target.value);
  };

  useEffect(() => {
    console.log('ready',)
  }, []);

  return (
    <Layout title="Charley Elizabeth Adler 👧🏻👧🏻">
      <h1>Charley Elizabeth Adler 👧🏻🦄</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <input type="text" value={inputVal} onChange={handleChange} />
      <br />
      <p>
        {
          // reverseString(inputVal)
          noRenderWs(inputVal)
        }
      </p>
      <br />
    </Layout>
  );
};

export default IndexPage;
