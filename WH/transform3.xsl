<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output  method="text" encoding="utf-8" indent="yes"/>
	<xsl:variable name="rootElementName" select="name(/*)" />

	<xsl:template match = "/*[node()]">
		<xsl:text>{</xsl:text>
			 <xsl:apply-templates select="/*" mode="detect" />
		<xsl:text>}</xsl:text>
	</xsl:template>

	

	<!--
	<xsl:template match = "/*[node()]">
		<xsl:text>{ "bets": { "event":[ </xsl:text>
			<xsl:for-each select="/bets/event[1]">
				<xsl:text>"</xsl:text>
				<xsl:value-of select="."/>
				<xsl:text>"</xsl:text>

			<xsl:for-each select="/bets/event[position()>1]">
				<xsl:text>,"</xsl:text>
				<xsl:value-of select="."/>
				<xsl:text>"</xsl:text>
			</xsl:for-each>
			
        <xsl:text>]}}</xsl:text>
	</xsl:template>
	-->
	



</xsl:stylesheet>