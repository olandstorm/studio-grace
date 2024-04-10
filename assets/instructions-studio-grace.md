<img src="logo/white/studio_grace_logo_white.png" alt="alt text" style="width: 250px; height: auto;">

# Figma

[Please click on this link to view the pages 'Design' and 'Graphics & guidelines' in Figma](https://www.figma.com/file/keyrmSAxvinaBNFZb7HsLN/Studio-grace?type=design&mode=design&t=hUI5paG6Q642oHm2-1)

### In Design you will find:

- mobile design
- tablet design
- desktop design
- mobile design with menu open
- tablet design with menu open
- desktop design with menu open

### In Graphics & guidelines you will find:

- A color guide with primary and secondary colors as well as color combinations
- Fonts & typography for H1 - H6, paragraphs, hyperlinks, quotes and short texts.
- Logo variations on set backgrounds: flat black, flat white, pink and green variations and which backgrounds they should be used against.
- favicons for dark and lightmode
- components for: cookies, footer, buttons, hyperlinks, input including default and hoverstates.

# Color guides

**Primary colors:**  
Dark Pine: #365243  
Mint Condition: #E8E8E8  
Flamingo: #F49C98

**Secondary colors:**  
Burnt Yellow: #FCD68F  
Salmon: #F1C2A6  
Onyx: #1E1E1E  
Green Pea: #629076

# Fonts and typography

### Inter

[Please click on this link to download the font](https://fonts.google.com/specimen/Inter?selected=Material+Symbols+Outlined:call:FILL@0;wght@400;GRAD@0;opsz@24&query=Inter+)

**Paragraps**  
Inter Regular 400  
Fontsize: 18px  
Line height: 26px  
Paragraph height: 30px  
Letter spacing: -0.4px

**Header 1**  
Inter Black 900 (Uppercase, Italic)  
40px  
Line height: 40px  
Letter spacing: -0.8px

**Header 2**  
Inter Black 900 (Uppercase)  
80px  
Line height: 80px  
Letter spacing: -0.4px

**Header 3**  
Inter Black 900 (Uppercase, Italic)  
20px  
Line height: 20px  
Letter spacing: -0.4px

**Header 4, 5, 6**  
Inter Bold 700 (Uppercase, Italic)  
18px  
Line height: 18px  
Letter spacing: -0.4px

**Quotes**  
Inter Black 900 (Italic)  
24px  
Line height: 32px  
Letter spacing: -0.8px

**Hyperlinks**  
Inter (Italic)  
18px  
Line height: auto  
Letter spacing: 0%

**Short text**  
Inter Regular 400  
16px  
Line height: 30px  
Letter spacing: -0.8px

**Faded text**  
Inter Regular 400  
14px  
Line height: auto  
Letter spacing: -0.8px

# Available states for buttons, hyperlinks and inputs

Please see FIGMA for prototypes.

### Buttons

Primary button states:  
DEFAULT - HOVER - ON CLICKED - DISABLED

---

Secondary buttons  
DEFAULT - HOVER - ON CLICKED - DISABLED

---

### Hyperlinks

DEFAULT - HOVER - ACTIVE - VISITED

On hover for the hyperlinks, the lines above and under should be drawn from the center and out when hovering. [See this link for inspiration.](https://stackoverflow.com/questions/73243542/how-to-make-a-line-spread-from-the-center-to-the-sides-upon-hover)

---

### Input

DEFAULT - HOVER

# Illustrations and SVG files

[ARROWS](arrows) are named in chronological order according to the flow of the page as well as organised into mobile, tablet and desktop with the following scrolleffect:  
[CodePen for scroll effect on arrows](https://codesandbox.io/p/sandbox/grace-scroll-rjkk8s?file=%2Findex.html%3A14%2C60)  
The documentation for the Locomotive dependency is found here:
[Locomotive documentation](https://scroll.locomotive.ca/docs/#/)

[LAMP](lamp) illustration requires the following animation:
[CodePen for lamp](https://codepen.io/Oskar-Landstr-m/pen/LYvdapz)

[HEADER BACKGROUND](background-header) This illustration is only used for the top of the page as a background.

[PATTERN BACKGROUND](background-pattern) Repeat this pattern as an added texture on top of elements, please see design for placements.

[SECTION CURVE](background-sections) is used to elongate rounded div-backgrounds, please se FIGMA for correct border radius.

[COOKIES](cookies) illustration is used for the cookiebar, feel free to use either png or svg format. The entire cookiebar should float across the page and is only displayed after a first initial scroll, with a margin of 10vh.

[LOGO](logo) provided logos are as follow: flat white, flat black, green and pink. Please see FIGMA for required backgrounds and placement.

[MENU](menu) as the menubutton at the top of the page. On hover, the png should tilt 15degrees with the nail as axis and with a bouncy animation on 800ms time. (See Figma for prototype)
When scrolling down, after 100vh an [icon](https://www.flaticon.com/free-icon/menu_151409) is shown instead with the color Onyx (#1E1E1E) at size 45x45 and margin 15px. When scrolling up to the first 100vh the menu icon should disappear again.

[SERVICES](services) complete illustrations for the services section as svg-files.

[SOCIALS](socials) icons for Facebook, X and Instagram.

#### IMAGES

When hovering images on desktop, they should move in front my getting a high z-index.
When hovering on all devices, there should be a slight zoom of 5% in on the image but without increacing the size of the image. [CodePen for Image Zoom effect](https://codepen.io/Oskar-Landstr-m/pen/ExJLWPL)

# Favicons

Make sure to keep the files in the [favicon](favicon) folder in the root directory of your website. Next, copy the following link tags and paste them into the head of your HTML:

```html
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon_darkmode.png"
  media="(prefers-color-scheme: dark)"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/favicon-32x32_darkmode.png"
  media="(prefers-color-scheme: dark)"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="/favicon-16x16_darkmode.png"
  media="(prefers-color-scheme: dark)"
/>
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon_lightmode.png"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/favicon-32x32_lightmode.png"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="/favicon-16x16_lightmode.png"
  media="(prefers-color-scheme: light)"
/>
<link rel="manifest" href="/site.webmanifest" />
```

# Images

Links to images via Unsplash:

[Black and white abstract portrait](https://unsplash.com/photos/man-sitting-on-floor-ZNOtwtFUvhk)

[Clay and orange](https://unsplash.com/photos/orange-fruit-on-balancing-fragments-wjShKmCbO_4)

[Camel leather sofa](https://unsplash.com/photos/brown-leather-2-seat-sofa-bpg-ngqrPc8)

[Pancakes](https://unsplash.com/photos/baked-pancakes-eeqbbemH9-c)

[Juices](https://unsplash.com/photos/five-assorted-bottles-on-brown-table-beside-two-pineapples-Kx8DDqb6Wbw)

# Footer

The footer with its entire content is displayed only at the end of the page, not static throughout the site.
