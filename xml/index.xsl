<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>

            </head>
            <body>
                <h2>Email Details</h2>
                <table border="1" cellpadding = "10">
                    <tr bgcolor="#9acd32">
                        <th>Date</th>
                        <th>To</th>
                        <th>From</th>
                        <th>Subject</th>
                        <th>Content</th>
                    </tr>
                    <xsl:for-each select="Emails/Email">
                    <tr>
                        <td>
                            <xsl:value-of select="date" />
                        </td>
                        <td>
                            <xsl:value-of select="To" />
                        </td>
                        <td>
                            <xsl:value-of select="from" />
                        </td>
                        <td>
                            <xsl:value-of select="subject" />
                        </td>
                        <td>
                            <xsl:value-of select="content" />
                        </td>
                    </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>