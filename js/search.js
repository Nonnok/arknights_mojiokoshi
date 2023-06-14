window.addEventListener('DOMContentLoaded', function() {
  const input_categories = document.querySelectorAll("input[name=categories]");
  const targets = document.querySelectorAll(".target");
  for(let input_category of input_categories) {
    input_category.addEventListener('change',function(){
      for(let target of targets) {
        target.style.setProperty('display', 'block');
      }
      if( this.checked ) {
        if(this.value !== 'All') {
          const not_checked_categories = document.querySelectorAll('.target:not([data-category~=' + '"' + this.value + '"])');
          for(let not_checked_category of not_checked_categories) {
            not_checked_category.style.setProperty('display', 'none');
          }
        }
      }
    });
  }
});