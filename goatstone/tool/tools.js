// d3GraphData : create a data structure to be used by the D3 library
// TODO codex.encode D3Data.encodeForGraph(rootNode)
// nodes: [ {x:10, y:10} , {x:40, y:40} ],
// links: [ { source: {x:10, y:10}, target:{x:40, y:30} } ]
var d3GraphData = {
    nodes: [],
    links: []
}
function makeD3Data (node) {
    var xNew = (node.position[0]) ? node.position[0] : 300
    var yNew = (node.position[1]) ? node.position[1] : 400
    d3GraphData.nodes.push(
        {x: xNew, y: yNew, value: node.value, id: 'node_' + node.id})
    for (var i = 0; i < node.children.length; i++) {
        var t = node.children[i]
        d3GraphData.links.push(
            { source: {x: xNew, y: yNew}, target: {x: t.position[0], y: t.position[1]} }
            )
        makeD3Data(node.children[i])
    }
    return d3GraphData
}

makeD3Data()
