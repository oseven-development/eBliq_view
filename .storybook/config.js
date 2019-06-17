/** @format */

import {configure, addDecorator} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {addParameters} from '@storybook/react' // or any other type of storybook

addDecorator(jsxDecorator)
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
