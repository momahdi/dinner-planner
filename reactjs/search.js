function Search({model,nav,resultChoice}){
    const [type, setType]= React.useState(""); 
    const [query, setQuery]= React.useState("");
  
    const [promise, setPromise]= React.useState(null);
    React.useEffect(()=> setPromise(DishSource.searchDishes({})), [])
    const [data,error]=usePromise(promise);

    return h(React.Fragment, {}
    , h(SearchFormView, {
        onText: query=> setQuery(query),
        onType: type=> setType(type),
        onSearch: ()=> setPromise(DishSource.searchDishes({type:type,query:query})),
        nav
    }) 
    ,promiseNoData(promise,data,error) ||
             h(SearchResultsView, {searchResults:data,
                                    dishChosen: dishId=>model.setCurrentDish(dishId),resultChoice}));
}
