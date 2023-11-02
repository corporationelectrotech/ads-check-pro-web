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
                {/* 
                <meta
                    name="description"
                    content="Ads Check Pro cross-platform data connection extension."
                />
                <meta
                    name="author"
                    content="ThemeTags"
                />

                <meta
                    property="og:site_name"
                    content=""
                />
                <meta
                    property="og:site"
                    content=""
                />
                <meta
                    property="og:title"
                    content=""
                />
                <meta
                    property="og:description"
                    content=""
                />
                <meta
                    property="og:image"
                    content=""
                />
                <meta
                    property="og:url"
                    content=""
                />
                <meta
                    property="og:type"
                    content="article"
                />

                <title>Ads Check Pro</title>

                <link
                    rel="icon"
                    href="img/logo/logo.png"
                    type="image/png"
                /> */}
            </head>
            <body className={inter.className}>{children}</body>

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
