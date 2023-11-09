/* eslint-disable @next/next/inline-script-id */
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'Ads Check Pro',
    description: 'Ads Check Pro cross-platform data connection extension.',
    keywords: ['ads', 'ads check', 'extention', 'ads check extention', 'ads check pro', 'ads pro'],
    icons: { icon: [{ url: 'img/logo/logo.png' }] },
    openGraph: {
        type: "website",
        url: "https://adscheck.pro",
        title: "Ads Check Pro",
        description: "Ads Check Pro cross-platform data connection extension",
        siteName: "Ads Check Pro",
        images: [{ url: "img/new/image-1.png" }],
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    httpEquiv="X-UA-Compatible"
                    content="IE=edge"
                />
                {/* <!-- Google Tag Manager --> */}
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-T873LFLS');
                        `
                    }}
                />
                {/* <!-- End Google Tag Manager --> */}
            </head>
            <body className={inter.className}>
                {/* <!-- Google Tag Manager (noscript) --> */}
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T873LFLS"
                        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
                </noscript>
                {/* <!-- End Google Tag Manager (noscript) --> */}
                {children}
            </body>

            {/* <!--jQuery--> */}
            <Script src="/js/jquery-3.6.1.min.js" />

            {/* <!--Popper js--> */}
            <Script src="/js/popper.min.js" />

            {/* <!--Bootstrap js--> */}
            <Script src="/js/bootstrap.min.js" />

            {/* <!--Magnific popup js--> */}
            <Script src="/js/jquery.magnific-popup.min.js" />

            {/* <!--jquery easing js--> */}
            <Script src="/js/jquery.easing.min.js" />

            {/* <!--wow js--> */}
            <Script src="/js/wow.min.js" />

            {/* <!--owl carousel js--> */}
            <Script src="/js/owl.carousel.min.js" />

            {/* <!--countdown js--> */}
            <Script src="/js/jquery.countdown.min.js" />

            {/* <!--validator js--> */}
            <Script src="/js/validator.min.js" />

            {/* <!--custom js--> */}
            <Script src="/js/scripts.js" />
        </html>
    )
}
