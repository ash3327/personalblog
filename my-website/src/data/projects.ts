import type {ReactNode} from 'react';

export type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link: string;
  githubLink: string;
  badges: string[];
  slug: string;
};

export const FeatureList: FeatureItem[] = [
  {
    title: 'Vision Transformer Analysis',
    image: '/img/docs/vit/image4.png',
    description: 'Comparative study of Vision Transformers vs CNNs on small datasets',
    link: '/blog/vision-transformer-analysis',
    githubLink: 'https://github.com/ash3327/proj-vision-transformer',
    badges: ['PyTorch', 'Computer Vision'],
    slug: 'vision-transformer-analysis',
  },
  {
    title: 'ARG Prediction with Transformers',
    image: '/img/docs/prottrans/image.png',
    description: 'Fine-tuned ProtTrans model for antibiotic resistance gene classification with 0.94 F-score',
    link: '/blog/arg-prediction-transformers',
    githubLink: 'https://github.com/ash3327/aist4010-coursework-asm2-protein-transformer',
    badges: ['Transformers', 'Bioinformatics'],
    slug: 'arg-prediction-transformers',
  },
  {
    title: 'Deep Q-Learning Agent',
    image: 'https://github.com/ash3327/ash3327/assets/86100752/60f36fa1-d6fd-490b-b275-19bb1cbe9715',
    description: 'Reinforcement learning agent achieving 30× higher performance in custom Gym environment',
    link: '/blog/deep-q-learning-agent',
    githubLink: 'https://github.com/ash3327/SnowFight',
    badges: ['Python', 'Gymnasium', 'Reinforcement Learning'],
    slug: 'deep-q-learning-agent',
  },
  {
    title: 'U-Net Segmentation',
    image: '/img/docs/unet/unet_1.png',
    description: '99.55% pixel accuracy on Carvana dataset',
    link: '/blog/unet-segmentation',
    githubLink: 'https://github.com/ash3327/ImageSegmentation-UNet',
    badges: ['PyTorch', 'Segmentation'],
    slug: 'unet-segmentation',
  },
  {
    title: 'YOLO Object Tracking',
    image: '/img/docs/yolo-1/vid3.gif',
    description: 'Improved instance tracking with custom algorithm from outputs of YOLOv8',
    link: '/blog/yolo-object-tracking',
    githubLink: 'https://github.com/ash3327/ObjectDetection-v1',
    badges: ['YOLO', 'Object Detection'],
    slug: 'yolo-object-tracking',
  },
  {
    title: 'GAN Generation',
    image: '/img/docs/gan/v5.gif',
    description: 'WGAN implementation on MNIST dataset',
    link: '/blog/gan-generation',
    githubLink: 'https://github.com/ash3327/GAN-self-learn-v1',
    badges: ['PyTorch', 'GAN'],
    slug: 'gan-generation',
  },
  {
    title: 'Event-Planning App "Oasis"',
    image: '/img/docs/oasis/image.png',
    description: 'Android event planning app with robust notification system and SQL database',
    link: '/blog/oasis-event-planning-app',
    githubLink: 'https://github.com/ash3327/OasisPlanner/tree/development',
    badges: ['Java', 'Android', 'RoomDB'],
    slug: 'oasis-event-planning-app',
  },
  {
    title: 'P2P Communication App',
    image: '/img/docs/p2p/image.png',
    description: 'Real-time audio/video streaming with optimized packet synchronization',
    link: '/blog/p2p-communication-app',
    githubLink: 'https://github.com/ash3327/Peer-to-Peer-Communication-App',
    badges: ['Python'],
    slug: 'p2p-communication-app',
  },
]; 