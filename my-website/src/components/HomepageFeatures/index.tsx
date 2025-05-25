import {useRef, useEffect} from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link: string;
  badges: string[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Vision Transformer Analysis',
    image: '/img/docs/vit/image4.png',
    description: 'Comparative study of Vision Transformers vs CNNs on small datasets',
    link: 'https://github.com/ash3327/proj-vision-transformer',
    badges: ['PyTorch', 'Computer Vision'],
  },
  {
    title: 'ARG Prediction with Transformers',
    image: '/img/docs/prottrans/image.png',
    description: 'Fine-tuned ProtTrans model for antibiotic resistance gene classification with 0.94 F-score',
    link: 'https://github.com/ash3327/aist4010-coursework-asm2-protein-transformer',
    badges: ['Transformers', 'Bioinformatics'],
  },
  {
    title: 'Deep Q-Learning Agent',
    image: 'https://github.com/ash3327/ash3327/assets/86100752/60f36fa1-d6fd-490b-b275-19bb1cbe9715',
    description: 'Reinforcement learning agent achieving 30× higher performance in custom Gym environment',
    link: 'https://github.com/ash3327/SnowFight',
    badges: ['Python', 'Gymnasium', 'Reinforcement Learning'],
  },
  {
    title: 'U-Net Segmentation',
    image: '/img/docs/unet/unet_1.png',
    description: '99.55% pixel accuracy on Carvana dataset',
    link: 'https://github.com/ash3327/ImageSegmentation-UNet',
    badges: ['PyTorch', 'Segmentation'],
  },
  {
    title: 'YOLO Object Tracking',
    image: '/img/docs/yolo-1/vid3.gif',
    description: 'Improved instance tracking with custom algorithm from outputs of YOLOv8',
    link: 'https://github.com/ash3327/ObjectDetection-v1',
    badges: ['YOLO', 'Object Detection'],
  },
  {
    title: 'GAN Generation',
    image: '/img/docs/gan/v5.gif',
    description: 'WGAN implementation on MNIST dataset',
    link: 'https://github.com/ash3327/GAN-self-learn-v1',
    badges: ['PyTorch', 'GAN'],
  },
  {
    title: 'Event-Planning App "Oasis"',
    image: '/img/docs/oasis/image.png',
    description: 'Android event planning app with robust notification system and SQL database',
    link: 'https://github.com/ash3327/OasisPlanner/tree/development',
    badges: ['Java', 'Android', 'RoomDB'],
  },
  {
    title: 'P2P Communication App',
    image: '/img/docs/p2p/image.png',
    description: 'Real-time audio/video streaming with optimized packet synchronization',
    link: 'https://github.com/ash3327/Peer-to-Peer-Communication-App',
    badges: ['Python'],
  },
];

function Feature({title, image, description, link, badges}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">
          <a href={link}>{title}</a>
        </Heading>
        <p>{description}</p>
        <div className={styles.badges}>
          {badges.map((badge, idx) => (
            <span key={idx} className={styles.badge}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateFisheye = () => {
      const cards = container.getElementsByClassName(styles.featureCard);
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      Array.from(cards).forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distanceFromCenter = Math.abs(cardCenter - containerCenter);
        const maxDistance = containerRect.width / 2;
        const scale = 1 - (distanceFromCenter / maxDistance) * 0.3; // Adjust 0.3 to control the fisheye intensity
        const opacity = 1 - (distanceFromCenter / maxDistance) * 0.5; // Adjust 0.5 to control opacity falloff

        (card as HTMLElement).style.transform = `scale(${scale})`;
        (card as HTMLElement).style.opacity = `${opacity}`;
      });
    };

    // Initial update
    updateFisheye();

    // Update on scroll
    container.addEventListener('scroll', updateFisheye);

    // Update on resize
    window.addEventListener('resize', updateFisheye);

    return () => {
      container.removeEventListener('scroll', updateFisheye);
      window.removeEventListener('resize', updateFisheye);
    };
  }, []);

  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer} ref={containerRef}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
