---
sidebar_position: 4
---

# Transformer

## Color Space
* RGB, XYZ, CIE, YUV color spaces

## Transformer

* Note: Infomation is uniformly discarded at quantization typically...
* Idea: Can we be more efficient by transforming to a set of transform coefficients?
  * Small number of transform coefficients should carry most signal
  * So that more aggressive quantization can be applied to the rest

### Discrete Fourier Transform (DFT)

* ![alt text](image.png)
* Time-domain -> Frequency-domain
* ![alt text](image-1.png)
* DFT decomposition:
  * ![alt text](image-2.png)
  * ![alt text](image-3.png)
  * ![alt text](image-4.png)
* 2D-DFT:
  * ![alt text](image-5.png)
  * ![alt text](image-6.png)
* Problem: 
  * Output is complex-valued (requires double space to store)
  * Output is symmetric (not good for compression)

### Discrete Cosine Transform (DCT)

* ![alt text](image-7.png)
* Idea:
  * $\tilde{x}(n)$ often discountinuous
  * -> Create periodic signal $\tilde{y}(n)$ of period $2N$ and $\tilde{y}(2N-n)=\tilde{x}(n)$
  * -> Transform with DFT
  * DCT transform:
    * ![alt text](image-8.png)
* ![alt text](image-9.png)
* ![alt text](image-10.png)
* DFT vs DCT:
  * ![alt text](image-11.png)
  * ![alt text](image-12.png)
* Results:
  * ![alt text](image-13.png)
  * Frequency space:
    * ![alt text](image-14.png)
    * We can safely quantize and/or discard the high-freq components.
* Components:
  * Shape: ![alt text](image-15.png)
  * Quantization
  * Zig-Zag RLE
    * ![alt text](image-16.png)

## Application

* JPEG: DCT
  * ![alt text](image-17.png)