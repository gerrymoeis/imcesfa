import React from 'react';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
};

export const Seo: React.FC<SeoProps> = ({ title, description, keywords, image }) => {
  const fullTitle = `${title} | IMCESFA 2025`;
  const metaImage = image || 'https://imcesfa.com/default-og-image.png'; // Replace with your actual default image URL

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={metaImage} />
    </>
  );
};
