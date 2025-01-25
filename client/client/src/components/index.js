import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [language, setLanguage] = useState('English');
    const [is18Plus, setIs18Plus] = useState(false);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    const handleCheckBoxChange = () => {
        setIs18Plus(!is18Plus);
    };

    return (
        <div className="app-container bg-gray-100 min-h-screen p-4">
            <header className="header flex justify-between items-center p-4 bg-white shadow-md">
                <div className="logo">
                    <button className="btn btn-primary">Probo</button>
                </div>
                <nav className="navbar">
                    <ul className="flex space-x-4">
                        <li><a className="text-gray-700 hover:text-blue-500" href="#trading">Trading</a></li>
                        <li><a className="text-gray-700 hover:text-blue-500" href="#team11">Team11</a></li>
                        <li><a className="text-gray-700 hover:text-blue-500" href="#careers">Careers</a></li>
                    </ul>
                </nav>
                <div className="language-select">
                    <select
                        className="form-select"
                        value={language}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                    >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </div>
                <div className="header-buttons flex space-x-4">
                    <button className="btn btn-secondary">Download App</button>
                    <button className="btn btn-success">Trade Online</button>
                </div>
            </header>

            <main className="main-content text-center mt-8">
                <h1 className="text-2xl font-bold">Invest in your point of view</h1>
            </main>

            <div className="caption text-center my-4">
                <h3 className="text-lg">Sports, Entertainment, Economy, or Finance</h3>
            </div>

            <div className="button text-center my-4">
                <button className="btn btn-warning">Download and get up to ₹100 bonus</button>
            </div>

            <div className="age-restriction text-center my-4">
                <label className="flex items-center justify-center space-x-2">
                    <input
                        type="checkbox"
                        checked={is18Plus}
                        onChange={handleCheckBoxChange}
                    />
                    <span>For 18 years and above only.</span>
                </label>
            </div>

            <div className="container my-8 text-center">
                <div className="a2">
                    <h1 className="text-4xl font-bold text-gray-800">India's Most Trusted</h1>
                    <h1 className="text-4xl font-bold text-gray-800">Opinion Trading App</h1>
                </div>
            </div>

            <div className="text-center my-8 space-y-4">
                <p className="text-lg font-bold">
                    3 crore+<br />
                    <span className="text-gray-600">PROBO USERS</span>
                </p>
                <p className="text-gray-400">|</p>
                <p className="text-lg font-bold">
                    4.5<br />
                    <span className="text-gray-600">Icon</span>
                    <span className="text-gray-600">RATED APP</span>
                </p>
                <p className="text-gray-400">|</p>
                <p className="text-lg font-bold">
                    25 lakh+<br />
                    <span className="text-gray-600">DAILY WINNINGS</span>
                </p>
            </div>

            <div className="flex justify-center items-center space-x-8 my-8">
                <svg className="w-12 h-12 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    {/* SVG content goes here */}
                </svg>
                <svg className="w-12 h-12 text-gray-600" xmlns="http://www.w3.org/2000/svg"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [language, setLanguage] = useState('English');
    const [is18Plus, setIs18Plus] = useState(false);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    const handleCheckBoxChange = () => {
        setIs18Plus(!is18Plus);
    };

    return (
        <div className="app-container bg-gray-100 min-h-screen p-4">
            <header className="header flex justify-between items-center p-4 bg-white shadow-md">
                <div className="logo">
                    <button className="btn btn-primary">Probo</button>
                </div>
                <nav className="navbar">
                    <ul className="flex space-x-4">
                        <li><a className="text-gray-700 hover:text-blue-500" href="#trading">Trading</a></li>
                        <li><a className="text-gray-700 hover:text-blue-500" href="#team11">Team11</a></li>
                        <li><a className="text-gray-700 hover:text-blue-500" href="#careers">Careers</a></li>
                    </ul>
                </nav>
                <div className="language-select">
                    <select
                        className="form-select"
                        value={language}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                    >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </div>
                <div className="header-buttons flex space-x-4">
                    <button className="btn btn-secondary">Download App</button>
                    <button className="btn btn-success">Trade Online</button>
                </div>
            </header>

            <main className="main-content text-center mt-8">
                <h1 className="text-2xl font-bold">Invest in your point of view</h1>
            </main>

            <div className="caption text-center my-4">
                <h3 className="text-lg">Sports, Entertainment, Economy, or Finance</h3>
            </div>

            <div className="button text-center my-4">
                <button className="btn btn-warning">Download and get up to ₹100 bonus</button>
            </div>

            <div className="age-restriction text-center my-4">
                <label className="flex items-center justify-center space-x-2">
                    <input
                        type="checkbox"
                        checked={is18Plus}
                        onChange={handleCheckBoxChange}
                    />
                    <span>For 18 years and above only.</span>
                </label>
            </div>

            <div className="container my-8 text-center">
                <div className="a2">
                    <h1 className="text-4xl font-bold text-gray-800">India's Most Trusted</h1>
                    <h1 className="text-4xl font-bold text-gray-800">Opinion Trading App</h1>
                </div>
            </div>
<div>
    <!-- Probo Statistics Section -->
    <div className="text-center my-8 space-y-4">
        <p className="text-lg font-bold">
            3 crore+<br />
            <span className="text-gray-600">PROBO USERS</span>
        </p>
        <p className="text-gray-400">|</p>
        <p className="text-lg font-bold">
            4.5<br />
            <span className="text-gray-600">Icon</span>
            <span className="text-gray-600">RATED APP</span>
        </p>
        <p className="text-gray-400">|</p>
        <p className="text-lg font-bold">
            25 lakh+<br />
            <span className="text-gray-600">DAILY WINNINGS</span>
        </p>
    </div>

    <!-- Icon Section -->
    <div className="flex justify-center items-center space-x-8 my-8">
        <svg className="w-12 h-12 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g transform="matrix(.35278 0 0 -.35278 30.588 .01)">
                <!-- Add gradient or other SVG elements here -->
            </g>
        </svg>
    </div>

    <!-- Review Section -->
    <p className="text-gray-600 mx-auto text-xl my-4 mx-6 font-semibold">
        The rewards are really great here
    </p>
    <div className="swiper-pagination"></div>
    <img src="/path-to-image.jpg" alt="Image description" className="text-center p-4 my-8 mb-6 border bg-200 rounded-lg" />

    <!-- Footer Section -->
    <div className="bg-gray-500 p-6 border border-gray-300 rounded-lg w-80">
        <div className="flex flex-col space-y-4">
            <p className="font-semibold text-black">About Us</p>
            <p className="font-semibold text-black">Culture</p>
        </div>
        <div className="flex flex-col space-y-4">
            <h2 className="font-semibold text-black">Careers</h2>
            <p className="font-semibold text-black">Culture</p>
        </div>
        <div className="flex flex-col space-y-4">
            <h2 className="font-semibold text-black">Resources</h2>
            <p className="font-semibold text-black">Help Centre</p>
            <p className="font-semibold text-black">Contact Support</p>
            <p className="font-semibold text-black">What's New</p>
        </div>
        <div className="flex flex-col space-y-4">
            <h2 className="font-semibold text-black">Contact Us</h2>
            <p className="font-semibold text-black">help@probo.in</p>
            <p className="font-semibold text-black">communication@probo.in</p>
        </div>
    </div>

    <!-- Experience Section -->
    <div className="bg-gray-500 p-6 border border-gray-300 rounded-lg">
        <p className="font-semibold text-black my-8">
            Probo’s experience is made possible by our partnerships with TradingView 
            (track upcoming events with <u>Economic Calendar</u> or browse stocks in the <u>Screener</u>), 
            Authbridge for verification technology, DataMuni for data & analytics, 
            Google Firebase, Google Cloud & AWS. Probo is also a member of 
            <b>FICCI</b> and ASSOCHAM.
        </p>
    </div>
</div>
<div className="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon container">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full hover:bg-gray-700"
            viewBox="0 0 48 48"
        >
            <path d="M9 4C6.25 4 4 6.25 4 9v32c0 2.75 2.25 5 5 5h32c2.75 0 5-2.25 5-5V9c0-2.75-2.25-5-5-5H9zm0 2h32c1.67 0 3 1.33 3 3v32c0 1.67-1.33 3-3 3H9c-1.67 0-3-1.33-3-3V9c0-1.67 1.33-3 3-3zm5 5c-1.1 0-2.08.33-2.81.95-.73.63-1.19 1.55-1.19 2.52 0 1.87 1.62 3.36 3.69 3.47.61.04 1.2.01 1.79-.02 1.81-.14 3.25-1.64 3.25-3.45-.02-1.9-1.56-3.47-3.47-3.47zm0 1.98c1.38 0 1.94.62 2..."
            />
        </svg>
    </a>
</div>
<div className="text-center my-8 space-y-4">
    <p className="text-lg font-bold">
        3 crore+<br />
        <span className="text-gray-600">PROBO USERS</span>
    </p>
    <p className="text-gray-400">|</p>
    <p className="text-lg font-bold">
        4.5<br />
        <span className="text-gray-600">Icon</span>
        <span className="text-gray-600">RATED APP</span>
    </p>
    <p className="text-gray-400">|</p>
    <p className="text-lg font-bold">
        25 lakh+<br />
        <span className="text-gray-600">DAILY WINNINGS</span>
    </p>
</div>

<div className="flex justify-center items-center space-x-8 my-8">
    <svg className="w-12 h-12 text-gray-600" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <g transform="matrix(.35278 0 0 -.35278 30.588 .01)">
            <linearGradient id="fZ5QJO0zpePOIUpGT06DDa_1AzdGyrT9jI0_gr1" x1="-67.013" x2="-35.864" y1="-20.175" y2="-52.601" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#21ad64"></stop>
                <stop offset="1" stopColor="#088242"></stop>
            </linearGradient>
            <path fill="url(#fZ5QJO0zpePOIUpGT06DDa_1AzdGyrT9jI0_gr1)" d="M-3.488-12.991l26.973-53.638c0.605-1.203,0.349-2.66-0.629-3.586 l-56.7-53.632c-2.244-2.123-5.86,0.053-5.035,3.03L-9.152-13.546C-8.407-10.858-4.742-10.498-3.488-12.991z"></path>
        </g>
        <path d="M25.729,10.67l-7.631,27.536l13.43-12.698c0.661-0.625,0.837-1.629,0.429-2.44L25.729,10.67z" opacity=".05"></path>
        <path d="M25.53,11.388l-7.173,25.885l12.828-12.129c0.502-0.475,0.636-1.236,0.326-1.853L25.53,11.388z" opacity=".07"></path>
        <linearGradient id="fZ5QJO0zpePOIUpGT06DDb_1AzdGyrT9jI0_gr2" x1="-3.965" x2="30.418" y1="4.688" y2="39.071" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fed100"></stop>
            <stop offset="1" stopColor="#e36001"></stop>
        </linearGradient>
        <path fill="url(#fZ5QJO0zpePOIUpGT06DDb_1AzdGyrT9jI0_gr2)" d="M21.557,4.593l9.507,18.922c0.213,0.424,0.123,0.938-0.222,1.265L10.831,43.7 c-0.792,0.749-2.067-0.019-1.776-1.07L19.559,4.788C19.822,3.84,21.115,3.714,21.557,4.593z"></path>
    </svg>
    
    <svg className="w-12 h-12 text-gray-600" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        {/* SVG content goes 
<div className="text-center text-sm text-gray-600 my-4 space-x-4">
    <h3>Answer simple cricket question in Yes Or No. Get upto Rs 100 joining bonus</h3>
</div>

<div className="text-color p-8 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Opinion Trading</h1>
    <p className="text-lg text-gray-600 mb-6">is Simple With Probo</p>
</div>

<div className="flex flex-col items-center space-y-6">
    <div className="text-center">
        <svg className="flex justify-center items-center mb-6 my-8 space-x-4 space-y-4">
            {/* SVG content here */}
        </svg>
        <h3 className="flex flex-col items-center space-x-4 my-8 mb-6 space-y-4">
            <span>24*7 LIVE EVENTS</span>
        </h3>
    </div>

    <div className="text-center">
        <svg className="flex justify-center items-center mb-6 my-8 space-x-4 space-y-4">
            {/* SVG content here */}
        </svg>
        <h3 className="flex flex-col items-center space-x-4 my-8 mb-6 space-y-4">
            <span>Instant Withdrawals</span>
        </h3>
    </div>

    <div className="text-center">
        <svg className="flex justify-center items-center mb-6 my-8 space-x-4 space-y-4">
            {/* SVG content here */}
        </svg>
        <h1 className="flex flex-col items-center space-x-4 my-8 mb-6 space-y-4">
            <span>Dedicated Support</span>
        </h1>
    </div>

    <div className="text-center">
        <svg className="flex justify-center items-center mb-6 my-8 space-x-4 space-y-4">
            {/* SVG content here */}
        </svg>
        <h3 className="flex flex-col items-center space-x-4 my-8 mb-6 space-y-4">
            <span>100% Secure & Legal</span>
        </h3>
    </div>
</div>


<div class="text center my-8 mb-6 space-x-4 space-y-8 my-8">
    <h3 class="text-center my-8 mb-6 space-x-4 my-8 space-y-4 my-8">
        <h2>Your opinion,Your Language</h2>
    <h3 class="text-center my-8 mb-8 space-x-4 space-y-8 ">
    </h3> 
     <h3>Probo supports 7+ Indian Languages</h3>
    <div class="flex justify-center">
        <img src="" alt="Image" class="w-32 h-32 rounded-full border-4 border-gray-300">
    </div>
    <div class="flex justify-center">
        <img src="" alt="Image" class="w-32 h-32 rounded-full border-4 border-gray-300">
    </div>
    <div class="flex justify-center">
        <img src="" alt="Image" class="w-32 h-32 rounded-full border-4 border-gray-300">
    </div>
    <div class="flex justify-center">
        <img src="" alt="Image" class="w-32 h-32 rounded-full border-4 border-gray-300">
    </div>
    
  <div class="bg-gray-100 rounded-lg text-center p-6">
    <div class="bg-gray-200 rounded-lg p-4">
        <h2 class="text-2xl font-bold mb-2">Real Money, Real Winners</h2>
        <h3 class="text-lg font-medium">Real experiences of our top traders</h3>
    </div>
</div>
<div class=bg-gray-200 p-6 w-64 h-32 border border-gray-300 rounded-lg">
<div class="relative max-w-4xl mx-auto py-10">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg mx-4">
                <img src="" alt="Profile Image" class="rounded-full mb-4">
                <p class="text-xl font-semibold mb-2">Aayush</p>
                <p class="text-gray-600 mx-auto text-xl my-4 mx-6">I love trading with Probo. It's user-friendly design and UI are just amazing.</p>
            </div>

            <div class="swiper-slide flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg mx-4">
                <img src="" alt="Profile Image" class="rounded-full mb-4">
                <p class="text-xl font-semibold mb-2">Priyanshu</p>
                <p class="text-gray-600 mx-auto text-xl my-4 mx-6">The rewards are really great here.</p>
            </div>

            <div class="swiper-slide flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg mx-4">
                <img src="" alt="Profile Image" class="rounded-full mb-4">
                <p class="text-xl font-semibold mb-2">Aman</p>
                <p class="text-gray-600 mx-auto text-xl my-4 mx-6">The rewards are really great here.</p>
            </div>

            <div class="swiper-slide flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg mx-4">
                <img src="" alt="Profile Image" class="rounded-full mb-4">
                <p class="text-xl font-semibold mb-2">Abhimanyu</p>
                <p class="text-gray-600 mx-auto text-xl my-4 mx-6">The rewards are really great here.</p>
            </div>
        </div>
        <!-- Add pagination -->
        <div class="swiper-pagination"></div>
    </div>
    <img class="text-center p-4 my-8 mb-6 border bg-gray-200 rounded-lg" alt="Image">
</div>

<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg w-80 mt-8">
    <div class="flex flex-col space-y-4 mr-6">
        <p class="font-semibold text-black">About Us</p>
        <p class="font-semibold text-black">Culture</p>
    </div>
    <div class="flex flex-col space-y-4 mr-6">
        <h2 class="font-semibold text-black">Careers</h2>
        <p class="font-semibold text-black">Culture</p>
    </div>
    <div class="flex flex-col space-y-4 mr-6">
        <h2 class="font-semibold text-black">Resources</h2>
        <p class="font-semibold text-black">Help Centre</p>
        <p class="font-semibold text-black">Contact Support</p>
        <p class="font-semibold text-black">What's New</p>
    </div>
    <div class="flex flex-col space-y-4 mr-6">
        <h2 class="font-semibold text-black">Contact Us</h2>
        <p class="font-semibold text-black">help@probo.in</p>
        <p class="font-semibold text-black">communication@probo.in</p>
    </div>

    <div class="bg-gray-500 p-6 border border-gray-300 rounded-lg mt-8">
        <p class="font-semibold text-black my-8">
            Probo’s experience is made possible by our partnerships with TradingView
            (track upcoming events with <u>Economic Calendar</u> or browse stocks in the <u>Screener</u>),
            Authbridge for verification technology, DataMuni for data & analytics,
            Google Firebase, Google Cloud & AWS. Probo is also a member of <strong>FICCI</strong>
            and ASSOCHAM.
        </p>
    </div>

    <img src="/images/trading-view.jpg" class="my-4 mr-4 rounded-lg p-4" alt="Trading View">
    <img src="/images/google-cloud.jpg" class="my-4 mr-8 rounded-lg p-4" alt="Google Cloud">
    <img src="/images/google-firebase.jpg" class="my-4 mr-8 rounded-lg p-4" alt="Google Firebase">
    <img src="/images/google-cloud.jpg" class="my-4 mr-8 rounded-lg p-4" alt="Google Cloud">
</div>
<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="https://www.linkedin.com" target="_blank" class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full hover:bg-gray-700">
            <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
        </svg>
    </a>
</div>

<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg mt-6">
    <a href="https://www.youtube.com" target="_blank" class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full hover:bg-gray-700">
            <!-- SVG content for YouTube icon -->
        </svg>
    </a>
</div>

<div className="container my-8 text-center">
    <div className="a2">
        <h1 className="text-4xl font-bold text-gray-800">India's Most Trusted</h1>
        <h1 className="text-4xl font-bold text-gray-800">Opinion Trading App</h1>
    </div>
</div>

<div className="text-center my-8 space-y-4">
    <p className="text-lg font-bold">
        3 crore+<br />
        <span className="text-gray-600">PROBO USERS</span>
    </p>
    <p className="text-gray-400">|</p>
    <p className="text-lg font-bold">
        4.5<br />
        <span className="text-gray-600">RATED APP</span>
    </p>
    <p className="text-gray-400">|</p>
    <p className="text-lg font-bold">
        25 lakh+<br />
        <span className="text-gray-600">DAILY WINNINGS</span>
    </p>
</div>

<div className="flex justify-center items-center space-x-8 my-8">
    <svg className="w-12 h-12 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100" height="100">
        <g transform="matrix(.35278 0 0 -.35278 30.588 .01)">
            <linearGradient id="fZ5QJO0zpePOIUpGT06DDa_1AzdGyrT9jI0_gr1" x1="-67.013" x2="-35.864" y1="-20.175" y2="-52.601" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#21ad64"></stop>
                <stop offset="1" stopColor="#088242"></stop>
            </linearGradient>
            <path fill="url(#fZ5QJO0zpePOIUpGT06DDa_1AzdGyrT9jI0_gr1)" d="M-3.488-12.991l26.973-53.638c0.605-1.203,0.349-2.66-0.629-3.586 l-56.7-53.632c-2.244-2.123-5.86,0.053-5.035,3.03L-9.152-13.546C-8.407-10.858-4.742-10.498-3.488-12.991z"></path>
        </g>
        <path d="M25.729,10.67l-7.631,27.536l13.43-12.698c0.661-0.625,0.837-1.629,0.429-2.44L25.729,10.67z" opacity=".05"></path>
        <path d="M25.53,11.388l-7.173,25.885l12.828-12.129c0.502-0.475,0.636-1.236,0.326-1.853L25.53,11.388z" opacity=".07"></path>
        <linearGradient id="fZ5QJO0zpePOIUpGT06DDb_1AzdGyrT9jI0_gr2" x1="-3.965" x2="30.418" y1="4.688" y2="39.071" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fed100"></stop>
            <stop offset="1" stopColor="#e36001"></stop>
        </linearGradient>
        <path fill="url(#fZ5QJO0zpePOIUpGT06DDb_1AzdGyrT9jI0_gr2)" d="M21.557,4.593l9.507,18.922c0.213,0.424,0.123,0.938-0.222,1.265L10.831,43.7 c-0.792,0.749-2.067-0.019-1.776-1.07L19.559,4.788C19.822,3.84,21.115,3.714,21.557,4.593z"></path>
    </svg>
</div>

<div className="text-sm text-gray-500 my-4 space-x-4">
    <h3>Fast UPI Withdrawals</h3>
</div>

<div className="text-center text-sm text-gray-600 my-4 space-x-4">
    <h3>Answer simple cricket questions in Yes or No. Get up to ₹100 joining bonus.</h3>
</div>

<div className="text-color p-8 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Opinion Trading</h1>
    <p className="text-lg text-gray-600 mb-6">is Simple With Probo</p>
</div>

<div className="flex flex-col items-center space-y-6">
    <div className="text-center">
        <svg className="flex justify-center items-center mb-6 my-8 space-x-4 space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100" height="100">
                <!-- Your SVG content here -->
            </svg>
        </svg>
        <h3 className="flex flex-col items-center space-x-4 my-8 mb-6">24*7 LIVE EVENTS</h3>
    </div>
</div>


        <div class="bg-gray-500 p-6 border border-gray-300 rounded-lg w-80">
          <div class="flex flex-col space-y-4 mr-6">
            <p class="font-semibold text-black mr-6">About Us</p>
            <p class="font-semibold text-black mr-6">Culture</p>
          </div>
          <div class="flex flex-col space-y-4 mr-6">
            <h2 class="font-semibold text-black mr-6">Carrers</h2>
            <p class="font-semibold text-black mr-6">Culture</p>
          </div>
          <div class="flex flex-col space-y-4 mr-6">
            <h2 class="font-semibold text-black mr-6">Resources</h2>
            <p class="font-semibold text-black mr-6">Help Centre</p>
            <p class="font-semibold text-black mr-6">Contact support</p>
             <p class="font-semibold text-black mr-6">What's new</p>
          </div>
          <div class="flex flex-col space-y-4 mr-6">
            <h2 class="font-semibold text-black mr-6">Contact us</h2>
            <p class="font-semibold text-black mr-6">help@probo.in</p>
            <p class="font-semibold text-black mr-6">communication@probo</p>
          </div>


          <div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
           <p class="font-semibold text-black my-8">
  Probo’s experience is made possible by our partnerships with TradingView 
  (track upcoming events with <u>Economic Calendar</u> or browse stocks in the <u>Screener</u>), 
  Authbridge for verification technology, DataMuni for data & analytics, 
  Google Firebase, Google Cloud & AWS. Probo is also a member of <bold>FICCI</bold> 
  and ASSOCHAM.
</p>
          </div>
        <img src="/images/trading-view.jpg" class="my-4 mr-4 rounded-lg p-4">
<img src="/images/google-cloud.jpg" class="my-4 mr-8 rounded-lg p-4 mb-6">
<img src="/images/google-firebase.jpg" class="my-4 mr-8 rounded-lg p-4">
<img src="/images/google-cloud.jpg" class="my-4 mr-8 rounded-lg p-4">

<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="www.linkedin.com" taregt="_blank" class="icon container">
       <svg xmlns="http://www.w3.org/2000/svg" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg>
<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="www.youtube.com" taregt="_blank" class="icon container">
       <svg xmlns="" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg> 
<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="www.twitter.com" taregt="_blank" class="icon container">
       <svg xmlns="<svg xmlns=<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 8 C 15.414 9.013 17.402 13.381141 18 14.994141 L 18 19 L 20 19 L 20 15 L 23 8 L 20.599609 8 L 19 12 L 17.400391 8 L 15 8 z M 25 11 C 23.994 11 23.228969 11.275313 22.667969 11.945312 C 22.234969 12.440312 22.001953 13.23425 22.001953 14.28125 L 22 15.726562 C 22 16.767563 22.205672 17.487516 22.638672 17.978516 C 23.200672 18.645516 24.111 19 25 19 C 25.889 19 26.815906 18.645562 27.378906 17.976562 C 27.804906 17.486562 28 16.767562 28 15.726562 L 28 14.275391 C 28 13.227391 27.758031 12.440312 27.332031 11.945312 C 26.770031 11.275313 25.889 11 25 11 z M 29 11 L 29 16.837891 C 29 17.497891 29.098281 17.946375 29.238281 18.234375 C 29.468281 18.707375 29.928844 18.949703 30.589844 18.970703 C 31.500844 19.000703 32.185 18.41 33 17.625 L 33 19 L 35 19 L 35 11 L 33 11 L 33 16.375 C 32.545 16.914 32.021375 17.392578 31.609375 17.392578 C 31.336375 17.392578 31.05 17.267 31 17 L 31 11 L 29 11 z M 25 12.619141 C 25.552 12.619141 26 13.076625 26 13.640625 L 26 16.447266 C 26 17.010266 25.552 17.46875 25 17.46875 C 24.448 17.46875 24 17.011266 24 16.447266 L 24 13.640625 C 24 13.077625 24.448 12.619141 25 12.619141 z M 24.990234 22 C 24.990234 22 18.280781 22.000312 13.800781 22.320312 C 13.170781 22.390313 11.809844 22.400391 10.589844 23.650391 C 9.6298437 24.590391 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9 28.280547 9 30.810547 L 9 33.179688 C 9 35.709688 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9.6298438 39.399609 10.589844 40.349609 C 11.809844 41.589609 13.409141 41.549688 14.119141 41.679688 C 16.679141 41.919688 25 42 25 42 C 25 42 31.719219 41.989922 36.199219 41.669922 C 36.829219 41.599922 38.190156 41.589844 39.410156 40.339844 C 40.370156 39.399844 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 41 35.709688 41 33.179688 L 41 30.810547 C 41 28.280547 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 40.370156 24.590391 39.410156 23.650391 C 38.190156 22.400391 36.829219 22.390312 36.199219 22.320312 C 31.719219 22.000312 25.009766 22 25.009766 22 L 24.990234 22 z M 12 26 L 18 26 L 18 28 L 16 28 L 16 38 L 14 38 L 14 28 L 12 28 L 12 26 z M 25 26 L 27 26 L 27 30.380859 C 27.75 29.500859 28.149141 28.99 29.119141 29 C 29.879141 29.01 30.490234 29.440703 30.740234 30.220703 C 30.870234 30.640703 31 31.390859 31 32.380859 L 31 35.130859 C 30.99 36.010859 30.899297 36.400313 30.779297 36.820312 C 30.529297 37.600313 29.879141 38 29.119141 38 C 28.449141 38 27.63 37.53 27 36.75 L 27 38 L 25 38 L 25 26 z M 18 29 L 20 29 L 20 35.890625 C 20.05 36.180625 20.259531 36.289062 20.519531 36.289062 C 20.919531 36.289062 21.56 35.849531 22 35.269531 L 22 29 L 24 29 L 24 38 L 22 38 L 22 36.630859 C 21.21 37.490859 20.269062 38 19.539062 38 C 18.899062 38 18.450469 37.720937 18.230469 37.210938 C 18.100469 36.890937 18 36.409453 18 35.689453 L 18 29 z M 35.029297 29 C 36.019297 29 36.809375 29.319922 37.359375 29.919922 C 37.769375 30.359922 38 31.040469 38 31.980469 L 38 34 L 34 34 L 34 35.800781 C 34 36.260781 34.45 36.640625 35 36.640625 C 35.55 36.640625 36 36.260781 36 35.800781 L 36 35 L 38 35 C 38 35.51 37.939687 35.939609 37.929688 36.099609 C 37.859687 36.449609 37.700938 36.770781 37.460938 37.050781 C 36.920938 37.690781 36.110078 38 35.080078 38 C 34.040078 38 33.259453 37.699609 32.689453 37.099609 C 32.269453 36.669609 32 36.010078 32 35.080078 L 32 32.019531 C 32 31.079531 32.239922 30.359922 32.669922 29.919922 C 33.239922 29.319922 34.019297 29 35.029297 29 z M 35 30.449219 C 34.45 30.449219 34 30.819062 34 31.289062 L 34 32.609375 L 36 32.609375 L 36 31.289062 C 36 30.819063 35.55 30.449219 35 30.449219 z M 28.220703 30.75 C 28.065703 30.75 27.839531 30.827813 27.613281 30.945312 C 27.500156 31.004062 27.386406 31.072422 27.28125 31.146484 C 27.176094 31.220547 27.08 31.300859 27 31.380859 L 27 35.75 C 27.08 35.83 27.176094 35.904063 27.28125 35.96875 C 27.596719 36.162813 27.988203 36.279297 28.220703 36.279297 C 28.423203 36.279297 28.581836 36.22998 28.703125 36.111328 C 28.743555 36.071777 28.780625 36.024062 28.8125 35.96875 C 28.87625 35.858125 28.922187 35.714609 28.953125 35.533203 C 28.984063 35.351797 29 35.131641 29 34.869141 L 29 32.130859 C 29 31.868359 28.984063 31.649297 28.953125 31.470703 C 28.89125 31.113516 28.767187 30.913047 28.570312 30.818359 C 28.471875 30.771016 28.355703 30.75 28.220703 30.75 z"></path>
</svg> width="100" height="100" viewBox="0 0 50 50">
<path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"></path>
</svg>" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg> 
<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="www.instagram.com" taregt="_blank" class="icon container">
       <svg xmlns="<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 8 C 15.414 9.013 17.402 13.381141 18 14.994141 L 18 19 L 20 19 L 20 15 L 23 8 L 20.599609 8 L 19 12 L 17.400391 8 L 15 8 z M 25 11 C 23.994 11 23.228969 11.275313 22.667969 11.945312 C 22.234969 12.440312 22.001953 13.23425 22.001953 14.28125 L 22 15.726562 C 22 16.767563 22.205672 17.487516 22.638672 17.978516 C 23.200672 18.645516 24.111 19 25 19 C 25.889 19 26.815906 18.645562 27.378906 17.976562 C 27.804906 17.486562 28 16.767562 28 15.726562 L 28 14.275391 C 28 13.227391 27.758031 12.440312 27.332031 11.945312 C 26.770031 11.275313 25.889 11 25 11 z M 29 11 L 29 16.837891 C 29 17.497891 29.098281 17.946375 29.238281 18.234375 C 29.468281 18.707375 29.928844 18.949703 30.589844 18.970703 C 31.500844 19.000703 32.185 18.41 33 17.625 L 33 19 L 35 19 L 35 11 L 33 11 L 33 16.375 C 32.545 16.914 32.021375 17.392578 31.609375 17.392578 C 31.336375 17.392578 31.05 17.267 31 17 L 31 11 L 29 11 z M 25 12.619141 C 25.552 12.619141 26 13.076625 26 13.640625 L 26 16.447266 C 26 17.010266 25.552 17.46875 25 17.46875 C 24.448 17.46875 24 17.011266 24 16.447266 L 24 13.640625 C 24 13.077625 24.448 12.619141 25 12.619141 z M 24.990234 22 C 24.990234 22 18.280781 22.000312 13.800781 22.320312 C 13.170781 22.390313 11.809844 22.400391 10.589844 23.650391 C 9.6298437 24.590391 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9 28.280547 9 30.810547 L 9 33.179688 C 9 35.709688 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9.6298438 39.399609 10.589844 40.349609 C 11.809844 41.589609 13.409141 41.549688 14.119141 41.679688 C 16.679141 41.919688 25 42 25 42 C 25 42 31.719219 41.989922 36.199219 41.669922 C 36.829219 41.599922 38.190156 41.589844 39.410156 40.339844 C 40.370156 39.399844 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 41 35.709688 41 33.179688 L 41 30.810547 C 41 28.280547 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 40.370156 24.590391 39.410156 23.650391 C 38.190156 22.400391 36.829219 22.390312 36.199219 22.320312 C 31.719219 22.000312 25.009766 22 25.009766 22 L 24.990234 22 z M 12 26 L 18 26 L 18 28 L 16 28 L 16 38 L 14 38 L 14 28 L 12 28 L 12 26 z M 25 26 L 27 26 L 27 30.380859 C 27.75 29.500859 28.149141 28.99 29.119141 29 C 29.879141 29.01 30.490234 29.440703 30.740234 30.220703 C 30.870234 30.640703 31 31.390859 31 32.380859 L 31 35.130859 C 30.99 36.010859 30.899297 36.400313 30.779297 36.820312 C 30.529297 37.600313 29.879141 38 29.119141 38 C 28.449141 38 27.63 37.53 27 36.75 L 27 38 L 25 38 L 25 26 z M 18 29 L 20 29 L 20 35.890625 C 20.05 36.180625 20.259531 36.289062 20.519531 36.289062 C 20.919531 36.289062 21.56 35.849531 22 35.269531 L 22 29 L 24 29 L 24 38 L 22 38 L 22 36.630859 C 21.21 37.490859 20.269062 38 19.539062 38 C 18.899062 38 18.450469 37.720937 18.230469 37.210938 C 18.100469 36.890937 18 36.409453 18 35.689453 L 18 29 z M 35.029297 29 C 36.019297 29 36.809375 29.319922 37.359375 29.919922 C 37.769375 30.359922 38 31.040469 38 31.980469 L 38 34 L 34 34 L 34 35.800781 C 34 36.260781 34.45 36.640625 35 36.640625 C 35.55 36.640625 36 36.260781 36 35.800781 L 36 35 L 38 35 C 38 35.51 37.939687 35.939609 37.929688 36.099609 C 37.859687 36.449609 37.700938 36.770781 37.460938 37.050781 C 36.920938 37.690781 36.110078 38 35.080078 38 C 34.040078 38 33.259453 37.699609 32.689453 37.099609 C 32.269453 36.669609 32 36.010078 32 35.080078 L 32 32.019531 C 32 31.079531 32.239922 30.359922 32.669922 29.919922 C 33.239922 29.319922 34.019297 29 35.029297 29 z M 35 30.449219 C 34.45 30.449219 34 30.819062 34 31.289062 L 34 32.609375 L 36 32.609375 L 36 31.289062 C 36 30.819063 35.55 30.449219 35 30.449219 z M 28.220703 30.75 C 28.065703 30.75 27.839531 30.827813 27.613281 30.945312 C 27.500156 31.004062 27.386406 31.072422 27.28125 31.146484 C 27.176094 31.220547 27.08 31.300859 27 31.380859 L 27 35.75 C 27.08 35.83 27.176094 35.904063 27.28125 35.96875 C 27.596719 36.162813 27.988203 36.279297 28.220703 36.279297 C 28.423203 36.279297 28.581836 36.22998 28.703125 36.111328 C 28.743555 36.071777 28.780625 36.024062 28.8125 35.96875 C 28.87625 35.858125 28.922187 35.714609 28.953125 35.533203 C 28.984063 35.351797 29 35.131641 29 34.869141 L 29 32.130859 C 29 31.868359 28.984063 31.649297 28.953125 31.470703 C 28.89125 31.113516 28.767187 30.913047 28.570312 30.818359 C 28.471875 30.771016 28.355703 30.75 28.220703 30.75 z"></path>
</svg>width="100" height="100" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg> 

< class="bg-gray-500 p-4 border border-gray-300 rounded-lg">
    <div class="flex text-black text-xl my-4 mx-4 gap-4">
    <h3>Terms and Conditions</h3>
    <h3>Privacy Policy</h3>

    <footer class="fixed bottom-0 w-full text-center text-gray-600 text-sm py-4 bg-white">
         © Copyright 2024 by Probo Media Technologies Pvt. Ltd.
    </footer>
</div>
<div class="bg-gray-500 p-4 border border-gray-300 rounded-lg">
    <h2 class="text-black font-semibold">Play Responsibly</h2>
    <p class="my-4 mx-4 text-black">
        This game may be habit-forming or financially risky. Play Responsibly.  
        *Probo is available in all states where allowed by law. However, users in some states might not be able to access our app or its contests.
    </p>
</div>
<div class="bg-gray-500 p-4 border border-gray-300 rounded-lg">
      <h2 class="text-black font-semibold"></h2>

</div>





</div>



    </a>

    </a>



          
        

        


        </div>

        

            


            </div>
        </div>
    </div>
   </div>
   
</div>


    



    </h3>
</div>

</div>
}

export default App;
plz correct all this code and add a rectangu
lar box in all components i made
" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg> 
<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="www.twitter.com" taregt="_blank" class="icon container">
       <svg xmlns="<svg xmlns=<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 8 C 15.414 9.013 17.402 13.381141 18 14.994141 L 18 19 L 20 19 L 20 15 L 23 8 L 20.599609 8 L 19 12 L 17.400391 8 L 15 8 z M 25 11 C 23.994 11 23.228969 11.275313 22.667969 11.945312 C 22.234969 12.440312 22.001953 13.23425 22.001953 14.28125 L 22 15.726562 C 22 16.767563 22.205672 17.487516 22.638672 17.978516 C 23.200672 18.645516 24.111 19 25 19 C 25.889 19 26.815906 18.645562 27.378906 17.976562 C 27.804906 17.486562 28 16.767562 28 15.726562 L 28 14.275391 C 28 13.227391 27.758031 12.440312 27.332031 11.945312 C 26.770031 11.275313 25.889 11 25 11 z M 29 11 L 29 16.837891 C 29 17.497891 29.098281 17.946375 29.238281 18.234375 C 29.468281 18.707375 29.928844 18.949703 30.589844 18.970703 C 31.500844 19.000703 32.185 18.41 33 17.625 L 33 19 L 35 19 L 35 11 L 33 11 L 33 16.375 C 32.545 16.914 32.021375 17.392578 31.609375 17.392578 C 31.336375 17.392578 31.05 17.267 31 17 L 31 11 L 29 11 z M 25 12.619141 C 25.552 12.619141 26 13.076625 26 13.640625 L 26 16.447266 C 26 17.010266 25.552 17.46875 25 17.46875 C 24.448 17.46875 24 17.011266 24 16.447266 L 24 13.640625 C 24 13.077625 24.448 12.619141 25 12.619141 z M 24.990234 22 C 24.990234 22 18.280781 22.000312 13.800781 22.320312 C 13.170781 22.390313 11.809844 22.400391 10.589844 23.650391 C 9.6298437 24.590391 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9 28.280547 9 30.810547 L 9 33.179688 C 9 35.709688 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9.6298438 39.399609 10.589844 40.349609 C 11.809844 41.589609 13.409141 41.549688 14.119141 41.679688 C 16.679141 41.919688 25 42 25 42 C 25 42 31.719219 41.989922 36.199219 41.669922 C 36.829219 41.599922 38.190156 41.589844 39.410156 40.339844 C 40.370156 39.399844 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 41 35.709688 41 33.179688 L 41 30.810547 C 41 28.280547 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 40.370156 24.590391 39.410156 23.650391 C 38.190156 22.400391 36.829219 22.390312 36.199219 22.320312 C 31.719219 22.000312 25.009766 22 25.009766 22 L 24.990234 22 z M 12 26 L 18 26 L 18 28 L 16 28 L 16 38 L 14 38 L 14 28 L 12 28 L 12 26 z M 25 26 L 27 26 L 27 30.380859 C 27.75 29.500859 28.149141 28.99 29.119141 29 C 29.879141 29.01 30.490234 29.440703 30.740234 30.220703 C 30.870234 30.640703 31 31.390859 31 32.380859 L 31 35.130859 C 30.99 36.010859 30.899297 36.400313 30.779297 36.820312 C 30.529297 37.600313 29.879141 38 29.119141 38 C 28.449141 38 27.63 37.53 27 36.75 L 27 38 L 25 38 L 25 26 z M 18 29 L 20 29 L 20 35.890625 C 20.05 36.180625 20.259531 36.289062 20.519531 36.289062 C 20.919531 36.289062 21.56 35.849531 22 35.269531 L 22 29 L 24 29 L 24 38 L 22 38 L 22 36.630859 C 21.21 37.490859 20.269062 38 19.539062 38 C 18.899062 38 18.450469 37.720937 18.230469 37.210938 C 18.100469 36.890937 18 36.409453 18 35.689453 L 18 29 z M 35.029297 29 C 36.019297 29 36.809375 29.319922 37.359375 29.919922 C 37.769375 30.359922 38 31.040469 38 31.980469 L 38 34 L 34 34 L 34 35.800781 C 34 36.260781 34.45 36.640625 35 36.640625 C 35.55 36.640625 36 36.260781 36 35.800781 L 36 35 L 38 35 C 38 35.51 37.939687 35.939609 37.929688 36.099609 C 37.859687 36.449609 37.700938 36.770781 37.460938 37.050781 C 36.920938 37.690781 36.110078 38 35.080078 38 C 34.040078 38 33.259453 37.699609 32.689453 37.099609 C 32.269453 36.669609 32 36.010078 32 35.080078 L 32 32.019531 C 32 31.079531 32.239922 30.359922 32.669922 29.919922 C 33.239922 29.319922 34.019297 29 35.029297 29 z M 35 30.449219 C 34.45 30.449219 34 30.819062 34 31.289062 L 34 32.609375 L 36 32.609375 L 36 31.289062 C 36 30.819063 35.55 30.449219 35 30.449219 z M 28.220703 30.75 C 28.065703 30.75 27.839531 30.827813 27.613281 30.945312 C 27.500156 31.004062 27.386406 31.072422 27.28125 31.146484 C 27.176094 31.220547 27.08 31.300859 27 31.380859 L 27 35.75 C 27.08 35.83 27.176094 35.904063 27.28125 35.96875 C 27.596719 36.162813 27.988203 36.279297 28.220703 36.279297 C 28.423203 36.279297 28.581836 36.22998 28.703125 36.111328 C 28.743555 36.071777 28.780625 36.024062 28.8125 35.96875 C 28.87625 35.858125 28.922187 35.714609 28.953125 35.533203 C 28.984063 35.351797 29 35.131641 29 34.869141 L 29 32.130859 C 29 31.868359 28.984063 31.649297 28.953125 31.470703 C 28.89125 31.113516 28.767187 30.913047 28.570312 30.818359 C 28.471875 30.771016 28.355703 30.75 28.220703 30.75 z"></path>
</svg> width="100" height="100" viewBox="0 0 50 50">
<path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"></path>
</svg>" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg> 
<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="www.instagram.com" taregt="_blank" class="icon container">
       <svg xmlns="<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 8 C 15.414 9.013 17.402 13.381141 18 14.994141 L 18 19 L 20 19 L 20 15 L 23 8 L 20.599609 8 L 19 12 L 17.400391 8 L 15 8 z M 25 11 C 23.994 11 23.228969 11.275313 22.667969 11.945312 C 22.234969 12.440312 22.001953 13.23425 22.001953 14.28125 L 22 15.726562 C 22 16.767563 22.205672 17.487516 22.638672 17.978516 C 23.200672 18.645516 24.111 19 25 19 C 25.889 19 26.815906 18.645562 27.378906 17.976562 C 27.804906 17.486562 28 16.767562 28 15.726562 L 28 14.275391 C 28 13.227391 27.758031 12.440312 27.332031 11.945312 C 26.770031 11.275313 25.889 11 25 11 z M 29 11 L 29 16.837891 C 29 17.497891 29.098281 17.946375 29.238281 18.234375 C 29.468281 18.707375 29.928844 18.949703 30.589844 18.970703 C 31.500844 19.000703 32.185 18.41 33 17.625 L 33 19 L 35 19 L 35 11 L 33 11 L 33 16.375 C 32.545 16.914 32.021375 17.392578 31.609375 17.392578 C 31.336375 17.392578 31.05 17.267 31 17 L 31 11 L 29 11 z M 25 12.619141 C 25.552 12.619141 26 13.076625 26 13.640625 L 26 16.447266 C 26 17.010266 25.552 17.46875 25 17.46875 C 24.448 17.46875 24 17.011266 24 16.447266 L 24 13.640625 C 24 13.077625 24.448 12.619141 25 12.619141 z M 24.990234 22 C 24.990234 22 18.280781 22.000312 13.800781 22.320312 C 13.170781 22.390313 11.809844 22.400391 10.589844 23.650391 C 9.6298437 24.590391 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9 28.280547 9 30.810547 L 9 33.179688 C 9 35.709688 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9.6298438 39.399609 10.589844 40.349609 C 11.809844 41.589609 13.409141 41.549688 14.119141 41.679688 C 16.679141 41.919688 25 42 25 42 C 25 42 31.719219 41.989922 36.199219 41.669922 C 36.829219 41.599922 38.190156 41.589844 39.410156 40.339844 C 40.370156 39.399844 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 41 35.709688 41 33.179688 L 41 30.810547 C 41 28.280547 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 40.370156 24.590391 39.410156 23.650391 C 38.190156 22.400391 36.829219 22.390312 36.199219 22.320312 C 31.719219 22.000312 25.009766 22 25.009766 22 L 24.990234 22 z M 12 26 L 18 26 L 18 28 L 16 28 L 16 38 L 14 38 L 14 28 L 12 28 L 12 26 z M 25 26 L 27 26 L 27 30.380859 C 27.75 29.500859 28.149141 28.99 29.119141 29 C 29.879141 29.01 30.490234 29.440703 30.740234 30.220703 C 30.870234 30.640703 31 31.390859 31 32.380859 L 31 35.130859 C 30.99 36.010859 30.899297 36.400313 30.779297 36.820312 C 30.529297 37.600313 29.879141 38 29.119141 38 C 28.449141 38 27.63 37.53 27 36.75 L 27 38 L 25 38 L 25 26 z M 18 29 L 20 29 L 20 35.890625 C 20.05 36.180625 20.259531 36.289062 20.519531 36.289062 C 20.919531 36.289062 21.56 35.849531 22 35.269531 L 22 29 L 24 29 L 24 38 L 22 38 L 22 36.630859 C 21.21 37.490859 20.269062 38 19.539062 38 C 18.899062 38 18.450469 37.720937 18.230469 37.210938 C 18.100469 36.890937 18 36.409453 18 35.689453 L 18 29 z M 35.029297 29 C 36.019297 29 36.809375 29.319922 37.359375 29.919922 C 37.769375 30.359922 38 31.040469 38 31.980469 L 38 34 L 34 34 L 34 35.800781 C 34 36.260781 34.45 36.640625 35 36.640625 C 35.55 36.640625 36 36.260781 36 35.800781 L 36 35 L 38 35 C 38 35.51 37.939687 35.939609 37.929688 36.099609 C 37.859687 36.449609 37.700938 36.770781 37.460938 37.050781 C 36.920938 37.690781 36.110078 38 35.080078 38 C 34.040078 38 33.259453 37.699609 32.689453 37.099609 C 32.269453 36.669609 32 36.010078 32 35.080078 L 32 32.019531 C 32 31.079531 32.239922 30.359922 32.669922 29.919922 C 33.239922 29.319922 34.019297 29 35.029297 29 z M 35 30.449219 C 34.45 30.449219 34 30.819062 34 31.289062 L 34 32.609375 L 36 32.609375 L 36 31.289062 C 36 30.819063 35.55 30.449219 35 30.449219 z M 28.220703 30.75 C 28.065703 30.75 27.839531 30.827813 27.613281 30.945312 C 27.500156 31.004062 27.386406 31.072422 27.28125 31.146484 C 27.176094 31.220547 27.08 31.300859 27 31.380859 L 27 35.75 C 27.08 35.83 27.176094 35.904063 27.28125 35.96875 C 27.596719 36.162813 27.988203 36.279297 28.220703 36.279297 C 28.423203 36.279297 28.581836 36.22998 28.703125 36.111328 C 28.743555 36.071777 28.780625 36.024062 28.8125 35.96875 C 28.87625 35.858125 28.922187 35.714609 28.953125 35.533203 C 28.984063 35.351797 29 35.131641 29 34.869141 L 29 32.130859 C 29 31.868359 28.984063 31.649297 28.953125 31.470703 C 28.89125 31.113516 28.767187 30.913047 28.570312 30.818359 C 28.471875 30.771016 28.355703 30.75 28.220703 30.75 z"></path>
</svg>width="100" height="100" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg> 

<div class="bg-gray-500 p-4 border border-gray-300 rounded-lg">
    <div class="flex text-black text-xl my-4 mx-4 gap-4">
    <h3>Terms and Conditions</h3>
    <h3>Privacy Policy</h3>

    <footer class="fixed bottom-0 w-full text-center text-gray-600 text-sm py-4 bg-white">
         © Copyright 2024 by Probo Media Technologies Pvt. Ltd.
    </footer>
</div>
<div class="bg-gray-500 p-4 border border-gray-300 rounded-lg">
    <h2 class="text-black font-semibold">Play Responsibly</h2>
    <p class="my-4 mx-4 text-black">
        This game may be habit-forming or financially risky. Play Responsibly.  
        *Probo is available in all states where allowed by law. However, users in some states might not be able to access our app or its contests.
    </p>
</div>




</div>



    </a>

    </a>



          
        

        


        </div>

        

            


            </div>
        </div>
    </div>
   </div>
   
</div>


    



    </h3>
</div>

</div>
}

export default App;
plz correct all this code and add a rectangu
lar box in all components i made
" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg> 
<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="www.twitter.com" taregt="_blank" class="icon container">
       <svg xmlns="<svg xmlns=<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 8 C 15.414 9.013 17.402 13.381141 18 14.994141 L 18 19 L 20 19 L 20 15 L 23 8 L 20.599609 8 L 19 12 L 17.400391 8 L 15 8 z M 25 11 C 23.994 11 23.228969 11.275313 22.667969 11.945312 C 22.234969 12.440312 22.001953 13.23425 22.001953 14.28125 L 22 15.726562 C 22 16.767563 22.205672 17.487516 22.638672 17.978516 C 23.200672 18.645516 24.111 19 25 19 C 25.889 19 26.815906 18.645562 27.378906 17.976562 C 27.804906 17.486562 28 16.767562 28 15.726562 L 28 14.275391 C 28 13.227391 27.758031 12.440312 27.332031 11.945312 C 26.770031 11.275313 25.889 11 25 11 z M 29 11 L 29 16.837891 C 29 17.497891 29.098281 17.946375 29.238281 18.234375 C 29.468281 18.707375 29.928844 18.949703 30.589844 18.970703 C 31.500844 19.000703 32.185 18.41 33 17.625 L 33 19 L 35 19 L 35 11 L 33 11 L 33 16.375 C 32.545 16.914 32.021375 17.392578 31.609375 17.392578 C 31.336375 17.392578 31.05 17.267 31 17 L 31 11 L 29 11 z M 25 12.619141 C 25.552 12.619141 26 13.076625 26 13.640625 L 26 16.447266 C 26 17.010266 25.552 17.46875 25 17.46875 C 24.448 17.46875 24 17.011266 24 16.447266 L 24 13.640625 C 24 13.077625 24.448 12.619141 25 12.619141 z M 24.990234 22 C 24.990234 22 18.280781 22.000312 13.800781 22.320312 C 13.170781 22.390313 11.809844 22.400391 10.589844 23.650391 C 9.6298437 24.590391 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9 28.280547 9 30.810547 L 9 33.179688 C 9 35.709688 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9.6298438 39.399609 10.589844 40.349609 C 11.809844 41.589609 13.409141 41.549688 14.119141 41.679688 C 16.679141 41.919688 25 42 25 42 C 25 42 31.719219 41.989922 36.199219 41.669922 C 36.829219 41.599922 38.190156 41.589844 39.410156 40.339844 C 40.370156 39.399844 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 41 35.709688 41 33.179688 L 41 30.810547 C 41 28.280547 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 40.370156 24.590391 39.410156 23.650391 C 38.190156 22.400391 36.829219 22.390312 36.199219 22.320312 C 31.719219 22.000312 25.009766 22 25.009766 22 L 24.990234 22 z M 12 26 L 18 26 L 18 28 L 16 28 L 16 38 L 14 38 L 14 28 L 12 28 L 12 26 z M 25 26 L 27 26 L 27 30.380859 C 27.75 29.500859 28.149141 28.99 29.119141 29 C 29.879141 29.01 30.490234 29.440703 30.740234 30.220703 C 30.870234 30.640703 31 31.390859 31 32.380859 L 31 35.130859 C 30.99 36.010859 30.899297 36.400313 30.779297 36.820312 C 30.529297 37.600313 29.879141 38 29.119141 38 C 28.449141 38 27.63 37.53 27 36.75 L 27 38 L 25 38 L 25 26 z M 18 29 L 20 29 L 20 35.890625 C 20.05 36.180625 20.259531 36.289062 20.519531 36.289062 C 20.919531 36.289062 21.56 35.849531 22 35.269531 L 22 29 L 24 29 L 24 38 L 22 38 L 22 36.630859 C 21.21 37.490859 20.269062 38 19.539062 38 C 18.899062 38 18.450469 37.720937 18.230469 37.210938 C 18.100469 36.890937 18 36.409453 18 35.689453 L 18 29 z M 35.029297 29 C 36.019297 29 36.809375 29.319922 37.359375 29.919922 C 37.769375 30.359922 38 31.040469 38 31.980469 L 38 34 L 34 34 L 34 35.800781 C 34 36.260781 34.45 36.640625 35 36.640625 C 35.55 36.640625 36 36.260781 36 35.800781 L 36 35 L 38 35 C 38 35.51 37.939687 35.939609 37.929688 36.099609 C 37.859687 36.449609 37.700938 36.770781 37.460938 37.050781 C 36.920938 37.690781 36.110078 38 35.080078 38 C 34.040078 38 33.259453 37.699609 32.689453 37.099609 C 32.269453 36.669609 32 36.010078 32 35.080078 L 32 32.019531 C 32 31.079531 32.239922 30.359922 32.669922 29.919922 C 33.239922 29.319922 34.019297 29 35.029297 29 z M 35 30.449219 C 34.45 30.449219 34 30.819062 34 31.289062 L 34 32.609375 L 36 32.609375 L 36 31.289062 C 36 30.819063 35.55 30.449219 35 30.449219 z M 28.220703 30.75 C 28.065703 30.75 27.839531 30.827813 27.613281 30.945312 C 27.500156 31.004062 27.386406 31.072422 27.28125 31.146484 C 27.176094 31.220547 27.08 31.300859 27 31.380859 L 27 35.75 C 27.08 35.83 27.176094 35.904063 27.28125 35.96875 C 27.596719 36.162813 27.988203 36.279297 28.220703 36.279297 C 28.423203 36.279297 28.581836 36.22998 28.703125 36.111328 C 28.743555 36.071777 28.780625 36.024062 28.8125 35.96875 C 28.87625 35.858125 28.922187 35.714609 28.953125 35.533203 C 28.984063 35.351797 29 35.131641 29 34.869141 L 29 32.130859 C 29 31.868359 28.984063 31.649297 28.953125 31.470703 C 28.89125 31.113516 28.767187 30.913047 28.570312 30.818359 C 28.471875 30.771016 28.355703 30.75 28.220703 30.75 z"></path>
</svg> width="100" height="100" viewBox="0 0 50 50">
<path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"></path>
</svg>" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg> 
<div class="bg-gray-500 p-6 border border-gray-300 rounded-lg">
    <a href="www.instagram.com" taregt="_blank" class="icon container">
       <svg xmlns="<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 8 C 15.414 9.013 17.402 13.381141 18 14.994141 L 18 19 L 20 19 L 20 15 L 23 8 L 20.599609 8 L 19 12 L 17.400391 8 L 15 8 z M 25 11 C 23.994 11 23.228969 11.275313 22.667969 11.945312 C 22.234969 12.440312 22.001953 13.23425 22.001953 14.28125 L 22 15.726562 C 22 16.767563 22.205672 17.487516 22.638672 17.978516 C 23.200672 18.645516 24.111 19 25 19 C 25.889 19 26.815906 18.645562 27.378906 17.976562 C 27.804906 17.486562 28 16.767562 28 15.726562 L 28 14.275391 C 28 13.227391 27.758031 12.440312 27.332031 11.945312 C 26.770031 11.275313 25.889 11 25 11 z M 29 11 L 29 16.837891 C 29 17.497891 29.098281 17.946375 29.238281 18.234375 C 29.468281 18.707375 29.928844 18.949703 30.589844 18.970703 C 31.500844 19.000703 32.185 18.41 33 17.625 L 33 19 L 35 19 L 35 11 L 33 11 L 33 16.375 C 32.545 16.914 32.021375 17.392578 31.609375 17.392578 C 31.336375 17.392578 31.05 17.267 31 17 L 31 11 L 29 11 z M 25 12.619141 C 25.552 12.619141 26 13.076625 26 13.640625 L 26 16.447266 C 26 17.010266 25.552 17.46875 25 17.46875 C 24.448 17.46875 24 17.011266 24 16.447266 L 24 13.640625 C 24 13.077625 24.448 12.619141 25 12.619141 z M 24.990234 22 C 24.990234 22 18.280781 22.000312 13.800781 22.320312 C 13.170781 22.390313 11.809844 22.400391 10.589844 23.650391 C 9.6298437 24.590391 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9 28.280547 9 30.810547 L 9 33.179688 C 9 35.709688 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9.6298438 39.399609 10.589844 40.349609 C 11.809844 41.589609 13.409141 41.549688 14.119141 41.679688 C 16.679141 41.919688 25 42 25 42 C 25 42 31.719219 41.989922 36.199219 41.669922 C 36.829219 41.599922 38.190156 41.589844 39.410156 40.339844 C 40.370156 39.399844 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 41 35.709688 41 33.179688 L 41 30.810547 C 41 28.280547 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 40.370156 24.590391 39.410156 23.650391 C 38.190156 22.400391 36.829219 22.390312 36.199219 22.320312 C 31.719219 22.000312 25.009766 22 25.009766 22 L 24.990234 22 z M 12 26 L 18 26 L 18 28 L 16 28 L 16 38 L 14 38 L 14 28 L 12 28 L 12 26 z M 25 26 L 27 26 L 27 30.380859 C 27.75 29.500859 28.149141 28.99 29.119141 29 C 29.879141 29.01 30.490234 29.440703 30.740234 30.220703 C 30.870234 30.640703 31 31.390859 31 32.380859 L 31 35.130859 C 30.99 36.010859 30.899297 36.400313 30.779297 36.820312 C 30.529297 37.600313 29.879141 38 29.119141 38 C 28.449141 38 27.63 37.53 27 36.75 L 27 38 L 25 38 L 25 26 z M 18 29 L 20 29 L 20 35.890625 C 20.05 36.180625 20.259531 36.289062 20.519531 36.289062 C 20.919531 36.289062 21.56 35.849531 22 35.269531 L 22 29 L 24 29 L 24 38 L 22 38 L 22 36.630859 C 21.21 37.490859 20.269062 38 19.539062 38 C 18.899062 38 18.450469 37.720937 18.230469 37.210938 C 18.100469 36.890937 18 36.409453 18 35.689453 L 18 29 z M 35.029297 29 C 36.019297 29 36.809375 29.319922 37.359375 29.919922 C 37.769375 30.359922 38 31.040469 38 31.980469 L 38 34 L 34 34 L 34 35.800781 C 34 36.260781 34.45 36.640625 35 36.640625 C 35.55 36.640625 36 36.260781 36 35.800781 L 36 35 L 38 35 C 38 35.51 37.939687 35.939609 37.929688 36.099609 C 37.859687 36.449609 37.700938 36.770781 37.460938 37.050781 C 36.920938 37.690781 36.110078 38 35.080078 38 C 34.040078 38 33.259453 37.699609 32.689453 37.099609 C 32.269453 36.669609 32 36.010078 32 35.080078 L 32 32.019531 C 32 31.079531 32.239922 30.359922 32.669922 29.919922 C 33.239922 29.319922 34.019297 29 35.029297 29 z M 35 30.449219 C 34.45 30.449219 34 30.819062 34 31.289062 L 34 32.609375 L 36 32.609375 L 36 31.289062 C 36 30.819063 35.55 30.449219 35 30.449219 z M 28.220703 30.75 C 28.065703 30.75 27.839531 30.827813 27.613281 30.945312 C 27.500156 31.004062 27.386406 31.072422 27.28125 31.146484 C 27.176094 31.220547 27.08 31.300859 27 31.380859 L 27 35.75 C 27.08 35.83 27.176094 35.904063 27.28125 35.96875 C 27.596719 36.162813 27.988203 36.279297 28.220703 36.279297 C 28.423203 36.279297 28.581836 36.22998 28.703125 36.111328 C 28.743555 36.071777 28.780625 36.024062 28.8125 35.96875 C 28.87625 35.858125 28.922187 35.714609 28.953125 35.533203 C 28.984063 35.351797 29 35.131641 29 34.869141 L 29 32.130859 C 29 31.868359 28.984063 31.649297 28.953125 31.470703 C 28.89125 31.113516 28.767187 30.913047 28.570312 30.818359 C 28.471875 30.771016 28.355703 30.75 28.220703 30.75 z"></path>
</svg>width="100" height="100" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>" class="flex items-center justify-center w-10 h-10 bg-gray-500 rouded-full hover:bg-gray-700">
       </svg> 
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg> 

<div class="bg-gray-500 p-4 border border-gray-300 rounded-lg">
    <div class="flex text-black text-xl my-4 mx-4 gap-4">
    <h3>Terms and Conditions</h3>
    <h3>Privacy Policy</h3>

    <footer class="fixed bottom-0 w-full text-center text-gray-600 text-sm py-4 bg-white">
         © Copyright 2024 by Probo Media Technologies Pvt. Ltd.
    </footer>
</div>
<div class="bg-gray-500 p-4 border border-gray-300 rounded-lg">
    <h2 class="text-black font-semibold">Play Responsibly</h2>
    <p class="my-4 mx-4 text-black">
        This game may be habit-forming or financially risky. Play Responsibly.  
        *Probo is available in all states where allowed by law. However, users in some states might not be able to access our app or its contests.
    </p>
</div>




</div>



    </a>

    </a>



          
        

        


        </div>

        

            


            </div>
        </div>
    </div>
   </div>
   
</div>


    



    </h3>
</div>

</div>
}

export default App;
