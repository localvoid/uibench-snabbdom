var snabbdom = require('snabbdom');
var patch = snabbdom.init([
  require('snabbdom/modules/attributes'),
  require('snabbdom/modules/class'),
  require('snabbdom/modules/props'),
  require('snabbdom/modules/style'),
  require('snabbdom/modules/eventlisteners'),
]);
var h = require('snabbdom/h');
var thunk = require('snabbdom/thunk');

function renderTableCell(text) {
  function onClick(e) {
    console.log('Clicked' + text);
    e.stopPropagation();
  }
  return h('td.TableCell', {on: {click: onClick}}, text);
}

function renderTableRow(data) {
  var cells = data.props;

  var children = [thunk('td.TableCell', renderTableCell, ['#' + data.id])];
  for (var i = 0; i < cells.length; i++) {
    children.push(thunk('td.TableCell', renderTableCell, [cells[i]]));
  }

  return h('tr.TableRow', {class: {active: data.active}, attrs: {'data-id': data.id}}, children);

}

function renderTable(data) {
  var items = data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    children.push(thunk('tr.TableRow', item.id, renderTableRow, [item]));
  }

  return h('table.Table', [h('tbody', children)]);
}

function renderAnimBox(data) {
  var time = data.time;
  var style = {
    'borderRadius': (time % 10).toString() + 'px',
    'background': 'rgba(0,0,0,' + (0.5 + ((time % 10) /10)).toString() + ')'
  };

  return h('div.AnimBox', {style: style, attrs: {'data-id': data.id}});
}

function renderAnim(data) {
  var items = data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    children.push(thunk('div.AnimBox', item.id, renderAnimBox, [item]));
  }

  return h('div.Anim', children);
}

function renderTreeLeaf(data) {
  return h('li.TreeLeaf', data.id.toString());
}

function renderTreeNode(data) {
  var children = [];

  for (var i = 0; i < data.children.length; i++) {
    var n = data.children[i];
    if (n.container) {
      children.push(thunk('ul.TreeNode', n.id, renderTreeNode, [n]));
    } else {
      children.push(thunk('li.TreeLeaf', n.id, renderTreeLeaf, [n]));
    }
  }

  return h('ul.TreeNode', children);
}

function renderTree(data) {
  return h('div.Tree', [thunk('ul.TreeNode', renderTreeNode, [data.root])]);
}

function renderMain(data) {
  var location = data.location;

  var section;
  if (location === 'table') {
    section = thunk('table.Table', renderTable, [data.table]);
  } else if (location === 'anim') {
    section = thunk('div.Anim', renderAnim, [data.anim]);
  } else if (location === 'tree') {
    section = thunk('div.Tree', renderTree, [data.tree]);
  }

  if (section === undefined) {
    return h('div.Main');
  }
  return h('div.Main', [section]);
}

uibench.init('Snabbdom', '0.5.0');

document.addEventListener('DOMContentLoaded', function(e) {
  var container = document.querySelector('#App');
  var root = h('div.Main');
  patch(container, root);

  uibench.run(
    function(state) {
      var newRoot = renderMain(state);
      patch(root, newRoot);
      root = newRoot;
    },
    function(samples) {
      patch(root, h('pre', JSON.stringify(samples, null, ' ')));
    }
  );
});
