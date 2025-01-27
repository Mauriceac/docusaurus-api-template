import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Installation',
    Svg: require('@site/static/img/sample_Online_meeting.svg').default,
    description: (
      <>
        Sed molestie magna non arcu volutpat malesuada. Sed massa dui, facilisis quis ex sit amet, 
        facilisis aliquet magna. Interdum et fames ac ante.
      </>
    ),
  },
  {
    title: 'Configuration',
    Svg: require('@site/static/img/sample_CMS.svg').default,
    description: (
      <>
        Fusce at lacus bibendum, commodo ipsum non, auctor erat. Mauris imperdiet 
        metus quis tellus ultricies, quis pretium libero sollicitudin.
      </>
    ),
  },
  {
    title: 'Tips & Tricks',
    Svg: require('@site/static/img/sample_Kanban_board.svg').default,
    description: (
      <>
        Quisque pellentesque velit tortor, et laoreet felis tempus et. Morbi 
        dictum condimentum nibh, vitae gravida purus porttitor vestibulum.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
