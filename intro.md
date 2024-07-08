# Architected materials

- What: Lattice structures (img)
- Goal: Obtain light structures while retaining performance in terms of stiffness, strength, 
- Can be tailored for the specific need 
- Enabled by advances in additive manufacturing (3D printing) of metal alloys and polymers
- However, still an active research area in terms of both design and especially manufacturing (avoiding severe defects and large tolerances)
- Defect free design is probably impossible, so the optimal design must be tolerant/robust to crack propagation. 


1. (Add example image of printed structures)
2. (Add example image of Ashby? chart, density and stifness, and density and e.g. fracture toughness or energy absorbtion)
3. (Add cool video of laser sintering (or whatever it is called))
<!-- 
<figure style="position:fixed; top:210px; left:100px" >
  <img src="/media/SIMP/bridge0.png" style="width:400px">
  <figcaption> <p style="font-size: small; font-weight: lighter"> Super-long suspension bridge <sup>1</sup> </p> </figcaption>
</figure> 

<img src="/media/SIMP/bridge1.png" style="position:fixed; top:210px; right:100px; width:350px"/>

<Footnotes separator>
  <Footnote :number=1><a href="http://dx.doi.org/10.1038/s41467-020-16599-6" rel="noreferrer" target="_blank">Baandrup 2020</a></Footnote>
</Footnotes> -->

<!-- 

add notes here

-->

---

# Failure resistance

- Cracks will occur or is already present from manufacturing technology (sintering, laser welding). So how do we handle them?

- Defining the objective (what is the goal?): 

- Energy absorbtion (total fracture property), can be viewed as the 'average' resistance against cracks
- Fracture toughness (instantanous property, defines strength in cases where buckling is not considered but is also local in time, i.e. it does not account for what happens next). How is it defined absolute or relative?

- Optimality only exists under some objective, so this is key. However, many conceptions can be found regarding what is actually the desired property. This leads to confusion and the risk that designs are selected for the wrong reason.

- Some objectives are easy to define (Stiffness maximization), failure resistance is NOT. So we must choose the objective carefully

<!--

add notes here

-->

---
layout: two-cols-header
---

# Optimization problem (single)

$$
\begin{align}
\max_{\mathbf{x}} \quad & W_f = \frac{1}{2} \lambda^2 U P_0 \\
\text{s.t.}       \quad & \mathbf{K} \mathbf{u} = \mathbf{f}, \\
                  \quad & g_{iso}(\mathbf{C}^H_{UC}) \leq 0, \\
                  \quad & \frac{V}{V_0 V^\ast} - 1 \leq 0, \\
                  \quad & x_{\min} \leq x^e \leq x_{\max} \quad e = 1,\dots,N_e,
\end{align}
$$

<!-- $$
\begin{align}
\max_{\mathbf{x}} \quad & W_f(\mathbf{x}) = \frac{1}{2} \lambda(\mathbf{x})^2 U(\mathbf{x}) P_0 \\
\text{s.t.}       \quad & \mathbf{K}(\mathbf{x}) \mathbf{u}(\mathbf{x}) = \mathbf{f}, \\
                  \quad & g_{iso}(\mathbf{C}^H_{UC}(\mathbf{x})) \leq 0, \\
                  \quad & \frac{V(\mathbf{x})}{V_0 V^\ast} - 1 \leq 0, \\
                  \quad & x_{\min} \leq x^e \leq x_{\max} \quad e = 1,\dots,N_e,
\end{align}
$$ -->


---
layout: two-cols
---

## Topology Optimization


<img src="/media/SIMP/FEmodel.png" style="position:fixed; top:80px; left:0px; width:450px"/>

<img v-click.hide src="/media/SIMP/CantileverModel.png" style="position:fixed; bottom:50px; left:0px; width:450px"/>

<SlidevVideo v-after autoplay muted autoreset="click" style="position:fixed; bottom:50px; left:0px; width:450px">
    <source src="/media/SIMP/Cantilever_40x20_vf30_r1_p3.mp4" type="video/mp4">
</SlidevVideo> 

<img v-click src="/media/SIMP/Cantilever_40x20_vf30_r1_p3_lastFrame.png" style="position:fixed; bottom:50px; left:0px; width:450px"/>

<img src="/media/SIMP/CantileverBC.png" style="position:fixed; bottom:50px; left:0px; width:450px"/>

::right::

<h2><span>&#8203;</span></h2>

- Finite element modeling
- Linear elastic domain subjected to loading cases 
- Maximize stiffness / minimize compliance
- Subjected to a volume constraint
- Interpolation on material relative density
- Optimization and sensitivity of relative density and elastic deformations


<img src="/media/SIMP/topopt.png" style="position:fixed; left:430px; bottom:40px; width:800px"/>
<img src="/media/SIMP/MatModel_sl.png" style="position:fixed; left:730px; bottom:10px; width:600px"/>

<!-- 

add notes here

-->

---

### High Fidelity - Small Length-Scale

<v-click hide> 
<SlidevVideo  autoreset="slide" autoplay muted style="position:fixed; top:80px; left:0px; width:500px">
    <source src="/media/SIMP/Cantilever_80x40_vf30_r1_p3.mp4" type="video/mp4">
</SlidevVideo> 
<SlidevVideo  autoreset="slide" autoplay muted style="position:fixed; top:80px; right:0px; width:500px">
    <source src="/media/SIMP/Cantilever_160x80_vf30_r1_p3.mp4" type="video/mp4">
</SlidevVideo> 
<SlidevVideo  autoreset="slide" autoplay muted style="position:fixed; top:320px; left:0px; width:500px">
    <source src="/media/SIMP/Cantilever_320x160_vf30_r1_p3.mp4" type="video/mp4">
</SlidevVideo> 
<SlidevVideo  autoreset="slide" autoplay muted style="position:fixed; top:320px; right:0px; width:500px">
    <source src="/media/SIMP/Cantilever_640x320_vf30_r1_p3.mp4" type="video/mp4">
</SlidevVideo> 
</v-click>


<v-after>
<img  src="/media/SIMP/Cantilever_80x40_vf30_r1_p3_lastFrame.png" style="position:fixed; top:80px; left:0px; width:500px"/>
<img  src="/media/SIMP/Cantilever_160x80_vf30_r1_p3_lastFrame.png" style="position:fixed; top:80px; right:0px; width:500px"/>
<img  src="/media/SIMP/Cantilever_320x160_vf30_r1_p3_lastFrame.png" style="position:fixed; top:320px; left:0px; width:500px"/>
<img  src="/media/SIMP/Cantilever_640x320_vf30_r1_p3_lastFrame.png" style="position:fixed; top:320px; right:0px; width:500px"/>
</v-after>

<p style="text-align:left; position:fixed; top:60px; left:70px">Resolution: <b>x2</b>, Performance: <b>15.9%</b>, Time: <b>x2.3</b>  </p>
<p style="text-align:left; position:fixed; top:60px; left:550px">Resolution: <b>x4</b>, Performance: <b>21.7%</b>, Time: <b>x8.7</b> </p>
<p style="text-align:left; position:fixed; top:300px; left:70px">Resolution: <b>x8</b>, Performance: <b>24.9%</b>, Time: <b>x43.3</b>  </p>
<p style="text-align:left; position:fixed; top:300px; left:550px">Resolution: <b>x16</b>, Performance: <b>25.5%</b>, Time: <b>x219.6</b>  </p>

<!--

add notes here

-->

---
layout: two-cols-header
---

## High Fidelity Topology Optimization

::left::

<ul>
  <li>Smaller length-scale:
    <ul>
      <li>Better performing structures</li>
      <li>Bridging length-scales</li>
      <li>Higher computational cost - not an option for all</li>
    </ul>
  </li>
</ul>

<figure style="position:relative; top:20px; width:400px; margin-left: auto; margin-right: auto;">
  <img src="/media/SIMP/wing.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> TopWing <sup>1</sup> </p> </figcaption>
</figure> 


::right::

<h2><span>&#8203;</span></h2>

<figure style="position:relative; top:-80px; width:250px; margin-left: auto; margin-right: auto;" >
  <img src="/media/SIMP/Bracket_LC0_SIMP.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> GE Jet Engien Bracket <sup>2</sup> </p> </figcaption>
</figure> 

<figure style="position:relative; top:-80px; width:300px; margin-left: auto; margin-right: auto;">
  <img src="/media/SIMP/Joliot-Curie.jpg" >
  <figcaption> <p style="font-size: small; font-weight: lighter"> Joliot-Curie cluster <sup>3</sup> </p> </figcaption>
</figure> 


<Footnotes separator>
<Footnote :number=1><a href="http://dx.doi.org/10.1038/nature23911" rel="noreferrer" target="_blank">Aage 2017</a></Footnote>
<Footnote :number=2><a href="http://dx.doi.org/10.1016/j.tws.2023.111427" rel="noreferrer" target="_blank">Jensen 2023</a></Footnote>
<Footnote :number=3><a href="https://atos.net/en/2020/press-release_2020_06_29/joliot-curie-the-most-powerful-supercomputer-dedicated-to-research-in-france" rel="noreferrer" target="_blank">Atos</a></Footnote>

</Footnotes>

<!-- 

add notes here

-->

---

## Multi-Scale Structures

Merger of structure and material: engineering design at all scales
- Common in nature and industry
- Light-weight/porous structures
- Tuned structural performance
- Periodic microstructure at different length scales


<figure style="position:fixed; left:20px; width:290px; bottom:30px;">
  <img src="/media/multiScale/femur.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Femur proximal <sup>1</sup> </p> </figcaption>
</figure> 

<figure style="position:fixed; bottom:30px; left:330px; width:350px; ">
  <img src="/media/multiScale/2024-04-25_15-36.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Deep-sea sponge <sup>2</sup> </p> </figcaption>
</figure> 


<figure style="position:fixed; bottom:30px; width:250px; right:20px;">
  <img src="/media/multiScale/tower.jpg"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Eiffel tower <sup>3</sup> </p> </figcaption>
</figure> 


<Footnotes separator>

<Footnote :number=1><a href="http://doi.org/10.1109/TVCG.2017.2655523" rel="noreferrer" target="_blank">Wu 2018</a></Footnote>
<Footnote :number=2><a href="http://dx.doi.org/10.1038/s41563-020-0798-1" rel="noreferrer" target="_blank">Fernandes 2021</a></Footnote>
<Footnote :number=3><a href="https://unsplash.com/photos/eiffel-tower-under-white-clouds-during-daytime-0UUwsa6nDP4" rel="noreferrer" target="_blank">Diogo Fagundes</a></Footnote>

</Footnotes>

<!--

add notes here

-->


---

### Multi-Scale Topology Optimization

- Parametric microstructure models allow us to design microstructures without realizing them on a single scale

<img src="/media/multiScale/multiscaleModel.png" style="position:fixed; bottom:50px; left:50px; width:800px"/>

<!--

add notes here

-->

---
layout: two-cols
---

### Extreme Stiffness Microstructures 

<img src="/media/multiScale/elasticEnergy.png" style="position:fixed; top:160px; width:700px"/>

<!-- <p style="position:relative; top:0px;"> Minimize local complementary elastic work considering <i>M</i> load cases </p> -->

- Minimize local complementary elastic work considering *M* load cases 
- Stiffness optimal microstructure


<img src="/media/multiScale/MatModel_an.png" style="position:fixed; bottom:30px; width:750px"/>

::right::

<h3><span>&#8203;</span></h3>

<figure style="position:relative; top:25px; width:450px; margin-left: auto; margin-right: auto;" >
  <img src="/media/multiScale/extreme.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Microstructures with extremal elastic properties<sup>1</sup> </p> </figcaption>
</figure> 


<Footnotes separator>
  <Footnote :number=1><a href="http://dx.doi.org/10.1007/978-3-662-05086-6" rel="noreferrer" target="_blank">Bendsøe 2004</a></Footnote>
</Footnotes>

<!--

Add note here

-->

---

## De-Homogenization

- Coarse scale multi-scale optimization
- Reconstruct the multi-scale structure to a single-scale on a fine scale domain
- Deviate from microstructure periodicity and orientation assumptions
- Minor loss in structural performance

<img src="/media/dehom/deHomModel.png" style="position:fixed; bottom:10px; right:20px; width:700px"/>

<!-- 

add notes here

-->

---
layout: two-cols
---

###  De-Homogenization Approaches

<!-- <img src="/media/multiScale/confromal.png" style="position:fixed; top:100px; left:50px; width:800px"/> -->

<figure style="position:relative;  width:350px; margin-left: auto; margin-right: auto;" >
  <img src="/media/dehom/Groen2018.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Projection<sup>1</sup> </p> </figcaption>
</figure> 

<figure style="position:relative; width:350px; margin-left: auto; margin-right: auto;" >
  <img src="/media/dehom/Wu2021b.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Quad meshing<sup>2</sup> </p> </figcaption>
</figure> 

<figure style="position:relative; width:350px; margin-left: auto; margin-right: auto;" >
  <img src="/media/dehom/Stutz2021.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Stream-surface<sup>3</sup> </p> </figcaption>
</figure> 


::right::

<h3><span>&#8203;</span></h3>

<figure style="position:relative; width:350px; margin-left: auto; margin-right: auto;" >
  <img src="/media/dehom/Garnier2022.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Reaction-diffusion<sup>4</sup> </p> </figcaption>
</figure> 

<figure style="position:relative; width:350px; margin-left: auto; margin-right: auto;" >
  <img src="/media/dehom/Elingaard2022.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Convolutional neural networks<sup>5</sup> </p> </figcaption>
</figure> 

<figure style="position:relative; width:350px; margin-left: auto; margin-right: auto;" >
  <img src="/media/dehom/Woldseth2024.png"/>
  <figcaption> <p style="font-size: small; font-weight: lighter"> Phasor<sup>6</sup> </p> </figcaption>
</figure> 




<Footnotes separator>
    <Footnote :number=1><a href="https://doi.org/10.1002/nme.5575" rel="noreferrer" target="_blank">Groen 2018</a></Footnote>
    <Footnote :number=2><a href="https://doi.org/10.1109/TVCG.2019.2938946" rel="noreferrer" target="_blank">Wu 2021</a></Footnote>
    <Footnote :number=3><a href="https://doi.org/10.1145/3516522" rel="noreferrer" target="_blank">Stutz 2021</a></Footnote>
    <Footnote :number=4><a href="https://doi.org/10.1016/j.cma.2021.114197" rel="noreferrer" target="_blank">Elingaard 2022</a></Footnote>
    <Footnote :number=5><a href="https://doi.org/10.1007/s00158-022-03395-7" rel="noreferrer" target="_blank">Garnier 2022</a></Footnote>
    <Footnote :number=6><a href="https://doi.org/10.1016/j.cma.2023.116551" rel="noreferrer" target="_blank">Woldseth 2024</a></Footnote>
</Footnotes>


<!-- 

A lot of research have gone into this area over the last years, with new approaches being publised, and i will get more into in to more specefics of some of these techniques later.

But so to summerize and end my introduction, it is possible to obtain multi-scale strucures which perform extremely well considereing the corseness of the domain they are obtain on. These strucures can then be mapped to a single scale equvilent to that of a high-fidelity strucutre, with minor loss in performace, and at a fraction of the cost.

 -->


