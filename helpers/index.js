function getOffset(page, limit){
  return (page * limit) - limit;
}
 
function getNextPage(page, limit, total){
  if((total/limit) > page){ return page + 1; }
  return null;
}
 
function getPreviousPage(page){
  if(page <= 1){ return null; }
  return page - 1;
}

module.exports = { getOffset, getNextPage, getPreviousPage }