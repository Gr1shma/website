<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> — RSS Feed</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            max-width: 48rem;
            margin: 0 auto;
            padding: 2rem 1rem;
            background: #111;
            color: #d1d5db;
          }
          a { color: #fc8f4c; }
          a:hover { text-decoration: underline; }
          .banner {
            border: 1px solid #333;
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin-bottom: 2rem;
          }
          .banner h1 { color: #d1d5db; font-size: 1.25rem; margin-bottom: 0.5rem; }
          .banner p { color: #9ca3af; font-size: 0.875rem; line-height: 1.5; }
          .banner .note {
            margin-top: 1rem;
            padding: 0.75rem;
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 0.375rem;
            color: #9ca3af;
            font-size: 0.8rem;
            line-height: 1.4;
          }
          h2 { color: #d1d5db; font-size: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid #333; padding-bottom: 0.5rem; }
          .post {
            padding: 1rem 0;
            border-bottom: 1px solid #222;
          }
          .post:last-child { border-bottom: none; }
          .post-title a {
            color: #d1d5db;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 600;
          }
          .post-title a:hover { color: #fc8f4c; }
          .post-date {
            color: #6b7280;
            font-size: 0.8rem;
            margin-top: 0.25rem;
          }
          .post-description {
            color: #9ca3af;
            font-size: 0.85rem;
            margin-top: 0.5rem;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <div class="banner">
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p><xsl:value-of select="/rss/channel/description"/></p>
          <div class="note">
            This is an RSS feed. Copy the URL into your reader to subscribe.
          </div>
        </div>
        <h2>Recent Posts</h2>
        <xsl:for-each select="/rss/channel/item">
          <div class="post">
            <div class="post-title">
              <a>
                <xsl:attribute name="href">
                  <xsl:value-of select="link"/>
                </xsl:attribute>
                <xsl:value-of select="title"/>
              </a>
            </div>
            <div class="post-date">
              <xsl:value-of select="pubDate"/>
            </div>
            <xsl:if test="description">
              <div class="post-description">
                <xsl:value-of select="description"/>
              </div>
            </xsl:if>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
