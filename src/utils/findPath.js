// https://github.com/react-component/tree/issues/22
// findPath() Copy from http://react-component.github.io/tree-select/examples/basic.html
export default function findPathByCode(value, data) {
  const sel = [];
  function loop(selected, children) {
    for (let i = 0; i < children.length; i += 1) {
      const item = children[i];
      if (selected === item.code) {
        sel.push(item);
        return;
      }
      if (item.children) {
        loop(selected, item.children, item);
        if (sel.length) {
          sel.push(item);
          return;
        }
      }
    }
  }
  loop(value, data);
  return sel;
}
