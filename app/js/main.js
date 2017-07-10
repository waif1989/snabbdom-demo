"use strict";

import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);


/*var vnode = h('div', {style: {fontWeight: 'bold'}}, 'Hello world');
patch(document.getElementById('placeholder'), vnode);*/

/*function view(currentDate) {
  return h('div', 'Current date ' + currentDate);
}

var oldVnode = document.getElementById('placeholder');

setInterval( () => {
  const newVnode = view(new Date());
oldVnode = patch(oldVnode, newVnode);
}, 1000);*/

function view(name) {
  return h('div', [
    h('input', {
      props: { type: 'text', placeholder: 'Type  your name' },
      on   : { input: update }
    }),
    h('hr'),
    h('div', 'Hello ' + name)
  ]);
}

var oldVnode = document.getElementById('placeholder');

function update(event) {
  const newVnode = view(event.target.value);
  oldVnode = patch(oldVnode, newVnode);
}


oldVnode = patch(oldVnode, view(''));


