export default function createStore(reducer, preloadedState, enhancer)
{
  if(
    (typeof preloadedState === 'function' && typeof enhancer === 'function') ||
    (typeof enhancer === "function" && typeof arguments[3] === 'function')
  ){
    throw new Error(
      'It looks like you are passing several store enhancers to ' +
        'createStore(). This is not supported. Instead, compose them ' +
        'together to a single function'
    )
  }
}
