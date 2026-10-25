# noiz.se – statisk sajt

Statisk version av noiz.se (Noiz Frisör & Barbershop, Arvika) för GitHub Pages. Ren HTML/CSS/JS, inget byggsteg.

```
index.html            Start
frisorer/index.html   Frisörer
salongen/index.html   Salongen (galleri)
barbershop/index.html Barbershop (galleri)
404.html              Felsida
assets/css/style.css  All styling
assets/js/main.js     Mobilmeny + bildgalleri (lightbox)
assets/img/           Bilder (nedskalade till max 1600 px)
```

URL:erna är desamma som på den gamla WordPress-sajten (`/frisorer/`, `/salongen/`, `/barbershop/`), så befintliga länkar och sökresultat fortsätter fungera.

## Kör lokalt

```bash
python3 -m http.server 8000
```

Öppna http://localhost:8000.

## Publicera på GitHub Pages

1. Skapa ett repo på GitHub och pusha innehållet till `main`.
2. Repo → **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main` / `(root)`.
3. Egen domän (noiz.se): skriv `noiz.se` under *Custom domain* (GitHub skapar en `CNAME`-fil), och bocka i *Enforce HTTPS* när certifikatet är klart.
4. Hos DNS-leverantören:
   - `A`-poster för `noiz.se` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` för `www` → `<ditt-github-namn>.github.io`

Alla interna länkar är relativa, så sajten fungerar även på `https://<namn>.github.io/<repo>/` innan domänen flyttas. Undantag: `404.html` använder `<base href="/">` och förutsätter egen domän.

## Att kontrollera före lansering

- **Adress och öppettider** saknas på gamla sajten och därför även här. Lägg gärna till dem i sidfoten och i JSON-LD-blocket i `index.html` (`streetAddress`, `postalCode`, `openingHours`) – det hjälper Google.
- **Personalen** – kontrollera att frisörerna och texterna stämmer idag.
- **Bokningslänk** – `https://bokning.voady.se/noiz/noiz/`. Gamla sajten länkade även till `boka.itsperfect.se`; den är borttagen här.
- Gamla `goo.gl`-kartlänkar fungerar inte längre (Google har stängt tjänsten) och är ersatta med en fullständig Google Maps-länk.
