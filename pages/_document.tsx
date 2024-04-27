import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />
        <link
          rel='shortcut icon'
          type='image/png'
          href='https://view.com.au/viewstatic/lancer/static/images/view_favicon.png'
        />
        <meta name='theme-color' content='#FFFFFF' />
        <meta property='fb:admins' content='785845464803058' />

        {/* apple mobile meta tag */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-itunes-app' content='app-id=474698182' />
        <meta name='smartbanner:title' content='view.com.au - Real Estate' />
        <meta name='smartbanner:author' content='view.com.au' />
        <meta name='smartbanner:price' content='FREE' />
        <meta name='smartbanner:price-suffix-apple' content=' - On the App Store' />
        <meta name='smartbanner:price-suffix-google' content=' - In Google Play' />
        <meta name='smartbanner:icon-apple' content='/images/apple-icon.png' />
        <meta name='smartbanner:icon-google' content='/images/android-icon.png' />
        <meta name='smartbanner:button' content='INSTALL' />
        <meta
          name='smartbanner:button-url-apple'
          content='https://itunes.apple.com/au/app/view-com-au-real-estate/id474698182?mt=8'
        />
        <meta
          name='smartbanner:button-url-google'
          content='https://play.google.com/store/apps/details?id=au.com.realestateview&amp;hl=en'
        />
        <meta name='smartbanner:enabled-platforms' content='android' />
        <meta name='smartbanner:hide-path' content='/' />
        <meta name='smartbanner:hide-ttl' content='1209600' />

        {/* og meta  tag */}
        <meta property='og:type' content='website' />
        <meta name='og:site_name' content='view.com.au' />
        <meta property='og:title' content='Conveyancing with Settle Easy - view.com.au' />
        <meta
          property='og:description'
          content="Providing reliable, secure and hassle-free conveyancing, Settle Easy is for anyone buying or selling property and is home to Australia's local conveyancers."
        />
        <meta property='og:image' content='https://view.com.au/viewstatic/lancer/static/images/logo.png' />

        {/* twitter Meta tag */}
        <meta name='twitter:title' content='Conveyancing with Settle Easy - view.com.au' />
        <meta
          name='twitter:description'
          content="Providing reliable, secure and hassle-free conveyancing, Settle Easy is for anyone buying or selling property and is home to Australia's local conveyancers."
        />
        <meta name='twitter:image' content='https://view.com.au/viewstatic/lancer/static/images/logo.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@ViewComAu' />
        <meta name='twitter:creator' content='@ViewComAu' />

        {/* canonical  */}
        <link rel='canonical' href='https://view.com.au/conveyancing/'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
