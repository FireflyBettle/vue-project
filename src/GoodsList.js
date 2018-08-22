let obj={};

//保存商品
obj.saveGoods=function (goodList) {
  return window.localStorage.setItem('goodsList',JSON.stringify(goodList))
}
//获取所有商品
obj.getGoodList=function () {
  return JSON.parse(window.localStorage.getItem('goodsList') || '{}')
}
//增加商品
obj.add=function (goods) {
  let goodsList=this.getGoodList();
  if (goodsList[goods.id]) {
    goodsList[goods.id]+=goods.num;
  }else {
    goodsList[goods.id]=goods.num;
  }
  this.saveGoods(goodsList)
}
//获取购物车数量总数
obj.getTotalCount=function () {
  let goodList=this.getGoodList();
  let values=Object.values(goodList);
  let sum=0;
  values.forEach(val=>{
    sum += val;
  })
  return sum;
}

export default obj;
