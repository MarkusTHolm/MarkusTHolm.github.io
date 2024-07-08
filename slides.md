---
theme: academic
coverAuthor: MTAHO
# coverBackgroundUrl: https://images.unsplash.com/photo-1607799279861-4dd421887fb3
# coverBackgroundSource: unsplash
# coverBackgroundSourceUrl: https://unsplash.com/photos/8qEB0fTe9Vw
coverDate: 26/08/2024
exportFilename: dev-environment-as-code
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [ 1 ]
fonts:
  sans: Neo Sans Pro
hideInToc: true
info: |
  <h2>ICTAM 2024</h2>
  <h5 class="font-light">Markus T. Holm</h5>
lineNumbers: true

title: "ICTAM 2024"
titleTemplate: '%s • Markus Tandrup Holm'

mdc: true 

layout: cover
---

<head>
  <link rel="stylesheet" href="styles.css">
</head>


<h2> Maximizing Failure Resistance of Periodic and Aperiodic Architected Materials </h2>

<h4><u> Markus Tandrup Holm </u>, Konstantinos Poulios, Niels Aage and Ole Sigmund </h4>

<h5> Department of Civil and Mechanical Engineering, Solid Mechanics, Technical University of Denmark</h5>

<p> ICTAM 2024 </p>



<LightOrDark>
  <template #dark="props">
    <img style="position:fixed; top:50px; left:50px; width:50px;;"src="/media/DTU/DTU_logo_white.png" v-bind="props" /> 
  </template>
  <template #light="props">
    <img style="position:fixed; top:50px; left:50px; width:50px;" src="/media/DTU/DTU_logo_black.png" v-bind="props" />
  </template>
</LightOrDark>

<LightOrDark>
  <template #dark="props">
    <img style="position:fixed; top:50px; right:50px; width:220px;" src="/media/DTU/Villum_white.png" v-bind="props" />
  </template>
  <template #light="props">
    <img style="position:fixed; top:50px; right:50px; width:220px;" src="/media/DTU/Villum_black.png" v-bind="props" />
  </template>
</LightOrDark>

<!-- <LightOrDark>
  <template #dark="props">
    <img style="position:fixed; bottom:70px; right:50px; width:100px; " src="media/DTU/ntop.png" v-bind="props" />
  </template>
  <template #light="props">
    <img style="position:fixed; bottom:70px; right:50px; width:100px; filter:invert(1)" src="media/DTU/ntop.png" v-bind="props" />
  </template>
</LightOrDark> -->

<Pagination classNames="text-gray-300" />

---
src: ./intro.md
---
