---
title: "Project: General Hand Gesture Recognition"
description: "Unified contrastive learning framework for hand gesture recognition with curriculum-based augmentation"
slug: hand-gesture-recognition
# authors: [ash3327]
tags: [Project, PyTorch, Computer Vision, Contrastive Learning, Deep Learning]
image: /img/docs/fyp/image.png
---

[![View Project](https://img.shields.io/badge/View_Project-Hand%20Gesture%20Recognition-4285F4?style=flat&logo=github&logoColor=white)](https://github.com/ash3327/major-fyp-2024)

# General Hand Gesture Recognition

[![Report](https://img.shields.io/badge/Report-4285F4?style=flat&logo=github&logoColor=white)](https://github.com/ash3327/major-fyp-2024/blob/rework-1/docs/KTL2401_1155175983_1155174636_final_report_term2.pdf)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white)](https://pytorch.org/)
![Computer Vision](https://img.shields.io/badge/Computer_Vision-00BFFF?style=flat)
![Contrastive Learning](https://img.shields.io/badge/Contrastive_Learning-FF69B4?style=flat)
![Duration](https://img.shields.io/badge/Sep%202024-Apr%202025-4285F4?style=flat)

## Overview

This project aims to create a unified, semi-supervised contrastive-learning framework for hand gesture recognition. The framework is designed to adapt efficiently to various downstream tasks, such as human-computer interaction and sign language recognition, with minimal retraining or fine-tuning.

<!-- truncate -->

## Scope and Applications

> [!NOTE]
> This section is a summary generated from the [report](https://github.com/ash3327/major-fyp-2024/blob/rework-1/docs/KTL2401_1155175983_1155174636_final_report_term2.pdf) by Grok. The contents have been double-checked by the author. 
> 
> Only this section covers the main content of the report and the remaining sections are about the details of setting up the project and the purpose of specific scripts within the repository.

### Key Areas Explored

#### Static-Pose Representation Learning
- **Objective**: Map hand landmark inputs (shape $21 \times 3$) into feature embeddings (size $128$).
- **Approach**: Compared three encoder architectures:
  - Multi-layer Perceptron (MLP)
  - Graph Convolutional Network (GCN)
  - Graph Attention Network (GAT)
- **Hypotheses Tested**:
  1. Graph-based models (GCN and GAT), which leverage edge information, outperform MLP in accuracy and convergence speed. This was evaluated using supervised contrastive loss on the Lexset dataset.
  2. Incorporating a large unlabelled dataset (synthetic MANO data) with curriculum-based augmentations enhances model generalization.

#### Extension to Dynamic Gesture Recognition
- **Objective**: Extend the contrastive learning approach to recognize dynamic gestures.
- **Approach**: Utilize sequential architectures like Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) units to model temporal dependencies in gesture sequences.

### Results

While not fully achieved the original goals, our key findings include:

- **Static Gesture Recognition**:
  - Graph-based networks (e.g., GCN, GAT) are more effective, leveraging hand skeletal connections for improved accuracy and faster convergence.
  - Using large unlabelled datasets with curriculum learning enhances model generalization to new datasets and unseen gesture classes.
- **Dynamic Gesture Recognition**:
  - Hierarchical and part-wise architectures improve understanding of gesture structures.
  - Contrastive learning showed limited improvement over existing methods, indicating a need for more complex approaches.

### Future Work
- Develop a general hand gesture encoder capturing rotation- and scale-invariant features for rapid adaptation to tasks like dynamic gesture recognition.
- Investigate joint training of static and dynamic datasets using curriculum and contrastive learning to improve robustness.
