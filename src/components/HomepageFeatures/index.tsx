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
        title: 'Easy to Use',
        Svg: require('@site/static/img/easy.svg').default,
        description: (
            <>
                RollAsBack Api is designed to be easy to use. It is built with modern
                python language and is easy to use.
            </>
        ),
    },
    {
        title: 'Community Supported',
        Svg: require('@site/static/img/community.svg').default,
        description: (
            <>
                RollAsBack Api is open source and supported by a community of developers.
                It is built with modern python language and is easy to use.
            </>
        ),
    },
    {
        title: 'Powered by Python',
        Svg: require('@site/static/img/programming.svg').default,
        description: (
            <>
                Extend or customize your backend with python. RollAsBack Api is built with
                modern python language and is easy to use.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
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
