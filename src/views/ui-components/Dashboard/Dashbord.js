import React, { Fragment } from 'react';



import ExampleWrapperSeamless from './layoutcompnent';
import PageTitle from './PageTitle'
import Cards1Examples1 from './Cards/Cards1/Cards1Examples1';
import Cards4Examples23 from './Cards/Cards4/Cards4Examples23';
import Cards2Examples8 from './Cards/Cards2/Cards2Examples8';
import Cards5Examples29 from './Cards/Cards5/Cards5Examples29';
import Cards7Examples48 from './Cards/Cards7/Cards7Examples48';
import Cards8Examples55 from './Cards/Cards8/Cards8Examples55';
import Cards9Examples56 from './Cards/Cards9/Cards9Examples56';
import Cards9Examples61 from './Cards/Cards9/Cards9Examples61';
import Cards11Examples70 from './Cards/Cards11/Cards11Examples70';
import Cards12Examples79 from './Cards/Cards12/Cards12Examples79';
export default function Dashboard() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Cards examples 3"
        titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
      />

      <ExampleWrapperSeamless sectionHeading="Cards 1">
        <Cards2Examples8 />
      </ExampleWrapperSeamless>
      {/* <ExampleWrapperSeamless sectionHeading="Cards 2">
        <Cards2Examples8 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 3">
        <Cards5Examples29 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 4">
        <Cards7Examples48 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 5">
        <Cards8Examples55 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 6">
        <Cards9Examples56 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 7">
        <Cards9Examples61 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 8">
        <Cards11Examples70 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 9">
        <Cards12Examples79 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless sectionHeading="Cards 10">
        <Cards4Examples23 /> 
      </ExampleWrapperSeamless>*/}
    </Fragment>
  );
}
