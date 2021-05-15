import React from 'react';
import FeatureBox from './FeaturesBox';
import featureImage from '../images/feature_1.png';
import featureImage1 from '../images/feature_2.png';
import featureImage2 from '../images/feature_3.png';

const Feature = () => {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={featureImage} title="App Overview" />
        <FeatureBox image={featureImage1} title="Downloads 1000+" />
        <FeatureBox image={featureImage2} title="Development Team" />
      </div>
    </div>
  );
};

export default Feature;
