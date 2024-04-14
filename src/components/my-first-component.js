import { Factory, ComponentConfigs, ComponentProps } from 'ui-component-eventbus-js/Factory';

(function(
    Factory,
    ComponentConfigs
){
    var initialState = {
        componentName : 'exampleComponent',
    };

    // Step 1 - Configuration
    ComponentConfigs.exampleComponent = {
        eventBus : [ 'GlobalComponentEvents' ],
        state : initialState, 
        props : {
            eventListeners : {
                onChangeFormInput : {
                    listener : 'keyup',
                    callback : ( event, component, componentKey ) => {
                        component.dispatch.commitHeading( event.target );
                    }
                }, 
            }
        },
        hooks : {
            onMount : function ( state ) { 
                this.component().dispatch.insertTemplate( '#app' ); 
                let key = state.key;
            },
        },  
        dispatch : {
            commitHeading : function ( input ) {
                console.log(this.component());
            },
        },
        template: `
            <div class="row" data-inline-template="exampleComponent">
                <div class="col">
                    <div class="sub-header">
                        <p>Sub-Header</p>
                    </div>
                    <div class="main-content">
                        <h1>Hello World!</h1>
                        <p>Some initial <strong>bold</strong> text</p>
                        <p><br /></p>
                    </div>
                    <div class="footer">
                        <p>Footer</p>
                    </div>
                </div>
            </div>`
        ,
        debug: true
    }

    // Step 2 - Registration
    Factory.registerComponent( ComponentConfigs.exampleComponent );

})(
    Factory,
    ComponentConfigs
);