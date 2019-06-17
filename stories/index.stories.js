/** @format */

import React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs'

import {Button, Welcome} from '@storybook/react/demo'
import {Card, Kpi} from '../src/components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

const stories = storiesOf('Components', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

stories
  .add('Demo Button', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('Card mit KPI', () => {
    const title = text('Title', 'Tagesumsatz')
    const value = text('Wert', '4000€')
    const growth = number('Growth', 16)
    return <Card content={<Kpi title={title} value={value} growth={growth} />} />
  })
