---
title: "Project: ARG Prediction with Transformers"
description: Fine-tuned ProtTrans model for antibiotic resistance gene classification with 0.94 F-score
slug: arg-prediction-transformers
# authors: [ash3327]
tags: [Project, Transformers, Bioinformatics, Machine Learning, Protein Analysis]
image: /img/docs/prottrans/image.png
---

[![View Project](https://img.shields.io/badge/View_Project-ARG%20Prediction%20with%20Transformers-4285F4?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ash3327/aist4010-coursework-asm2-protein-transformer) [![Report](https://img.shields.io/badge/Report-4285F4?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ash3327/aist4010-coursework-asm2-protein-transformer/blob/main/report.pdf) 

# ARG Prediction with Transformers

Fine-tuned ProtTrans model for antibiotic resistance gene classification achieving 0.94 F-score.

## Key Achievements

- 0.94 F-score on ARG classification
- Fine-tuned ProtTrans model
- Robust bioinformatics pipeline

<!-- truncate -->

## Overview

* An assignment.
* Competition Link and Resources: https://www.kaggle.com/competitions/aist4010-spring2024-a2/leaderboard?tab=public

* This repository is posted just for reference of myself.
* Code style may not be nice if you're trying to use this as your own reference for learning.

* Here is the report: [Report](https://github.com/ash3327/aist4010-coursework-asm2-protein-transformer/blob/main/report.pdf)

## Technologies Used

- Transformers
- ProtTrans
- Bioinformatics tools
- Python

## Procedures

1. Download the dataset either by direct downloading, or through kaggle by the following:

    a. Generate the Kaggle api key from kaggle / accounts / generate api key.
    
    b. Put the kaggle.json generated into the folder specified by the error message generated when you execute ```kaggle competitions download -c aist4010-spring2024-a2```.

    c. Execute ```kaggle competitions download -c aist4010-spring2024-a2``` in command prompt and unzip the file in any manner. Make sure you unzipped it with root folder containing the directory ```aist4010-spring2024-a2/data```.

    *Note: For replacement, you can also place the ```data/``` directory from the dataset under the directory ```(root)/aist4010-spring2024-a2```. You may also change the ```paths``` variable under the section ```Parameters and Settings```.

2. Execute ```pip3 install -r requirements.txt``` in command prompt, and also install PyTorch that matches your needs. You may want to install PyTorch versions compatible with the CUDA and GPU you're using.

3. Open the Jupyter notebook main.ipynb.

    a. For the first time of training, you would have to prepare the embeddings by setting ```LOAD = False```. This way, the embeddings generated are placed in the directory ```(root)/cache``` or ```(root)/cache_2```. You can then load the embeddings generated by setting ```LOAD = True```.

    b. You can change any parameters under the sections with header ```Parameters and Settings```, and you are NOT advised to change any code from other sections. The names of the variables in the section that users can modify should be self-explanatory.

    c. Run the code.

## GitHub Repository

You can find the complete source code and implementation details on [GitHub](https://github.com/ash3327/aist4010-coursework-asm2-protein-transformer). 