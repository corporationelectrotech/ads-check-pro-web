/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            {/*header section start*/}
            <header className="header">
                {/*start navbar*/}
                <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><img src="img/logo/logo-white.png" width={120} alt="logo" className="img-fluid" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="ti-menu" />
                        </button>
                        <div className="collapse navbar-collapse main-menu justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#team">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*end navbar*/}
            </header>
            {/*header section end*/}
            {/*body content wrap start*/}
            <div className="main">
                {/*hero section start*/}
                <section className="hero-section pt-100 background-img" style={{ background: 'url("img/app-hero-bg.jpg")no-repeat center center / cover' }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-between py-5">
                            <div className="col-md-7 col-lg-6 col-xl-5">
                                <div className="hero-content-left text-white">
                                    <h1 className="text-white fw-bold">Optimizing Facebook Advertising</h1>
                                    <p className="lead">
                                        effortlessly manage your business or personal advertising
                                        accounts in one convenient place
                                    </p>
                                    <div className="download-btn d-none d-lg-block d-md-block" style={{ position: 'absolute', zIndex: 1 }}>
                                        <a
                                            target="_blank"
                                            href="https://chrome.google.com/webstore/detail/ads-check-pro/dgdmdjjejhlhigpblmickdgnfjnckiil"
                                            className="btn google-play-btn me-3 d-flex"
                                        >
                                            <img style={{ width: 20, height: 20, marginRight: 10 }} src="img/new/image-chrome.png" alt="app" className="img-fluid" /> Add to Chrome
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5">
                                <div className="hero-animation-img">
                                    <img src="img/new/image-5.png" alt="app" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-img-absolute">
                        <img src="img/hero-bg-shape-1.svg" alt="wave shape" className="img-fluid" />
                    </div>
                </section>
                {/*hero section end*/}
                {/*promo section start*/}
                <section className="promo-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Why Peoples Love Ads Check Pro?</h2>
                                    <p className="lead">
                                        Following reasons show advantages of adding Ads Check Pro to your lead pages, demos and
                                        checkouts evisculate interoperable imperatives rather.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center equal">
                            <div className="col-md-6 col-xl-4">
                                <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                                    <div className="circle-icon mb-5">
                                        <span className="ti-vector text-white" />
                                    </div>
                                    <h5>Clean Design</h5>
                                    <p>Increase sales by showing true dynamics of your website.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                                    <div className="circle-icon mb-5">
                                        <span className="ti-lock text-white" />
                                    </div>
                                    <h5>Secure Data</h5>
                                    <p>Build your online store’s trust using Social Proof &amp; Urgency.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                                    <div className="circle-icon mb-5">
                                        <span className="ti-eye text-white" />
                                    </div>
                                    <h5>Retina Ready</h5>
                                    <p>Realize importance of social proof in customer’s purchase decision.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*promo section end*/}
                {/*overflow block start*/}
                <div className="overflow-hidden">
                    {/*about us section start*/}
                    <section id="about" className="about-us ptb-100 background-shape-img">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-md-7 col-xl-6">
                                    <div className="about-content-left section-heading">
                                        <h2>Use Your Device <br />
                                            to Manage Everything</h2>
                                        <div className="single-feature mb-4 mt-5">
                                            <div className="icon-box-wrap d-flex align-items-center mb-2">
                                                <div className="me-3 icon-box">
                                                    <img src="/img/image-icon-1.png" alt="icon image" className="img-fluid" />
                                                </div>
                                                <p className="mb-0">Effortlessly manage your business or personal advertising accounts in one convenient place</p>
                                            </div>
                                        </div>
                                        <div className="single-feature mb-4">
                                            <div className="icon-box-wrap mb-2">
                                                <div className="me-3 icon-box">
                                                    <img src="/img/image-icon-2.png" alt="icon image" className="img-fluid" />
                                                </div>
                                                <p className="mb-0">Empowers you with the ability to set spending limits and budget thresholds for your ad accounts.</p>
                                            </div>
                                            <p />
                                        </div>
                                        <div className="single-feature mb-4">
                                            <div className="icon-box-wrap mb-2">
                                                <div className="me-3 icon-box">
                                                    <img src="/img/image-icon-3.png" alt="icon image" className="img-fluid" />
                                                </div>
                                                <p className="mb-0">Take control of your advertising expenses and ensure that you never exceed your desired budget.</p>
                                            </div>
                                            <p />
                                        </div>
                                        <div className="single-feature mb-4">
                                            <div className="icon-box-wrap mb-2">
                                                <div className="me-3 icon-box">
                                                    <img src="/img/image-icon-4.png" alt="icon image" className="img-fluid" />
                                                </div>
                                                <p className="mb-0">Sharing Facebook Pixel and ad accounts has never been easier. With our handy utility,.
                                                </p>
                                            </div>
                                            <p />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="about-content-right">
                                        <img src="/img/new/image-1.png" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*about us section end*/}
                </div>
                {/*overflow block end*/}
                {/*feature section start*/}
                <section id="features" className="feature-section ptb-100">
                    <div className="container">
                        <div className="row g-4 align-items-center justify-content-between">
                            <div className="col-md-4">
                                <div className="download-img">
                                    <img src="/img/new/image-3.png" alt="download" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="feature-contents section-heading">
                                    <h2>Share your Facebook Pixel with <br />
                                        Friends Easily</h2>
                                    <p>Sharing Facebook Pixel and ad accounts has never been easier.
                                        With our handy utility, you can seamlessly share your Facebook Pixel and ad accounts with team members or clients,
                                        enabling seamless collaboration and streamlining your workflow.</p>
                                    <ul className="list-inline mt-5">
                                        <li className="list-inline-item">
                                            <div className="me-3 icon-box border">
                                                <img src="/img/image-icon-2.png" alt="icon image" className="img-fluid" />
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="me-3 icon-box border">
                                                <img src="/img/image-icon-3.png" alt="icon image" className="img-fluid" />
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="me-3 icon-box border">
                                                <img src="/img/image-icon-4.png" alt="icon image" className="img-fluid" />
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="me-3 icon-box border">
                                                <img src="/img/image-icon-1.png" alt="icon image" className="img-fluid" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*feature section end*/}
                {/*download section start*/}
                <section className="download-section pt-100 background-img" style={{ background: 'url("img/app-hero-bg.jpg")no-repeat center center / cover' }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-7">
                                <div className="download-content text-white pb-100">
                                    <h2 className="text-white">Start Managing your Apps
                                        Business, more Faster</h2>
                                    <p className="lead">Don't miss out on the opportunity to supercharge your Facebook advertising efforts.
                                        Try "Ads Check Pro" today and experience the difference it can make in your advertising success!.</p>
                                    <div className="download-btn">
                                        <a
                                            target="_blank"
                                            href="https://chrome.google.com/webstore/detail/ads-check-pro/dgdmdjjejhlhigpblmickdgnfjnckiil"
                                            className="btn google-play-btn me-3 d-inline-flex"
                                        >
                                            <img style={{ width: 20, height: 20, marginRight: 10 }} src="img/new/image-chrome.png" alt="app" className="img-fluid" /> Add to Chrome
                                        </a>
                                        <a href="#" className="btn app-store-btn"><span className="ti-apple" /> App Store</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="download-img d-flex align-items-end">
                                    <img src="img/new/image-4.png" alt="download" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*download section end*/}
                {/*overflow block start*/}
                <div className="overflow-hidden">
                    {/*our pricing packages section start*/}
                    <section id="pricing" className="package-section background-shape-right ptb-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="section-heading text-center mb-5">
                                        <h2>Affordable Pricing and Packages <br />Choose your Best One</h2>
                                        <p className="lead">
                                            Distinctively brand cutting-edge imperatives through synergistic infrastructures
                                            customize low-risk high-yield processes rather than user friendly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 justify-content-center">
                                <div className="col-xl-4 col-md-6">
                                    <div className="card text-center single-pricing-pack p-5">
                                        <h5 className="mb-2">Basic</h5>
                                        <div className="pricing-img mt-3 mb-4">
                                            <img src="img/basic.svg" alt="pricing img" className="img-fluid" />
                                        </div>
                                        <div className="card-body p-0">
                                            <ul className="list-unstyled text-sm pricing-feature-list">
                                                <li>5 Users access same time</li>
                                                <li>Integrated eCommerce</li>
                                                <li>Customization interface</li>
                                                <li>Weekly updated</li>
                                                <li>24/7 Phone Support</li>
                                                <li>Event Analytics</li>
                                            </ul>
                                            <div className="py-4 border-0 pricing-header">
                                                <div className="h1 text-center mb-0 color-secondary">$<span className="price fw-semibold">0.00</span></div>
                                            </div>
                                            <a href="#" className="btn outline-btn" target="_blank">Purchase now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="card text-center popular-price single-pricing-pack p-5">
                                        <h5 className="mb-2">Standard</h5>
                                        <div className="pricing-img mt-3 mb-4">
                                            <img src="img/standard.svg" alt="pricing img" className="img-fluid" />
                                        </div>
                                        <div className="card-body p-0">
                                            <ul className="list-unstyled text-sm pricing-feature-list">
                                                <li>10 Users access same time</li>
                                                <li>Integrated eCommerce</li>
                                                <li>Customization interface</li>
                                                <li>Daily updated</li>
                                                <li>24/7 Phone Support</li>
                                                <li>Event Analytics</li>
                                            </ul>
                                            <div className="py-4 border-0 pricing-header">
                                                <div className="h1 text-center mb-0 color-secondary">$<span className="price fw-semibold">99</span></div>
                                            </div>
                                            <a href="#" className="btn solid-btn" target="_blank">Purchase now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="card text-center single-pricing-pack p-5">
                                        <h5 className="mb-2">Unlimited</h5>
                                        <div className="pricing-img mt-3 mb-4">
                                            <img src="img/unlimited.svg" alt="pricing img" className="img-fluid" />
                                        </div>
                                        <div className="card-body p-0">
                                            <ul className="list-unstyled text-sm pricing-feature-list">
                                                <li>20 Users access same time</li>
                                                <li>Integrated eCommerce</li>
                                                <li>Fully Customization interface</li>
                                                <li>Free updated</li>
                                                <li>24/7 Phone Support</li>
                                                <li>Event Analytics</li>
                                            </ul>
                                            <div className="py-4 border-0 pricing-header">
                                                <div className="h1 text-center mb-0 color-secondary">$<span className="price fw-semibold">199</span></div>
                                            </div>
                                            <a href="#" className="btn outline-btn" target="_blank">Purchase now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <p className="mb-2">If you need custom services or Need more? <a href="#" className="color-secondary">
                                    Contact us
                                </a></p>
                            </div>
                            {/*pricing faq start*/}
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <div id="accordion-1" className="accordion accordion-faq">
                                        {/* Accordion card 1 */}
                                        <div className="card accordion-item">
                                            <div className="card-header accordion-header py-4" id="heading-1-1" data-bs-toggle="collapse" role="button" data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                                <h6 className="mb-0"><span className="ti-receipt me-3 color-secondary" /> Which
                                                    license do I need?</h6>
                                            </div>
                                            <div id="collapse-1-1" className="collapse" aria-labelledby="heading-1-1" data-bs-parent="#accordion-1">
                                                <div className="card-body accordion-body">
                                                    <p>Uniquely leverage other's distinctive infomediaries rather than leveraged
                                                        supply chains. Continually seize distributed collaboration and
                                                        idea-sharing whereas user.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Accordion card 2 */}
                                        <div className="card accordion-item">
                                            <div className="card-header py-4 accordion-header" id="heading-1-2" data-bs-toggle="collapse" role="button" data-bs-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                                <h6 className="mb-0"><span className="ti-gallery me-3 color-secondary" /> How do I
                                                    get access to a theme?</h6>
                                            </div>
                                            <div id="collapse-1-2" className="collapse" aria-labelledby="heading-1-2" data-bs-parent="#accordion-1">
                                                <div className="card-body accordion-body">
                                                    <p>Rapidiously incentivize virtual e-commerce and exceptional e-tailers.
                                                        Progressively network focused catalysts for change without orthogonal
                                                        benefits. Dramatically empower.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Accordion card 3 */}
                                        <div className="card accordion-item">
                                            <div className="card-header py-4 accordion-header" id="heading-1-3" data-bs-toggle="collapse" role="button" data-bs-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                                <h6 className="mb-0"><span className="ti-wallet me-3 color-secondary" /> How do I
                                                    see previous orders?
                                                </h6>
                                            </div>
                                            <div id="collapse-1-3" className="collapse" aria-labelledby="heading-1-3" data-bs-parent="#accordion-1">
                                                <div className="card-body accordion-body">
                                                    <p>Proactively monetize long-term high-impact innovation and scalable
                                                        relationships. Dynamically mesh principle-centered functionalities
                                                        before next-generation best practices. Distinctively empower.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div id="accordion-2" className="accordion accordion-faq">
                                        {/* Accordion card 1 */}
                                        <div className="card accordion-item">
                                            <div className="card-header py-4 accordion-header" id="heading-2-1" data-bs-toggle="collapse" role="button" data-bs-target="#collapse-2-1" aria-expanded="false" aria-controls="collapse-2-1">
                                                <h6 className="mb-0"><span className="ti-receipt me-3 color-secondary" /> Which
                                                    license do I need?</h6>
                                            </div>
                                            <div id="collapse-2-1" className="collapse" aria-labelledby="heading-2-1" data-bs-parent="#accordion-2">
                                                <div className="card-body accordion-body">
                                                    <p>Distinctively recaptiualize customer directed channels before installed
                                                        base communities. Continually disintermediate distinctive web services
                                                        vis-a-vis team building e-commerce.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Accordion card 2 */}
                                        <div className="card accordion-item">
                                            <div className="card-header py-4 accordion-header" id="heading-2-2" data-bs-toggle="collapse" role="button" data-bs-target="#collapse-2-2" aria-expanded="false" aria-controls="collapse-2-2">
                                                <h6 className="mb-0"><span className="ti-lock me-3 color-secondary" /> How do I get
                                                    access to a theme?</h6>
                                            </div>
                                            <div id="collapse-2-2" className="collapse" aria-labelledby="heading-2-2" data-bs-parent="#accordion-2">
                                                <div className="card-body accordion-body">
                                                    <p>Quickly recaptiualize revolutionary meta-services and multimedia based
                                                        channels. Seamlessly impact diverse deliverables rather than cooperative
                                                        strategic theme areas.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Accordion card 3 */}
                                        <div className="card accordion-item">
                                            <div className="card-header py-4 accordion-header" id="heading-2-3" data-bs-toggle="collapse" role="button" data-bs-target="#collapse-2-3" aria-expanded="false" aria-controls="collapse-2-3">
                                                <h6 className="mb-0"><span className="ti-widget me-3 color-secondary" /> How do I
                                                    see previous orders?
                                                </h6>
                                            </div>
                                            <div id="collapse-2-3" className="collapse" aria-labelledby="heading-2-3" data-bs-parent="#accordion-2">
                                                <div className="card-body accordion-body">
                                                    <p>Efficiently supply B2B networks vis-a-vis best-of-breed schemas.
                                                        Dramatically parallel task reliable technology with cross functional
                                                        core competencies. Phosfluorescently.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*pricing faq end*/}
                        </div>
                    </section>
                    {/*our pricing packages section end*/}
                </div>
                {/*overflow block end*/}
                {/*testimonial section start*/}
                <section className="testimonial-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6">
                                <div className="section-heading mb-5">
                                    <h2>What Clients Say About Us</h2>
                                    <p className="lead">
                                        Rapidiously morph transparent internal or "organic" sources whereas resource sucking
                                        e-business. Conveniently innovate compelling internal.
                                    </p>
                                    <div className="client-section-wrap d-flex flex-row align-items-center">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><img src="img/client-1-color.png" width={85} alt="client" className="img-fluid" /></li>
                                            <li className="list-inline-item"><img src="img/client-6-color.png" width={85} alt="client" className="img-fluid" /></li>
                                            <li className="list-inline-item"><img src="img/client-3-color.png" width={85} alt="client" className="img-fluid" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="owl-carousel owl-theme client-testimonial arrow-indicator">
                                    <div className="item">
                                        <div className="testimonial-quote-wrap">
                                            <div className="media author-info mb-3">
                                                <div className="author-img me-3">
                                                    <img src="img/client-1.jpg" alt="client" className="img-fluid rounded-circle" />
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="mb-0">John Charles</h5>
                                                    <span>Google</span>
                                                </div>
                                            </div>
                                            <div className="client-say">
                                                <p> <img src="img/quote.png" alt="quote" className="img-fluid" /> Within the Facebook Ads advertising community,
                                                    Ads Check Pro has always shown us their enthusiasm and professionalism in every service or product they offer.
                                                    Through these things, we understand that Ads Check Pro has and continues to have a young, enthusiastic,
                                                    and passionate team of personnel in the field of software technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-quote-wrap">
                                            <div className="media author-info mb-3">
                                                <div className="author-img me-3">
                                                    <img src="img/client-2.jpg" alt="client" className="img-fluid rounded-circle" />
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="mb-0">Arabella Ora</h5>
                                                    <span>Amazon</span>
                                                </div>
                                            </div>
                                            <div className="client-say">
                                                <p><img src="img/quote.png" alt="quote" className="img-fluid" /> After a period of experience with Ads Check Pro,
                                                    I can confidently say that it is an optimal tool that is trusted and used by Ads experts.
                                                    Whether individuals or businesses, they should choose this product because of its comprehensiveness in supporting the effective advertising process.
                                                    Ads experts can easily build smarter Ads campaigns with outstanding features!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-quote-wrap">
                                            <div className="media author-info mb-3">
                                                <div className="author-img me-3">
                                                    <img src="img/client-1.jpg" alt="client" className="img-fluid rounded-circle" />
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="mb-0">John Charles</h5>
                                                    <span>Google</span>
                                                </div>
                                            </div>
                                            <div className="client-say">
                                                <p><img src="img/quote.png" alt="quote" className="img-fluid" /> Since using Ads Check Pro,
                                                    I have seen a clear improvement in the efficiency of checking all information,
                                                    which is simple, fast, and easy.
                                                    Ad accounts are also protected and the reasons for ad display deactivation are provided completely free of charge.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*testimonial section end*/}

                {/*contact us section start*/}
                <section id="contact" className="contact-us ptb-100 gray-light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 pb-3 message-box d-none">
                                <div className="alert alert-danger" />
                            </div>
                            <div className="col-md-5">
                                <div className="section-heading">
                                    <h2>Contact With Us</h2>
                                    <p>It's very easy to get in touch with us. Just use the contact form or pay us a
                                        visit for a coffee at the office. Dynamically innovate competitive technology after an
                                        expanded array of leadership.</p>
                                </div>
                                <div className="footer-address">
                                    <h6><strong>Head Office</strong></h6>
                                    <p>211 King St, Melbourne VIC, Australia</p>
                                    <ul>
                                        <li><span>Phone: +61 2 6789 6284</span></li>
                                        <li><span>Email : <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <form action="#" method="POST" id="contactForm" className="contact-us-form">
                                    <h5>Reach us quickly</h5>
                                    <div className="row">
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <input type="text" name="phone" className="form-control" id="phone" placeholder="Your Phone" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className="form-group mb-3">
                                                <input type="text" name="company" size={40} className="form-control" id="company" placeholder="Your Company" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group mb-3">
                                                <textarea name="message" id="message" className="form-control h-100" rows={7} cols={25} placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 mt-3">
                                            <button type="submit" className="btn solid-btn" id="btnContactUs">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-message" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*contact us section end*/}
                {/*client section start*/}
                <section className="client-section ptb-100">
                    <div className="container">
                        {/*clients logo start*/}
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Trusted by Companies</h2>
                                    <p className="lead">
                                        Rapidiously morph transparent internal or "organic" sources whereas resource sucking
                                        e-business. Conveniently innovate compelling internal.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                                    <div className="item single-client">
                                        <img src="img/client-5-color.png" alt="client logo" className="client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="img/client-1-color.png" alt="client logo" className="client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="img/client-6-color.png" alt="client logo" className="client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="img/client-3-color.png" alt="client logo" className="client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="img/client-4-color.png" alt="client logo" className="client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="img/client-5-color.png" alt="client logo" className="client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="img/client-7-color.png" alt="client logo" className="client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="img/client-2-color.png" alt="client logo" className="client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="img/client-1-color.png" alt="client logo" className="client-img" />
                                    </div>
                                    <div className="item single-client">
                                        <img src="img/client-3-color.png" alt="client logo" className="client-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*clients logo end*/}
                    </div>
                </section>
                {/*client section start*/}
            </div>
            {/*body content wrap end*/}
            {/*shape image start*/}
            <div className="shape-img subscribe-wrap">
                <img src="img/footer-top-shape.png" alt="footer shape" className="img-fluid" />
            </div>
            {/*shape image end*/}
            {/*footer section start*/}
            <footer className="footer-section">
                {/*footer top start*/}
                <div className="footer-top pt-150 background-img-2" style={{ background: 'url("img/new/image-footer.jpg")no-repeat center top / cover' }}>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                                <div className="footer-nav-wrap text-white">
                                    <img src="img/logo/logo-white.png" alt="footer logo" width={120} className="img-fluid mb-3" />
                                    <p>Are you looking to take your Facebook advertising to the next level? Look no further! "Ads Check Pro" is here to revolutionize the way you manage and optimize your ad campaigns.</p>
                                    <div className="social-list-wrap">
                                        <ul className="social-list list-inline list-unstyled">
                                            <li className="list-inline-item"><a href="#" target="_blank" title="Facebook"><span className="ti-facebook" /></a></li>
                                            <li className="list-inline-item"><a href="#" target="_blank" title="Twitter"><span className="ti-twitter" /></a></li>
                                            <li className="list-inline-item"><a href="#" target="_blank" title="Instagram"><span className="ti-instagram" /></a></li>
                                            <li className="list-inline-item"><a href="#" target="_blank" title="printerst"><span className="ti-pinterest" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                        <div className="footer-nav-wrap text-white">
                                            <h5 className="mb-3 text-white">Resources</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><a href="#">Help</a></li>
                                                <li className="mb-2"><a href="#">Events</a></li>
                                                <li className="mb-2"><a href="#">Live Support</a></li>
                                                <li className="mb-2"><a href="#">Open Sources</a></li>
                                                <li className="mb-2"><a href="#">Documentation</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                        <div className="footer-nav-wrap text-white">
                                            <h5 className="mb-3 text-white">Company</h5>
                                            <ul className="list-unstyled support-list">
                                                <li className="mb-2">
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li className="mb-2">
                                                    <a href="#">Careers</a>
                                                </li>
                                                <li className="mb-2">
                                                    <a href="#">Customers</a>
                                                </li>
                                                <li className="mb-2">
                                                    <a href="#">Community</a>
                                                </li>
                                                <li className="mb-2">
                                                    <a href="#">Our Team</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="footer-nav-wrap text-white">
                                            <h5 className="mb-3 text-white">Location</h5>
                                            <ul className="list-unstyled support-list">
                                                <li className="mb-2 d-flex align-items-center"><span className="ti-location-pin me-2" />
                                                    211 King Melbourne
                                                    <br />Australia
                                                </li>
                                                <li className="mb-2 d-flex align-items-center"><span className="ti-mobile me-2" />
                                                    <a href="tel:+61267896284"> +61 2 6789 6284</a>
                                                </li>
                                                <li className="mb-2 d-flex align-items-center"><span className="ti-email me-2" /><a href="mailto:mail@example.com"> mail@example.com</a></li>
                                                <li className="mb-2 d-flex align-items-center"><span className="ti-world me-2" /><a href="#"> www.yourdomain.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*footer bottom copyright start*/}
                    <div className="footer-bottom border-gray-light mt-5 py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-7">
                                    <div className="copyright-wrap small-text">
                                        <p className="mb-0 text-white">© Ads Check Pro, All rights reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <div className="terms-policy-wrap text-md-end text-start">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a className="small-text" href="#">Terms</a></li>
                                            <li className="list-inline-item"><a className="small-text" href="#">Security</a></li>
                                            <li className="list-inline-item"><a className="small-text" href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*footer bottom copyright end*/}
                </div>
                {/*footer top end*/}
            </footer>
            {/*footer section end*/}
        </React.Fragment>
    );
}