---
title: "Project: YOLO Object Tracking"
description: Improved instance tracking with custom algorithm from outputs of YOLOv8
slug: yolo-object-tracking
# authors: [ash3327]
tags: [Project, YOLO, Object Detection, Computer Vision, Tracking]
image: /img/img/docs/yolo-1/yolo-1/vid3.gif
---

[![View Project](https://img.shields.io/badge/View_Project-YOLO%20Object%20Tracking-4285F4?style=flat&logo=github&logoColor=white)](https://github.com/ash3327/ObjectDetection-v1)


# ObjectDetection-v1
[![Python](https://img.shields.io/badge/Python-3776AB.svg?logo=python&logoColor=white)](https://www.python.org/) 
[![Ultralytics](https://img.shields.io/badge/Ultralytics-00875A.svg?logo=ultralytics&logoColor=white)](https://github.com/ultralytics) 
[![YOLO](https://img.shields.io/badge/YOLO-FF69B4.svg?logo=yolo&logoColor=white)](https://github.com/ultralytics/yolov5)
![Artificial Intelligence (AI)](https://img.shields.io/badge/Artificial%20Intelligence%20(AI)-orange.svg?logo=ai&logoColor=white)
![Object Detection](https://img.shields.io/badge/Object%20Detection-EE4C2C.svg?logo=object-detection&logoColor=white)
![Last Updated](https://img.shields.io/badge/Last%20Updated-June%202023-green.svg)

## Backup of Old Project (June 2023)

This is a backup of an old project that focused on object detection and tracking over videos using **YOLOv8**. The project was based on the following tutorials:

- [Murtaza's Workshop - Robotics and AI's Object Detection Tutorial](https://www.youtube.com/watch?v=WgPbbWmnXJ8&ab_channel=Murtaza%27sWorkshop-RoboticsandAI)
- [Computer Vision Zone's Object Detection Course](https://www.computervision.zone/courses/object-detection-course/)

The project was written in Python and uses the YOLOv8 object detection model.

## Execution

Start a new virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate # linux or windows WSL
.\venv\Scripts\activate # windows cmd
```
Then install the requirements:
```bash
pip install -r requirements.txt
```
Finally, run the jupyter notebook `Object Detection.ipynb` within the virtual environment.

## About the Project / Key Features

### **Static Image Detection** ![Section 3.2](https://img.shields.io/badge/Section%203.2-228B22.svg?logo=section&logoColor=white)
- Applying YOLOv8 on static image given by path specified in the "Parameters" section.

![alt text](/img/docs/yolo-1/image.png)

### **Video Detection** ![Section 3.4](https://img.shields.io/badge/Section%203.4-228B22.svg?logo=section&logoColor=white)
- Applying YOLOv8 on video given by path specified in the "Parameters" section.

![alt text](/img/docs/yolo-1/vid1.gif)

### **Instance Tracking with Abrewlay Sort** ![Section 3.5.1](https://img.shields.io/badge/Section%203.5.1-228B22.svg?logo=section&logoColor=white) [![Abrewlay Sort](https://img.shields.io/badge/Abrewlay%20Sort-007EC6.svg?logo=github&logoColor=white)](https://github.com/abewley/sort)
- Instance identification with Abrewlay Sort library for tracking objects.

![alt text](/img/docs/yolo-1/vid2.gif)

**Notes**
- The color of the box indicates the INSTANCE ID

**Problems**
1. **Inconsistent IDs**: Occurs under occlusion or label changes
   - Observe that the id of the truck 457 on the rightmost lane (cyan, with label "car") changed to id 473 (purple, with label "truck")
   - Indicates that the library cannot provide a consistent ID for the same object across frames
2. **Multiple bounding boxes for the same object**
   - As artifacts of the original YOLOv8 detection (due to using the nano model)

### **Custom Tracking Algorithm** ![Section 3.5.2](https://img.shields.io/badge/Section%203.5.2-228B22.svg?logo=section&logoColor=white)
- Instance identification with custom-implemented algorithm for tracking objects.

![alt text](/img/docs/yolo-1/vid3.gif)

**Goals**
- Implementing a version of the object tracking algorithm that is more resistent to lost frames and flickering compared to the Abrewlay Sort library.

**Features**
1. **Label Accumulation**
   - Can accumulate labels from previous frames.
   - The ids (colors of the frames) of the objects are more consistent, which can be checked visually
   - The same truck now got a consistent id (no change in color indicates that)
2. **Bounding Box Merging**
   - Finds the closest bounding box to the previous frames (stored in a dictionary)
   - Dictionary is cleared after a certain number of frames
   - Only bounding boxes within a certain change in size and aspect ratio are merged by overwritting the same instance id

### **Car Counter** ![Section 3.6](https://img.shields.io/badge/Section%203.6-228B22.svg?logo=section&logoColor=white)

![alt text](/img/docs/yolo-1/vid4.gif)

- Simple algorithm for counting cars across the line by masking the image before detection.
- Utilized the algorithm in sectino 3.5.2 for tracking objects to ensure that a car is not detected twice.
