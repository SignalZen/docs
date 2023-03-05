import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    img: 'wizard.png',
    description: (
      <>
        SignalZen was designed for quick setup that is done through Integration Wizards on the Console.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    img: 'customer-service.png',
    description: (
      <>
        The main Customer Support channels for online business are Live Chat and Email. We have you covered for that!
      </>
    ),
  },
  {
    title: 'Powered by React',
    img: 'atom.png',
    description: (
      <>
        The Live Chat widget offered by SignalZen is coded in React and is working without an iframe. This makes your website running without the loss of site loading speed. The <strong>first chunk of the widget weights only around 200KB</strong>.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{ marginBottom: "20px" }}>
        <img src={require(`@site/static/img/${img}`).default} alt={title} width="200" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
