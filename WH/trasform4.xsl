<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output  method="text" encoding="utf-8" indent="yes"/>

	<xsl:variable name="rootElementName" select="name(/*)" />
	<xsl:variable name="ChildElementNames" select="" />

	<xsl:template match = "/*[node()]">
		<xsl:text>{</xsl:text>
		<xsl:text>"</xsl:text>
		<xsl:value-of select="$rootElementName"/>
		<xsl:text>":{</xsl:text>
		<xsl:apply-templates select="." mode="detect" />
        <xsl:text>}</xsl:text>
        <xsl:text>}</xsl:text>
	</xsl:template>

	<xsl:template match="/event">
		<xsl:apply-templates select="." mode="detect" />
	</xsl:template>

	

</xsl:stylesheet>