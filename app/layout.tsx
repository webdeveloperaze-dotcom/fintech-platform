import React from 'react';

const Layout = ({ children }) => {
    return (
        <html lang="az">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Fintech Platform" />
                <meta property="og:title" content="Fintech Platform" />
                <meta property="og:description" content="A comprehensive fintech platform" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta property="og:image" content="https://yourwebsite.com/image.jpg" />
                <title>Fintech Platform</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
};

export default Layout;