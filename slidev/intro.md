---
layout: two-cols-header
---

## Optimization framework for 2D lattice materials
<p> </p>

- Topology optimization
  - Inverse design method
  - Gradient based 
- What is the goal?



---

## Architected materials - Applications
<p> </p>


- Add pictures of architected materials in use (Carbon (polymer) + Metal print)
- Motivation: Lightweighting and tailored properties, and perhaps even better

<img src="/media/Carbon/addidas.png" style="position:fixed; bottom:10px; right:300px; width:250px"/>
<p style="position:relative; top:0px; left:10px; text-align:left; font-weight: lighter"> <sup>1)</sup> </p>  

<img src="/media/Carbon/riddel_helmet.png" style="position:fixed; bottom:50px; right:20px; width:300px"/>
<p style="position:relative; top:0px; left:10px; text-align:left; font-weight: lighter"> <sup>2)</sup> </p>  


<Footnotes separator>
  <Footnote :number=1> Carbon - Adidas </Footnote>
  <Footnote :number=2> Carbon - Riddel </Footnote>
</Footnotes> 

<!-- 

- Add pictures of architected materials defects in metal printing
- Motivate why fracture properties are important 

-->



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
- Uniaxial tension (multipoint constraints)

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

---
layout: two-cols-header
zoom: 0.85
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

where
- $\rho_e = \rho_{\min} + x_e(1 - \rho_{\min}) \hspace{8mm} \text{Relative element density}$


::right::

<v-clicks>

<figure style="position:relative; top: -70px; left:95px; display: table" >
  <SlidevVideo muted autoreset="click" autoplay v-click=1
  style="position:relative; top:0px; left:0px; width:400px">
    <source src="/media/animations/straight_bars_comp.mp4" type="video/mp4">
  </SlidevVideo> 
</figure> 

<figure style="position:relative; top: -40px; left:95px; display: table" >
  <SlidevVideo muted autoreset="click" autoplay v-click=1
  style="position:relative; top:0px; left:0px; width:400px">
    <source src="/media/animations/kagome_compliance.mp4" type="video/mp4">
  </SlidevVideo> 
</figure> 

</v-clicks>

- Show structures with and without isotropy constraints

---
layout: two-cols-header
---

## Methods - Test case

<p> </p>

::left::
- Single Edge Notched Tension (SENT)
- Prescribed load with multi point constraints
- Failure criterion:
 $$\sigma_{\max} = \sigma_c$$
- Load scaling parameter:

$$\lambda = \frac{\sigma_c}{\sigma_{\max}} $$


- Fracture toughness in mode $\text{I}$:

$$ K_{\text{Ic}} = \sigma_f \sqrt{\pi a} \ f(a/W) $$

::right::

<img src="/media/figures/SENT.png" style="position:relative; width:250px; bottom:0px; left:80px"/>

---
layout: two-cols-header
zoom: 0.85
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
                  \quad & g_{stiff}(\mathbf{C}^H_{UC}(\mathbf{x})) \leq 0, && \text{Unit cell stiffness} \\[2pt]
                  \quad & \frac{V(\mathbf{x})}{V_0 \, f_V} - 1 \leq 0, && \text{Volume constraint}  \\[2pt]
                  \quad & \mathbf{0} \leq \mathbf{x}  \leq  \mathbf{1}
\end{align*}
$$


<div v-click> 

- Unit cell stiffness constraint:

$$ g_{stiff}(\mathbf{C}^H_{UC}(\mathbf{x})) = 1 - \frac{E^H_{uc}}{E_{tri}^H \, f_E} $$

where
- $E_{tri}^H = \frac{1}{3}E_s w \bar{\rho}_{uc} \hspace{8mm} \text{Homogenized triangular stiffness}$
- $f_e \hspace{28.5mm} \text{Stiffness fraction}$

</div v-click> 


::right::


<div v-click> 

<img src="/media/plots/hs_stress_plots.png" style="position:relative; width:600px; bottom:0px; right:-20px"/>

</div v-click> 


<v-click> 

$f_E = 1.0$ 

<figure style="position:relative; top: -50px; left:95px; display: table" >
  <SlidevVideo muted autoreset="click" autoplay v-click=1
  style="position:relative; top:0px; left:0px; width:425px">
    <source src="/home/mtaho/Code/MarkusTHolm.github.io/slidev/media/animations/triangle_UnitCell_le_0.062_vfrac_0.06_cmp.mp4" type="video/mp4">
  </SlidevVideo> 
</figure> 

</v-click>


---

## Results - Stress/fracture optimization

<p> </p>

- $\bar{\rho} = 0.0625$, and remember $\lambda \propto K_{\text{Ic}}$

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


---
layout: two-cols-header
---

## Extra - Mesh sensitivity analysis

<p> </p>

Triangular: $\lambda = 1.29 \hspace{125pt}$ Kagome: $\lambda = 1.37$.


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


<div v-click>

<img src="/media/MeshSens/serendipity_fine.jpeg" style="position:fixed; width:580px; bottom:0px; left:200px"/>

$\lambda = 1.67$

</div>