const {collectPaths} = require("../../utils/collect-paths");
const menu = require("./menu");
const pages = require("./pages");
const en = require("./i18n/en.json");

const collectBrief = list => {
  const paths = [];
  let page = null;
  
  for (let item of list) {
    if (item.hasOwnProperty('path') && item.path.startsWith('/documentation')) {
      page = pages[item.path];
      
      paths.push({
        path: item.path,
        label: item.label,
        ...en.pages[page.localeKey],
      });
      
      if (item.subMenu && item.subMenu.length) {
        Array.from(collectBrief(item.subMenu), (p) => {
          page = pages[p.path];
  
          paths.push({
            path: p.path,
            label: p.label,
            ...en.pages[page.localeKey]
          });
        })
      }
    }
  }
  
  return paths;
}

console.log(collectBrief(menu.documentation));

module.exports = collectBrief(menu.documentation);
