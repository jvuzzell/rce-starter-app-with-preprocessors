import "../main.js";
import "../components/my-first-component.js"

(function(){
    setTimeout(() => {
        document.querySelector( 'body' ).removeAttribute( 'data-loading-screen' ); 
        document.querySelector( 'body' ).setAttribute( 'data-overlay', 'inactive' );
    }, 750)
})();