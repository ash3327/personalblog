import React, {useRef, useEffect} from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {EducationList, WorkExperienceList, AwardList} from '../../data/experiences';
import {SkillGroups} from '../../data/skills';

export default function HighlightedContent(): ReactNode {
  const experiencesRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containers = [experiencesRef.current, awardsRef.current, skillsRef.current];
    
    const updateFisheye = (container: HTMLDivElement | null) => {
      if (!container) return;
      
      const cards = container.getElementsByClassName(styles.card);
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const maxDistance = containerRect.width / 2;

      Array.from(cards).forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distanceFromCenter = Math.abs(cardCenter - containerCenter);
        const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
        
        // Smoother scaling and opacity transitions
        const scale = 1 - (normalizedDistance * 0.2); // Reduced scale effect
        const opacity = 1 - (normalizedDistance * 0.3); // Reduced opacity effect

        (card as HTMLElement).style.transform = `scale(${scale})`;
        (card as HTMLElement).style.opacity = `${opacity}`;
      });
    };

    const handleScroll = () => {
      containers.forEach(container => {
        if (container) {
          requestAnimationFrame(() => updateFisheye(container));
        }
      });
    };

    const handleResize = () => {
      containers.forEach(container => {
        if (container) {
          requestAnimationFrame(() => updateFisheye(container));
        }
      });
    };

    containers.forEach(container => {
      if (container) {
        updateFisheye(container);
        container.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
      }
    });

    return () => {
      containers.forEach(container => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
        }
      });
    };
  }, []);

  return (
    <section className={styles.highlighted}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h2>💼 Experiences</h2>
          <div className={styles.cardsContainer} ref={experiencesRef}>
            {WorkExperienceList.map((work, idx) => (
              <div key={`work-${idx}`} className={styles.card}>
                <h3>{work.title}</h3>
                <h4>{work.company}</h4>
                <p className={styles.date}>{work.date}</p>
                <ul>
                  {work.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
            {EducationList.map((edu, idx) => (
              <div key={`edu-${idx}`} className={styles.card}>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className={styles.date}>{edu.date}</p>
                <ul>
                  {edu.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>🏆 Awards</h2>
          <div className={styles.cardsContainer} ref={awardsRef}>
            {AwardList.map((award, idx) => (
              <div key={idx} className={styles.card}>
                <h3>{award.name}</h3>
                <p className={styles.date}>{award.year}</p>
                {award.description && <p>{award.description}</p>}
                {award.image && (
                  <div className={styles.awardImage}>
                    <img src={award.image} alt={award.name} />
                  </div>
                )}
                {award.link && (
                  <a href={award.link} target="_blank" rel="noopener noreferrer" className={styles.awardLink}>
                    <img src="https://img.shields.io/badge/Link-4285F4?style=flat&logo=link&logoColor=white" alt="Link"/>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>🛠️ Skills</h2>
          <div className={styles.cardsContainer} ref={skillsRef}>
            {SkillGroups.map((group, idx) => (
              <div key={idx} className={styles.card}>
                <h3>{group.title}</h3>
                <div className={styles.badges}>
                  {group.badges.map((badge, i) => (
                    <img
                      key={i}
                      src={`https://img.shields.io/badge/${badge.name}${badge.level ? `-${badge.level}` : ''}-${badge.color}?style=flat${badge.logo ? `&logo=${badge.logo}` : ''}${badge.logoColor ? `&logoColor=${badge.logoColor}` : ''}`}
                      alt={badge.name}
                      style={{ height: '24px' }} // Adjusted to shrink the size of the icon
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 