const {ContextProviderComponent} = window;

class SearchResults extends ContextProviderComponent {
  searchTerm = '';
  loading = true;
  results = [
    {name: 'Sample 1', link: '/some-link'}
  ];
  
  constructor() {
    super();
    
    const match = this.value || location.search.match(/search-term=([^&]*)/);
    
    if (match[1]) {
      this.searchTerm = decodeURI(match[1]);
    }
  }
}

SearchResults.register();
