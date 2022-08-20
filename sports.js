import Head from 'next/head'

const Sports = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Sports</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1>Sports</h1>
        <div className='sport'>
          <h4>Cricket</h4>
        </div>
        <div className='sport'>
          <h4>Basketball</h4>
        </div>
        <div className='sport'>
          <h4>Tennis</h4>
        </div>
        <div className='sport'>
          <h4>Badminton</h4>
        </div>
      </div>
    </>
  );
}
 
export default Sports;