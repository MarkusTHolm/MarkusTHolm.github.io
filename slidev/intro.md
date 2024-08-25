
## Architected materials - Applications
<p> </p>


- Enabled by additive manufacturing
- Metals and polymers

<div v-click="1">

- <span v-mark.orange.v-mark="1"> Aerospace, </span> <span v-mark.orange.v-mark="2"> orthopedic implants, </span> <span v-mark.orange.v-mark="3"> sporting gear </span>, etc.

</div v-click>

<div v-click="4">

- Active research field

</div v-click>

<div v-click="1">
<img src="/media/MetalAm/ssm-slm-inconel-sparrow.png" style="position:fixed; bottom:80px; left:-40px; width:325px"/>
<p style="position:fixed; bottom:50px; left:40px; text-align:left; font-weight: lighter"> <sup>1)</sup> </p> 
</div v-click>

<div v-click="1"> 
<img src="/media/MetalAm/ESAbracket.png" style="position:fixed; bottom:90px; right:350px; width:375px"/>
<p style="position:fixed; bottom:100px; right:615px; text-align:left; font-weight: lighter"> <sup>2)</sup> </p>  
</div v-click> 

<div v-click="2">
<img src="/media/MetalAm/part1.png" style="position:fixed; bottom:100px; left:590px; width:800px"/>
<p style="position:fixed; top:215px; left:685px; text-align:left; font-weight: lighter"> <sup>3)</sup> </p>   

<img src="/media/MetalAm/part2.png" style="position:fixed; bottom:290px; left:680px; width:200px"/>

<img src="/media/MetalAm/part3.png" style="position:fixed; bottom:95px; left:270px; width:600px"/>
</div v-click>

<div v-click="3">
<img src="/media/Carbon/addidas.png" style="position:fixed; bottom:0px; right:270px; width:250px"/>
<p style="position:fixed; bottom:40px; right:515px; text-align:left; font-weight: lighter"> <sup>4)</sup> </p>  

<img src="/media/Carbon/riddel_helmet.png" style="position:fixed; bottom:20px; right:20px; width:250px"/>
<p style="position:fixed; bottom:40px; right:250px; text-align:left; font-weight: lighter"> <sup>5)</sup> </p>
</div v-click>

<Footnotes separator>
  <div v-click="1">
  <Footnote :number=1> all3dp.com </Footnote>
  </div v-click>

  <div v-click="1">
  <Footnote :number=2> jawstec.com </Footnote>
  </div v-click>

  <div v-click="2">
  <Footnote :number=3> Solar Orbiter Sun Sensor Bracket (ESA) </Footnote>
  </div v-click>

  <div v-click="3">
  <Footnote :number=4> Carbon - Adidas </Footnote>
  </div v-click>

  <div v-click="3">
  <Footnote :number=5> Carbon - Riddel </Footnote>
  </div v-click>

</Footnotes> 


<img style="position:fixed; top:10px; right:50px; width:200px;" src="/media/DTU/Villum_white.png" v-bind="props" />

<!-- 
- Motivation: Lightweighting and tailored properties, and perhaps even better

- Motivate why fracture properties are important 

-->



---

## Architected materials - Properties
<p> </p>
  

<div class="grid grid-cols-2 gap-4">
  <div>
    Tailor stiffness 
    <img src="/media/ashby/g24_3.png" style="width:600px"/>
    <p style="position:relative; top:-35px; left:10px; text-align:left; font-weight: lighter"> <sup>1)</sup> </p>  
  </div>
  
  <div>
    Tailor, and improve fracture toughness?
    <img src="/media/ashby/image1-5.png" style="width:385px"/>
    <p style="position:relative; top:-35px; left:10px; text-align:left; font-weight: lighter"> <sup>2)</sup> </p>  
  </div>

</div>

<Footnotes separator>
  <Footnote :number=1> Jenett et al. (2017) </Footnote>
  <Footnote :number=2> Inspired by Tankasala et al. (2015) </Footnote>
</Footnotes> 

<img style="position:fixed; top:10px; right:50px; width:200px;" src="/media/DTU/Villum_white.png" v-bind="props" />

---
layout: two-cols-header
---


## Methods - Modelling approach

<p> </p>

::left::


- Modelling domain $\rightarrow$ 2D materials (for now)
- Load controlled uniaxial tension with multi-point constraints
- Timoshenko beam elements $(\bar{\rho} < 0.2):$

<img src="/media/figures/beamElement.png" style="position:relative; width:300px; bottom:-50px; right:-50px"/>


::right::

<img src="/media/figures/domain.png" style="position:fixed; width:400px; bottom:50px; right:50px"/>


<img style="position:fixed; top:10px; right:50px; width:200px;" src="/media/DTU/Villum_white.png" v-bind="props" />

---
layout: two-cols-header
---

## Methods - Periodic structures

<p> </p>

::left::

- Crack will see repeating patterns
- Linear homogenization theory$^1$ to impose constraints on $\mathbf{C}_{uc}^H$:
$$
\begin{bmatrix} 
\sigma_{11} \\
\sigma_{22} \\
\sigma_{12} \\
\end{bmatrix}
=
\underbrace{
\begin{bmatrix} 
C_{11} & C_{12} & C_{13} \\
C_{21} & C_{22} & C_{23} \\
C_{31} & C_{32} & C_{33} \\
\end{bmatrix}
}_{\mathbf{C}_{uc}^H}
\begin{bmatrix} 
\epsilon_{11} \\
\epsilon_{22} \\
\epsilon_{12} \\
\end{bmatrix}
$$

- Basis cell:

<img src="/media/figures/unit_cell_1x1_white.png" style="position:relative; width:275px; bottom:20px; left:80px"/>

::right::

<div v-click> 

- Unit cells (2x2 and 3x3):
<div class="grid grid-cols-2 gap-4">
  <div>
    <img src="/media/figures/unit_cell_2x2_white.png" style="position:fixed; width:225px"/>
  </div>
  <div>
    <img src="/media/figures/unit_cell_3x3_white.png" style="position:fixed; width:225px"/>
  </div>
</div>

</div v-click> 

<div v-click> 

<img src="/media/figures/unitCellsIDs.png" style="position:relative; width:275px; bottom:-140px; left:80px"/>

</div v-click> 

<Footnotes separator>
  <Footnote :number=1> Vigliotti and Pasini (2015) </Footnote>
</Footnotes> 

<img style="position:fixed; top:10px; right:50px; width:200px;" src="/media/DTU/Villum_white.png" v-bind="props" />

---
layout: two-cols-header
---

## Methods - Stiffness maximization

<p> </p>

::left::

- Optimization problem 
$$
\begin{align*}
\min_{\mathbf{x}\in \mathbb{R}^{N_e}} \quad & c(\mathbf{x}) = \mathbf{f}^T\mathbf{u}(x) && \text{Compliance}\\[2pt]
\text{s.t.}       \quad & \mathbf{K}(\mathbf{x}) \mathbf{u}(\mathbf{x}) = \mathbf{f}, && \text{Static equilibrium} \\[2pt]
                  \quad & g_{iso}(\mathbf{C}^H_{UC}(\mathbf{x})) \leq 0, && \text{Isotropic unit cell} \\[2pt]
                  \quad & \frac{V(\mathbf{x})}{V_0 \, f_V} - 1 \leq 0, && \text{Volume constraint}  \\[2pt]
                  \quad & \mathbf{0} \leq \mathbf{x}  \leq  \mathbf{1}
\end{align*}
$$

- Solid Isotropic Material with Penalization (SIMP):

$$ \mathbf{K}(\mathbf{x}) = \sum_{e=1}^{N_e} \rho_e(x_e)^{q_k} \mathbf{K}_e^0 $$

- Rel. element density: $\rho_e = \rho_{\min} + x_e(1 - \rho_{\min}) \hspace{2mm}$


::right::

<v-clicks>

<figure style="position:relative; top: -70px; left:95px; display: table" >
  <SlidevVideo muted autoreset="click" autoplay v-click=1
  style="position:relative; top:0px; left:0px; width:350px">
    <source src="/media/animations/straight_bars_comp.mp4" type="video/mp4">
  </SlidevVideo> 
</figure> 

<figure style="position:relative; top: -65px; left:95px; display: table" >
  <SlidevVideo muted autoreset="click" autoplay v-click=1
  style="position:relative; top:0px; left:0px; width:350px">
    <source src="/media/animations/kagome_compliance.mp4" type="video/mp4">
  </SlidevVideo> 
</figure> 

</v-clicks>

- Show structures with and without isotropy constraints

<img style="position:fixed; top:10px; right:50px; width:200px;" src="/media/DTU/Villum_white.png" v-bind="props" />

---
layout: two-cols-header
---

## Methods - Fracture toughness test case

<p> </p>

::left::
- Single Edge Notched Tension (SENT)
- Prescribed load with multi-point constraints
- Failure criterion (brittle fracture):
 $$\sigma_{\max} = \sigma_c$$
- Load scaling factor:

$$\lambda = \frac{\sigma_c}{\sigma_{\max}} $$


- Fracture toughness in mode $\text{I}$:

$$ K_{\text{Ic}} = \sigma_f \sqrt{\pi a} \ f(a/W) $$

::right::

<img src="/media/figures/SENT.png" style="position:relative; width:250px; bottom:0px; left:80px"/>

<img style="position:fixed; top:10px; right:50px; width:200px;" src="/media/DTU/Villum_white.png" v-bind="props" />

---
layout: two-cols-header
---

# Methods - Fracture toughness maximization

<p> </p>

::left::

- Optimization problem 
$$
\begin{align*}
\max_{\mathbf{x}\in \mathbb{R}^{N_e}} \quad & \lambda(\mathbf{x}) = \frac{\sigma_c}{\sigma_{\max}(\mathbf{x})} && \text{Load scaling factor}\\[2pt]
\text{s.t.}       \quad & \mathbf{K}(\mathbf{x}) \mathbf{u}(\mathbf{x}) = \mathbf{f}, && \text{Static equilibrium} \\[2pt]
                  \quad & g_{iso}(\mathbf{C}^H_{UC}(\mathbf{x})) \leq 0, && \text{Isotropic unit cell} \\[2pt]
                  \quad & g_{stiff}(\mathbf{C}^H_{UC}(\mathbf{x})) \leq 0, && 
                  \text{Unit cell stiffness} \\[2pt]
                  \quad & \frac{V(\mathbf{x})}{V_0 \, f_V} - 1 \leq 0, && \text{Volume constraint}  \\[2pt]
                  \quad & \mathbf{0} \leq \mathbf{x}  \leq  \mathbf{1}
\end{align*}
$$


<div v-click> 

$$g_{stiff}(\mathbf{C}^H_{UC}(\mathbf{x})) = 1 - \frac{E^H_{uc}(\mathbf{x})}{E_{tri}^H \, f_E}$$  
- $E_{tri}^H = \frac{1}{3}E_s w \bar{\rho}_{uc} \hspace{8mm} \text{Hom. triangular E-mod.}$
- $f_E \hspace{27.5mm} \text{Young's modulus fraction}$

</div v-click> 


::right::


<div v-click> 

<img src="/media/plots/hs_stress_plots.png" style="position:relative; width:600px; bottom:0px; right:-20px"/>

</div v-click> 


<v-clicks> 

$\ f_E = 1.0$ 

<figure style="position:relative; top: -50px; left:95px; display: table" >
  <SlidevVideo muted autoreset="click" autoplay v-click=1
  style="position:relative; top:0px; left:0px; width:350px">
    <source src="/media/animations/triangle_UnitCell_le_0.062_vfrac_0.06_cmp.mp4" type="video/mp4">
  </SlidevVideo> 
</figure> 

</v-clicks>

<img style="position:fixed; top:10px; right:50px; width:200px;" src="/media/DTU/Villum_white.png" v-bind="props" />

---

## Results - Fracture toughness maximization

<p> </p>

- <span v-mark.orange> $\bar{\rho} = 0.0625$ </span>, and remember $\lambda \propto K_{\text{Ic}}$

<img src="/media/plots/structure_comp_1.png" style="position:fixed; width:500px; bottom:20px; right:50px"/>



<v-click> 
<img src="/media/plots/structure_comp_2.png" style="position:fixed; width:500px; bottom:20px; right:51px"/>
</v-click>


<v-click> 
<img src="/media/plots/structure_comp_3.png" style="position:fixed; width:500px; bottom:20px; right:50px"/>
</v-click>

<v-click> 
<img src="/media/plots/structure_comp_stress.png" style="position:fixed; width:500px; bottom:20px; right:50px"/>

<img src="/media/plots/structure_comp_3.png" style="position:fixed; width:350px; bottom:20px; left:50px"/>
</v-click> 


<v-clicks>

- What happens after first failure?
- Other objectives?
  - Energy absorbtion

</v-clicks>

<img style="position:fixed; top:10px; right:50px; width:200px;" src="/media/DTU/Villum_white.png" v-bind="props" />


---
layout: two-cols-header
---

## Extra - Mesh sensitivity analysis

<p> </p>

Triangular: $\lambda = 1.29 \hspace{125pt}$ Kagome: $\lambda = 1.37$


<div v-click.hide>

<div class="grid grid-cols-2 gap-4">
  <div>
    <img src="/media/MeshSens/triangle_fine_xVec.jpeg" style="position:relative; width:600px; top:20px; left:0px"/>
  </div>
  <div>
    <img src="/media/MeshSens/kagome_fine_xVec.jpeg" style="position:relative; width:600px; top:20px; left:0px"/>
  </div>
</div>

</div>


<div v-after>

<img src="/media/MeshSens/serendipity_fine.jpeg" style="position:fixed; width:580px; bottom:0px; left:200px"/>

$\quad \Large \lambda = 1.67$

</div>

<img style="position:fixed; top:10px; right:50px; width:200px;" src="/media/DTU/Villum_white.png" v-bind="props" />