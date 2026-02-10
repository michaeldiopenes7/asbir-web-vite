
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    canonical,
    openGraphType = 'website',
    image,
    schema
}) => {
    const siteTitle = 'AsbirTech - Web & Mobile Development Solutions';
    const siteUrl = 'https://asbirtech.com';
    const defaultImage = 'https://asbirtech.com/og-image.jpg';

    const fullTitle = title ? `${title} | AsbirTech` : siteTitle;
    const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const metaImage = image || defaultImage;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={openGraphType} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={metaImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
