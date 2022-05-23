// 给表格设置key属性
export function setKey(data, key = 'id') {
    return data.map((v) => {
      v.key = v[key];
      return v;
    });
  }
  // 过滤函数
  export function filterOpt(input, option) {
    return (
      option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase().trim()) >= 0
    );
  }
  // 防抖 用法  simpleDebounce(fn，1000，args)就是一个拥有防抖效果的函数
  export function simpleDebounce(fn, delay = 100) {
    let timer = null
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
  // 数组去重  用法 let targetArr = uniqueFunc(arr,ids) targetArr就是经过ids去重的函数
  export function uniqueFunc(arr, uniId = 'id') {
    let hash = {};
    return arr.reduce((accum, item) => {
      hash[item[uniId]] ? "" : (hash[item[uniId]] = true && accum.push(item));
      return accum;
    }, []);
  }
  
  
  
  // 深拷贝
  
  function isObject(value) {
    const valueType = typeof value
    return valueType !== null && valueType === 'object' || valueType === 'function'
  }
  export function deepClone(orgobj ,map =  new WeakMap()) {
    if (!isObject(orgobj)) return orgobj
    // 处理函数
    if (orgobj instanceof Set) {
        return new Set([...orgobj])
    }
    if (orgobj instanceof Map) {
        return new Map([...orgobj])
    }
    if (typeof orgobj === 'function') return orgobj
    if (typeof orgobj === 'symbol') return Symbol(orgobj.description)
    if(map.has(orgobj)){
        return map.get(orgobj)
    }
    const newObj = Array.isArray(orgobj) ? [] : {}
    map.set(orgobj,newObj)
    for (const key in orgobj) {
        newObj[key] = deepClone(orgobj[key],map)
    }
    const symbolKeys = Object.getOwnPropertySymbols(orgobj)
    for (const skey of symbolKeys) {
        newObj[skey] = deepClone(orgobj[skey])
    }
    return newObj
  
  }
  
  // 滚动条问题
  function findscroller(element){
    element.onscroll=function () {
      console.log(element)
    }
    Array.from(element.children).forEach(findscroller)
  }
  findscroller(document.body)