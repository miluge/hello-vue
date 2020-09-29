const films ="https://ghibliapi.herokuapp.com/films/"

const vm = new Vue({
    el: '#app',
    data: {
        results: []
    },
    mounted () {
        axios.get(films).then(response => {
            this.results = response.data
        })
        .catch(error => console.log(error))
    },
    computed : {
        itemsSearched : function(){
          var self = this;
          if( this.searchText == ''){
            return this.items;
          }
          return this.items.filter(function(item){
            return item.indexOf(self.searchText) >= 0;
          });
        }
    },
});