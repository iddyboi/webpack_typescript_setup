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
          I have been a front end developer in the uk for 4 years and running,
          in those years I have been building ecommerce websites for some of
          most established companies such as Calvin clien, Tommy Hilfiger,
          Purina, Nestle and Lego. The tools I use everyday for my development
          are React, Typescript, Webpack, Docker and Scss.
        </h3>
        <p className='main-content__lead'>
          My work flow is to work closely with the design team and implement a
          mobile first approach to save me from headaches from bugs. Most of the
          time i work in a team using git for source-control . I work with Api's
          in my projects and i also build restFul Api's, using nodejs or python
          framework Flask.
        </p>
        <button className='btn btn-primary'>Read more</button>
      </div>
    </>
  );
};

export default Main;
