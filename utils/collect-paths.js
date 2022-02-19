const collectPaths = list => {
  const paths = new Set();
  
  for (let item of list) {
    if (item.hasOwnProperty('path')) {
      paths.add(item.path);
      
      if (item.subMenu && item.subMenu.length) {
        Array.from(collectPaths(item.subMenu), (p) => paths.add(p))
      }
    }
  }
  
  return paths;
}

module.exports.collectPaths = collectPaths;
