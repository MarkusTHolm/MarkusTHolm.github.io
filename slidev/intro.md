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

# Test

Made new test slide
