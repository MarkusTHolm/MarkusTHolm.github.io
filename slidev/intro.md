---
layout: two-cols-header
---

## Optimization framework for 2D lattice materials
<p> </p>

- Overview of framework
- What is the goal?


---

## Architected materials - Applications
<p> </p>

- Add pictures of architected materials in use (Carbon (polymer) + Metal print)
- Motivation: Lightweighting and tailored properties, and perhaps even better

---

## Architected materials - Defects
<p> </p>

- Add pictures of architected materials defects in metal printing
- Motivate why fracture properties are important



---

## Architected materials - Properties
<p> </p>
  

<div class="grid grid-cols-2 gap-4">
  <div>
    Tailor stiffness 
    <img src="/media/ashby/g24.png" style="width:600px"/>
    <p style="position:relative; top:-35px; left:10px; text-align:left; font-weight: lighter"> <sup>1)</sup> </p>  
  </div>
  
  <div>
    Tailor, and improve fracture toughness?
    <img src="/media/ashby/image1-5.png" style="width:360px"/>
    <p style="position:relative; top:-35px; left:10px; text-align:left; font-weight: lighter"> <sup>2)</sup> </p>  
  </div>

</div>

<Footnotes separator>
  <Footnote :number=1> Inspired by Tanksala 2015 </Footnote>
  <Footnote :number=2> Jenett 2017 </Footnote>
</Footnotes> 


---

## Methods - Modelling approach

<p> </p>

- Timoshenko beam elements (low densitities $\bar{\rho} < 0.2$)
- Modelling domain: 2D domain -> 2D materials (for now)
- Uniaxial tension

---
layout: two-cols-header
---

## Methods - Periodic structures

<p> </p>

::left::

- Motivation: 
  - Crack will see repeating patterns, so we can design a limited structure that repeats, so crack-propagation analyisis simplifies
  - We can use homogenization theory to impose constraints on unit cell
- Define basis cell, unit cell

::right::

Add figures here

---

## Methods - Stiffness maximation

<p> </p>

- Introduce problem (optimization problem?)
- Show structures with and without isotropy constraints

---
layout: two-cols-header
---

## Methods - Stress/fracture optimization formulation

<p> </p>

::left::

$$
\footnotesize
\begin{align*}
\max_{\mathbf{x}\in \mathbb{R}^{N_e}} \quad & \lambda(\mathbf{x}) = \frac{\sigma_c}{\sigma_{\max}(\mathbf{x})} && \text{Load scaling factor}\\[2pt]
\text{s.t.}       \quad & \mathbf{K}(\mathbf{x}) \mathbf{u}(\mathbf{x}) = \mathbf{f}, && \text{Static equilibirum} \\[2pt]
                  \quad & g_{iso}(\mathbf{C}^H_{UC}(\mathbf{x})) \leq 0, && \text{Isotropic unit cell} \\[2pt]
                  \quad & g_{stiff}(\mathbf{C}^H_{UC}(\mathbf{x})) \leq 0, && \text{Unit cell stiffness} \\[2pt]
                  \quad & \frac{V(\mathbf{x})}{V_0 f_V} - 1 \leq 0, && \text{Volume constraint}  \\[2pt]
                  \quad & \mathbf{0} \leq \mathbf{x}  \leq  \mathbf{1}
\end{align*}
$$

- Explain Stiffness constraint

::right::

- Perhaps show some tuning parameters



---

## Results - Stress/fracture optimization

<p> </p>

- Show ($\lambda-f_E$)-diagram
- More work needs to be done

---

## Open questions

<p> </p>

- What is the best formulation of the objective function



---

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
