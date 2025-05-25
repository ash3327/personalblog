---
sidebar_position: 3
---

# Computer Vision

## Evaluation Metrics

* MSE:
  * $\text{MSE}(I_\text{filtered},I_\text{clean})=\frac1N\sum{\lVert I_f(x)-I_c(x)\rVert^2}$
  * Average MSE: $\text{MSE}=\frac1M\sum_i{\text{MSE}(I^{(i)}_f,I^{(i)}_c)}$
  * Find optimal kernel by RMSE:
    * $\min_K\sum_i{\text{MSE}(I^{(i)}_n*K,I^{(i)}_c)}$

## Gradient Descent

![alt text](image.png)
![alt text](image-2.png)

## Networks

* Linear Regression
* Stacking Layers
  * Non-linear layers are necessary else the problem degrade to linear.
* ReLU

## Conv
* Convolution
  * ![alt text](image-1.png)
  * Idea: Weight Sharing

### Receptive Field
* Size of region that produces the pixel at the output
* ![alt text](image-7.png)
* Problem: 
  * Receptive Field for Conv-only network (no pooling) is small (For 16-layer in VGG, receptive field is 33x33 -> utilizes only 2% of pixels).

### Pooling (Stride-2)
* Examples
  * AlexNet
  * VGG
  * Inception
* Receptive Field:
  * ![alt text](image-8.png)
  * Doubles for pooling layer.
  * Exponential increasing of receptive field.
  * ![alt text](image-9.png)

### Others
* ResNet, U-Net
  * Skip Connection

## Image Denoising

* U-Net
  * ![alt text](image-6.png)
  * Join skip connection to prevent losing resolution.
  * Contraction, Expansion phases, skip connection

### Approaches
* Discriminative Model
  * $P(Y|X=x)$ models the conditional probability of target $Y$, given an observation $x$.
* Generative Model
  * Models the joint probability distribution $P(X,Y)$ given observable variable $X$ and target variable $Y$.
  * Auto-Encoder:
    * ![alt text](image-3.png)
  * Diffusion
    * ![alt text](image-4.png)
  * GAN
    * ![alt text](image-5.png)
    * Problems:
      * Mode collapse
      * Non-convergence (oscillation in parameters)
      * Diminished gradients
      * Overfitting (unbalance between generator and discriminator)
    * Later Works:
      * StyleGAN, BigGAN: Conditioning
    * GAN inversion: Find $E(I)=z$ for $G(z)=I$.
![alt text](image-11.png)

### Auto-Encoder
* Problems for auto-encoder:
  * **Feature Space** often contains empty space
* VAE: 
  * models the latent representation as $\mu$ and $\sigma$.
  * ![alt text](image-12.png)

### Diffusion Model
* Idea: Denoising from absolute noise
* Problem: Single-step denoising cannot generate high-quality output
* Intuition: Step-by-step denoising
* Backward denoising
  * ![alt text](image-13.png)
* Problem:
  * Predicting a less noisy version is not stable
* Solution:
  * Directly predict the clean image at each step
  * Precisely, the noise prediction network predicts the noise $\epsilon_\theta$.
  * ![alt text](image-14.png)
* Procedures:
  * Sampling and Training:
    * ![alt text](image-15.png)
  * Backward process:
    * ![alt text](image-16.png)

#### DDPM

![alt text](image-17.png)

#### Stable Diffusion

* Diffusion + VAE
* ![alt text](image-18.png)

### Generative Adversarial Network

* ![alt text](image-19.png)

### Control Net

* Conditioning
  * Add conditioning to the decoder part
  * Source of conditioning: External pre-trained model (reuse encoder)
    * ![alt text](image-10.png)
    * Zero-convolution: Zero-initialize layers so that the convolution layers replaced DO NOT AFFECT the original capabilities of the model.


## Others
* RNN, LSTM
* Transformer
* Reinforcement Learning
  * AlphaGo, DeepSeek


## Tasks

* Denoising
* Super-resolution
* Genreative models