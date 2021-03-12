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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorem
          illum molestias, amet quod repellendus quidem quae earum optio fuga
          hic odio voluptate eos iure porro. Voluptas neque quam accusamus eum
          exercitationem sapiente ullam rerum deleniti delectus modi iure vero
          sit, similique ut facilis quasi? Ullam illo reprehenderit vitae
          voluptas.
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
