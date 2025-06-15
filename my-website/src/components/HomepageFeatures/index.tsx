import {useRef, useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import { FaGithub, FaFileAlt } from 'react-icons/fa';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {FeatureList, type FeatureItem} from '../../data/projects';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const filterTags = ['all', 'featured', 'computer-vision', 'reinforcement-learning', 'transformers', 'software-development'];
type FilterTag = 'all' | 'featured' | 'computer-vision' | 'reinforcement-learning' | 'transformers' | 'software-development';

function Feature({title, image, description, link, githubLink, reportLink, badges, highlighted, date}: FeatureItem) {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx(styles.featureCard, highlighted && styles.highlightedCard)}>
      {highlighted && <div className={styles.highlightedBadge}>Featured</div>}
      <div className={styles.featureImage}>
        <img src={image ? (image.startsWith('/') ? `/${siteConfig.projectName}${image}` : image) : `/${siteConfig.projectName}/img/placeholder.png`} alt={title} />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">
          <a href={link.startsWith('/') ? `/${siteConfig.projectName}${link}` : link}>{title}</a>
        </Heading>
        <p className={styles.date}>{date}</p>
        <p>{description}</p>
        <div className={styles.badges}>
          {badges.map((badge: string, idx: number) => (
            <a key={idx} href={`/personalblog/blog/tags/${badge.toLowerCase().replace(/\s+/g, '-')}`} className={styles.badge}>
              {badge}
            </a>
          ))}
          <a href={githubLink} className={styles.githubBadge} target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.githubIcon} /> GitHub
          </a>
          {reportLink && (
            <a href={reportLink.startsWith('/') ? `/${siteConfig.projectName}${reportLink}` : reportLink} className={styles.githubBadge}>
              <FaFileAlt className={styles.reportIcon} /> Report
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterTag>('featured');

  const filteredProjects = FeatureList.filter(project => {
    switch (activeFilter) {
      case 'featured':
        return project.highlighted;
      case 'computer-vision':
        return project.badges.some(badge => 
          badge.toLowerCase().includes('vision') || 
          badge.toLowerCase().includes('yolo') ||
          badge.toLowerCase().includes('segmentation')
        );
      case 'reinforcement-learning':
        return project.badges.some(badge => 
          badge.toLowerCase().includes('reinforcement') || 
          badge.toLowerCase().includes('gymnasium')
        );
      case 'transformers':
        return project.badges.some(badge => 
          badge.toLowerCase().includes('transformer') || 
          badge.toLowerCase().includes('huggingface')
        );
      case 'software-development':
        return project.badges.some(badge => 
          badge.toLowerCase().includes('java') || 
          badge.toLowerCase().includes('android') ||
          badge.toLowerCase().includes('flask') ||
          badge.toLowerCase().includes('socket')
        );
      default:
        return true;
    }
  });

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
  }, [activeFilter]);

  return (
    <section className={styles.features}>
      <div className={styles.sectionHeader}>
        <h2>🚀 Projects</h2>
        <div className={styles.filterTags}>
          {filterTags.map((filter) => (
            <button 
              key={filter}
              className={clsx(styles.filterTag, activeFilter === filter && styles.active)}
              onClick={() => setActiveFilter(filter as FilterTag)}
            >
              {filter.replace('-', ' ').replace(/(^\w|\s\w)/g, str => str.toUpperCase())}
            </button>
          ))}
          <button 
            className={styles.filterTag}
          >
            <a href="/personalblog/blog/tags">More Tags</a>
          </button>
        </div>
      </div>
      <div className={styles.featuresContainer} ref={containerRef}>
        {filteredProjects.map((props: FeatureItem, idx: number) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
