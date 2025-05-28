import {useRef, useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import { FaGithub } from 'react-icons/fa';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {FeatureList, type FeatureItem} from '../../data/projects';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Feature({title, image, description, link, githubLink, badges, highlighted, date}: FeatureItem) {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx(styles.featureCard, highlighted && styles.highlightedCard)}>
      {highlighted && <div className={styles.highlightedBadge}>Featured</div>}
      <div className={styles.featureImage}>
        <img src={image.startsWith('/') ? `/${siteConfig.projectName}${image}` : image} alt={title} />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">
          <a href={link.startsWith('/') ? `/${siteConfig.projectName}${link}` : link}>{title}</a>
        </Heading>
        <p>{description}</p>
        <p className={styles.date}>{date}</p>
        <div className={styles.badges}>
          {badges.map((badge: string, idx: number) => (
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
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(true);

  const filteredProjects = showFeaturedOnly 
    ? FeatureList.filter(project => project.highlighted)
    : FeatureList;

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
        const scale = 1 - (distanceFromCenter / maxDistance) * 0.3;
        const opacity = 1 - (distanceFromCenter / maxDistance) * 0.5;

        (card as HTMLElement).style.transform = `scale(${scale})`;
        (card as HTMLElement).style.opacity = `${opacity}`;
      });
    };

    updateFisheye();
    container.addEventListener('scroll', updateFisheye);
    window.addEventListener('resize', updateFisheye);

    return () => {
      container.removeEventListener('scroll', updateFisheye);
      window.removeEventListener('resize', updateFisheye);
    };
  }, [showFeaturedOnly]); // Re-run effect when filter changes

  return (
    <section className={styles.features}>
      <div className={styles.sectionHeader}>
        <h2>🚀 Projects</h2>
        <button 
          className={clsx(styles.toggleButton, !showFeaturedOnly && styles.active)}
          onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
        >
          {showFeaturedOnly ? 'Show All Projects' : 'Show Featured Only'}
        </button>
      </div>
      <div className={styles.featuresContainer} ref={containerRef}>
        {filteredProjects.map((props: FeatureItem, idx: number) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
