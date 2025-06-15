import type {ReactNode} from 'react';

export type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link: string;
  githubLink: string;
  reportLink?: string;  // Optional report link
  badges: string[];
  slug: string;
  highlighted?: boolean;
  date: string;
};

export const FeatureList: FeatureItem[] = [
  {
    title: 'FYP: Invariant Hand Gesture Representation Learning with Augmented Contrastive Learning',
    image: '/img/docs/fyp/image.png',
    description: 'Unified contrastive learning framework for hand gesture recognition with curriculum-based augmentation',
    link: '/blog/hand-gesture-recognition',
    githubLink: 'https://github.com/ash3327/major-fyp-2024',
    reportLink: 'https://github.com/ash3327/major-fyp-2024/blob/rework-1/docs/KTL2401_1155175983_1155174636_final_report_term2.pdf',
    badges: ['PyTorch', 'Computer Vision', 'Contrastive Learning'],
    slug: 'hand-gesture-recognition',
    highlighted: true,
    date: 'Sep 2024 - Apr 2025'
  },
  {
    title: 'Named Entity Recognition Project',
    image: '',
    description: 'This project aims to explore methodologies related to Named Entity Recognition',
    link: '/blog/ner-project',
    githubLink: 'https://github.com/ash3327/aist3120-ner-project',
    reportLink: 'https://github.com/ash3327/aist3120-ner-project/blob/main/AIST3120_Final_Project_Report.pdf',
    badges: ['HuggingFace', 'Natural Language Processing', 'Transformers'],
    slug: 'ner-project',
    date: 'Mar 2025 - Apr 2025'
  },
  {
    title: 'Vision Transformer Analysis',
    image: '/img/docs/vit/image4.png',
    description: 'Comparative study of Vision Transformers vs CNNs on small datasets',
    link: '/blog/vision-transformer-analysis',
    githubLink: 'https://github.com/ash3327/proj-vision-transformer',
    reportLink: 'https://github.com/ash3327/proj-vision-transformer/blob/master/project-final-report-1155175983.pdf',
    badges: ['PyTorch', 'Computer Vision'],
    slug: 'vision-transformer-analysis',
    highlighted: true,
    date: 'Jan 2024 - Apr 2024'
  },
  {
    title: 'ARG Prediction with Transformers',
    image: '/img/docs/prottrans/image.png',
    description: 'Fine-tuned ProtTrans model for antibiotic resistance gene classification with 0.94 F-score',
    link: '/blog/arg-prediction-transformers',
    githubLink: 'https://github.com/ash3327/aist4010-coursework-asm2-protein-transformer',
    reportLink: 'https://github.com/ash3327/aist4010-coursework-asm2-protein-transformer/blob/main/report.pdf',
    badges: ['PyTorch','Transformers', 'Bioinformatics'],
    slug: 'arg-prediction-transformers',
    date: 'Feb 2024 - Mar 2024'
  },
  {
    title: 'P2P Communication App',
    image: '/img/docs/p2p/image.png',
    description: 'Real-time audio/video streaming with optimized packet synchronization',
    link: '/blog/p2p-communication-app',
    githubLink: 'https://github.com/ash3327/Peer-to-Peer-Communication-App',
    reportLink: '',
    badges: ['Python', 'Flask', 'Socket'],
    slug: 'p2p-communication-app',
    date: 'Jan 2024 - Apr 2024'
  },
  {
    title: 'U-Net Segmentation',
    image: '/img/docs/unet/unet_1.png',
    description: '99.55% pixel accuracy on Carvana dataset',
    link: '/blog/unet-segmentation',
    githubLink: 'https://github.com/ash3327/ImageSegmentation-UNet',
    reportLink: '',
    badges: ['PyTorch', 'Computer Vision', 'Segmentation'],
    slug: 'unet-segmentation',
    date: 'Aug 2023'
  },
  {
    title: 'Deep Q-Learning Agent',
    image: 'https://github.com/ash3327/ash3327/assets/86100752/60f36fa1-d6fd-490b-b275-19bb1cbe9715',
    description: 'Reinforcement learning agent achieving 30× higher performance in custom Gym environment',
    link: '/blog/deep-q-learning-agent',
    githubLink: 'https://github.com/ash3327/SnowFight',
    reportLink: 'https://github.com/ash3327/SnowFight/blob/master/project%20report%20-%20group%205.pdf',
    badges: ['Python', 'Gymnasium', 'PyTorch', 'Reinforcement Learning'],
    slug: 'deep-q-learning-agent',
    highlighted: true,
    date: 'Oct 2022 - Dec 2022'
  },
  {
    title: 'YOLO Object Tracking',
    image: '/img/docs/yolo-1/vid3.gif',
    description: 'Improved instance tracking with custom algorithm from outputs of YOLOv8',
    link: '/blog/yolo-object-tracking',
    githubLink: 'https://github.com/ash3327/ObjectDetection-v1',
    reportLink: '',
    badges: ['YOLO', 'Object Detection'],
    slug: 'yolo-object-tracking',
    date: 'Jun 2023 - Apr 2024'
  },
  {
    title: 'GAN Generation',
    image: '/img/docs/gan/v5.gif',
    description: 'Learning project that re-implemented GAN, WGAN and conditional GAN and explored the typical problems that occurred with GAN-based architectures like mode collapse and sensitivity to hyperparameters.',
    link: '/blog/gan-generation',
    githubLink: 'https://github.com/ash3327/GAN-self-learn-v1',
    reportLink: '',
    badges: ['PyTorch', 'GAN', 'Computer Vision'],
    slug: 'gan-generation',
    date: 'Aug 2022'
  },
  {
    title: 'Event-Planning App "Oasis"',
    image: '/img/docs/oasis/image.png',
    description: 'Android event planning app with robust notification system and SQL database',
    link: '/blog/oasis-event-planning-app',
    githubLink: 'https://github.com/ash3327/OasisPlanner/tree/development',
    reportLink: '',
    badges: ['Java', 'Android', 'SQL', 'RoomDB'],
    slug: 'oasis-event-planning-app',
    highlighted: true,
    date: 'Mar 2023 - Jan 2024'
  }
]; 