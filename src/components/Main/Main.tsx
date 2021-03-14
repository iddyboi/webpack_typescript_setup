import React from 'react';

export interface MainProps {
  info?: string;
}

const Main: React.FunctionComponent<MainProps> = ({ info }) => {
  return (
    <>
      {' '}
      <div className='main-content'>
        <h1 className='main-content__header'>My Journey so Far</h1>
        <h3 className='main-content__sub'>
          I have been a front end developer in the uk for 4 years and running, i
          have been building ecommerce websites for some of leading companies
          such as Calvin clien, Tommy Hilfiger, Purina, Nestle and Lego. The
          tools I use everyday for my development are React, Typescript,
          Webpack, Docker and Scss
        </h3>
        <p className='main-content__lead'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          sunt molestias incidunt. Unde, mollitia? Minima quos illo magnam
          asperiores laborum alias facere voluptates perspiciatis repellat?
          Molestiae nobis obcaecati, consectetur laudantium nemo voluptate earum
          similique odio, dolor iusto deserunt saepe adipisci!
        </p>
        <button className='btn btn-primary'>Read more</button>
      </div>
    </>
  );
};

export default Main;
