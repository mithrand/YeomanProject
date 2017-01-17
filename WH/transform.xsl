<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output  method="text" encoding="utf-8" indent="yes"/>
	
	<xsl:template match = "/"> <!-- Template to apply -->
		<xsl:text>{</xsl:text>
		<xsl:for-each select="/*[node()]">  <!-- Select the root node-->
			<xsl:choose>
				<xsl:when test="@visibility"> <!-- if visibility is defined -->
			  		<xsl:if test="@visibility!='hidden'">  <!-- if visibility is not set to hidden  we print the root -->
			  			<xsl:text>"</xsl:text>
						<xsl:value-of select="name()"/>
						<xsl:text>":{</xsl:text>
					</xsl:if>
				</xsl:when>
				<xsl:otherwise> <!-- if visibility is not defined we also print the root -->
					<xsl:text>"</xsl:text>
						<xsl:value-of select="name()"/>
						<xsl:text>":{</xsl:text>
				</xsl:otherwise>
			</xsl:choose>
			<xsl:for-each select="./*[1]"> <!-- select the first child -->
				<xsl:text>"</xsl:text>
				<xsl:value-of select="name()"/> <!-- print first child element name --> 
				<xsl:variable name="firstChildName" select="name()" /> 
				<xsl:text>":["</xsl:text>
				<xsl:value-of select="."/>
				<xsl:text>"</xsl:text>
				<!-- we select elements after the first child -->
				<xsl:for-each select="../*[position()>1 and name()=$firstChildName]">
					<xsl:text>,"</xsl:text>
					<xsl:value-of select="."/>
					<xsl:text>"</xsl:text>
				</xsl:for-each>
				<xsl:text>]</xsl:text>
			</xsl:for-each>
			<xsl:choose>
				<xsl:when test="@visibility">
					<xsl:if test="@visibility!='hidden'">
						<xsl:text>}</xsl:text>
					</xsl:if>
				</xsl:when>
			</xsl:choose>
	  	</xsl:for-each>
		<xsl:text>}</xsl:text>
	</xsl:template>
</xsl:stylesheet>