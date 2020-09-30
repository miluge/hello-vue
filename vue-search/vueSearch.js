const vm = new Vue({
	
	el: '#app',
	
	data: { 
		items: [],
		searchText: ''
	},
	mounted() {
		axios
			.get('https://ghibliapi.herokuapp.com/films').then(response => {
				this.items = response.data;
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
              // https://www.reddit.com/r/vuejs/comments/62kfae/how_do_i_create_very_simple_instant_search_filter/
              // Must be of string type 
            return item.title.toLowerCase().indexOf(self.searchText) >= 0 ||
                   item.producer.toLowerCase().indexOf(self.searchText) >= 0 ||
                   item.director.toLowerCase().indexOf(self.searchText) >= 0 ||
                   item.release_date.toString().indexOf(self.searchText) >= 0;

          });
        }
    }
});