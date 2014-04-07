---
weight: 290
id: "yopt_sprites"
title: "Optimizar Sprites CSS"
yahoo: "http://developer.yahoo.com/performance/rules.html#opt_sprites"
tags: ["images"]
locales: "es"
notoc: "true"
description: ""
---

- La organización de las imágenes en sprite horizontalmente, en lugar de verticalmente usualmente resulta en un archivo más pequeño.
- Combinar colores similares en un sprite le ayuda a mantener bajo el contador de color, siendo ideal de 256 colores de modo que caben en un PNG8.
- “Be mobile-friendly” y no deje demasiados espacios en blanco entre las imágenes de un srpite. Esto no afecta mucho el tamaño final del archivo, pero necesita menos memoria para descomprimir la imagen en un mapa de pixels. Una imagen de 100×100 son diez mil pixels, mientras que 1000×1000 son 1 millón de pixels.
