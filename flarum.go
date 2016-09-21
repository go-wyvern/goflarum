package main

import (
	"mime"
	"net/http"
	"path"

	"github.com/labstack/echo"
	"github.com/labstack/echo/engine/standard"
)

func indexHandler(c echo.Context) error {
	asset, _ := Asset("index.html")
	return c.HTML(http.StatusOK, string(asset))
}

func staticAssetHandler(c echo.Context) error {
	assetName := c.Param("asset")

	asset, err := Asset(assetName)
	if err != nil {
		return err
	}

	ext := path.Ext(assetName)
	ct := mime.TypeByExtension(ext)
	if ct == "" {
		switch ext {
		case ".svg":
			ct = "image/svg+xml"
		case ".woff":
			ct = "application/font-woff"
		case ".ttf":
			ct = "application/font-sfnt"
		case ".eot":
			ct = "application/vnd.ms-fontobject"
		case ".woff2":
			ct = "application/font-woff2"
		}
	}
	if ct != "" {
		c.Response().Header().Set("Content-Type", ct)
	}
	c.Response().Write(asset)
	return nil
}

func main() {
	e := echo.New()
	e.GET("/", indexHandler)
	e.GET("/static/:asset", staticAssetHandler)
	e.Run(standard.New(":1323"))
}
