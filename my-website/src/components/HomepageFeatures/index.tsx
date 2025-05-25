import {useRef, useEffect} from 'react';
import type {ReactNode} from 'react';
import { FaGithub } from 'react-icons/fa';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {FeatureList, type FeatureItem} from '@site/src/data/projects';

function Feature({title, image, description, link, githubLink, badges}: FeatureItem) {
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
          <a href={githubLink} className={styles.githubBadge} target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.githubIcon} /> GitHub
          </a>
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
