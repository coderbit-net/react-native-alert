* Customizable version of alert for react native
* Version: 0.0.1

### Structure ###

- Alert
    * overlay - screen size container shading background content
    * container - content wrapper
        * body - container
            - icon - svg grapihcs
            - title - name
            - text - message
        * actions - container for buttons
            - button - one or two buttons for actions

### Properties ###
+ icon: svg element
+ title: string.isRequired
+ message: string
+ buttons: array [{text, onPress, style}] 
- text: string
- onPress: function
- style: theme preDefined ['neutral', 'negative', 'positive']

### Styles ###
- container
- button

### API ###
+ show

### States ###
- visible: bool