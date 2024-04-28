export const apiMiddleware = (store) => (next) => (action) => {
  console.log(store)
  const baseUrl = "https://fakestoreapi.com";
  if (action.type === "api/makeCall") {
    next(action)
    const { url, onSuccess, onLoading, onError } = action.payload;
    store.dispatch({
      type: onLoading,
    })
    fetch(`${baseUrl}/${url}`)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch({
          type: onSuccess,
          payload: data,
        });
      })
      .catch(() => {
        store.dispatch({
          type: onError,
          payload: 'SomeThing Error!!',
        });
      });
  } else {
    next(action);
  }
};

export const fetchData = (payload) => ({type: 'api/makeCall', payload})
