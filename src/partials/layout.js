const {WebComponent} = window;

class SearchField extends WebComponent {
  static observedAttributes = ['placeholder', 'expanded', 'value']
  expanded = false;
  
  constructor() {
    super();
    
    const match = this.value || location.search.match(/search-term=([^&]*)/);
    
    if (match[1]) {
      this.value = decodeURI(match[1]);
      this.expanded = true;
    }
  }
  
  get stylesheet() {
    return `
      <style>
        :host {
          position: relative;
        }
        
        :host * {
          box-sizing: border-box;
        }
        
        .search-toggle {
          width: 35px;
          height: 35px;
          background: url("../assets/search-icon.svg") center center no-repeat;
          border: none;
          appearance: none;
          cursor: pointer;
          border-radius: 3px;
        }
        
        .search-toggle:hover {
          background: var(--light-grey, #F7F7F7) url("../assets/search-icon.svg") center center no-repeat;
        }
        
        .search-field {
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translate(0, -50%);
          width: 0;
          max-width: 400px;
          overflow: hidden;
          transition: width 0.5s ease;
        }
        
        .search-field input {
          height: 40px;
          border-radius: 3px;
          padding: 10px;
          border: 1px solid var(--mid-grey, #c1c1c1);
          background: var(--light, #fff);
          width: 100%;
          display: block;
          font-size: 1rem;
        }
        
        .search-block.expanded .search-toggle {
          background: url("../assets/close-icon.svg") center 65%/ 20px no-repeat;
        }
        
        .search-block.expanded .search-field {
          width: calc(100vw - 40px - 50px);
          transition: width 1s ease;
        }
    </style>
    `
  }
  
  get template() {
    return `
      <div class="search-block" attr.class.expanded="expanded">
        <button type="button" class="search-toggle" onclick="toggleField()" ref="btn">&nbsp</button>
        <label class="search-field">
          <input type="text" ref="field" name="search" placeholder="{placeholder}" value="{value}" onkeydown="handleFieldKeyDown($event)">
        </label>
      </div>
      `;
  }
  
  handleFieldKeyDown(event) {
    if (event.keyCode === 13) {
      const val = encodeURIComponent(this.$refs.field.value)
      window.location.href = `/search-results?search-term=${val}`;
    }
  }
  
  toggleField() {
    this.expanded = !this.expanded;
    
    if (this.expanded) {
      this.$refs.field.focus();
    } else {
      this.$refs.btn.focus();
    }
  }
}

SearchField.register();
