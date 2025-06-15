import React from 'react';
import type {ReactNode} from 'react';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import HighlightedContent from '../components/HighlightedContent';
import HomepageFeatures from '../components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Home"
      description="Sam's Portfolio - Machine Learning Engineer & Software Developer">
      <main>
        <section className={styles.highlighted}>
          <div className={styles.profile}>
            <div className={styles.profileContent}>
              <div className={styles.profileImage}>
                <img src={`/${siteConfig.projectName}/img/photo_tam_ka_ho.jpg`} alt="Sam's Profile" />
              </div>
              <div className={styles.profileText}>
                <h1>Hi there👋, I'm Sam</h1>
                {/* <h3>Fresh Graduate, Interest in Machine Learning (Computer Vision and RL)</h3> */}
                
                <div className={styles.badges}>
                  {/* <a href="https://ash3327.github.io">
                    <img src="https://img.shields.io/badge/Portfolio%20Website-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio"/>
                  </a> */}
                  {/* <a href="https://ash3327.github.io/personalblog">
                    <img src="https://img.shields.io/badge/Blog%20(In%20Progress)-0097A7?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Blog"/>
                  </a> */}
                  <a href="https://github.com/ash3327">
                    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
                  </a>
                  <a href="https://www.linkedin.com/in/khtam-51a008256">
                    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
                  </a>
                  <a href="/personalblog/img/docs/_resumes/CV_TAMKAHO_AI_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Resume%20(Vision/RL)-4B0082?style=for-the-badge&logo=google-drive&logoColor=white" alt="Resume"/>
                  </a>
                  <a href="/personalblog/img/docs/_resumes/CV_TAMKAHO_AI_LLM.pdf" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Resume%20(NLP)-4B0082?style=for-the-badge&logo=google-drive&logoColor=white" alt="Resume"/>
                  </a>
                </div>

                <p>Fresh Graduate Graduating with B.Eng. in Artificial Intelligence at CUHK (July 2025)<br/>
                GPA: 3.755/4.00 (overall), 3.795/4.00 (major) | Dean's List 2021-24<br/>
                Interests in Machine Learning (Computer Vision and RL)</p>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures />
        <HighlightedContent />
      </main>
    </Layout>
  );
}