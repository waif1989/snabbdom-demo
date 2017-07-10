/**
 * Created by chensiwei on 2017-5-11.
 */
const INC = Symbol('inc');
const DEC = Symbol('dec');

// model : Number
function view(count, handler) {
    return h('div', [
        h('button', {
            on   : { click: handler.bind(null, {type: INC}) }
        }, '+'),
        h('button', {
            on   : { click: handler.bind(null, {type: DEC}) }
        }, '-'),
        h('div', `Count : ${count}`),
    ]);
}


function update(count, action) {
    return  action.type === INC ? count + 1
        : action.type === DEC ? count - 1
        : count;
}

export default { view, update, actions : { INC, DEC } }