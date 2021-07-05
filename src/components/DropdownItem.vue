<template>



    <li v-if="children.length == 0" v-on:click="triggerCommand" class="dropdown-item">
        <div class="dropdown-item-content">
            <i v-bind:class="iconData"></i>
            <div class="dropdown-item-label">{{ labelData }}</div>
        </div>
    </li> 
    <li v-else v-on:mouseenter="displayChild" v-on:mouseleave="hideChild" class="dropdown-submenu-toggle">
        <div class="dropdown-item">
            <div class="dropdown-item-content">
                <i v-bind:class="iconData"></i>
                <div class="dropdown-item-label">{{ labelData }}</div>
            </div>

            <i v-bind:id="'arrow-' + menuItemIdData" class="fas fa-angle-right"></i>   

        </div>
        <ul v-bind:id="'dropdown-submenu-' + menuItemIdData" class="dropdown-submenu">
            <DropdownItem v-for="(child, index) in childrenData" :key="child" :menuItemId="menuItemIdData + '-' + index" :label="child.label" :icon="child.icon" :command="child.command" :children="child.children"/>
        </ul>
    </li>  

</template>

<script>

export default {
    name: 'DropdownItem',
    props: {
        menuItemId: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: ""
        },
        command: {
            type: Function,
            default: () => { console.log('default function called'); }
        },
        children: {
            type: Array,
            default: () => { return []; }
        }
    },
    data: function(){
        return {
            menuItemIdData: this.menuItemId,
            labelData: this.label,
            iconData: this.icon + " dropdown-item-icon",
            commandData: this.command,
            childrenData: this.children,
            displayChildData: false
        }
    },
    methods: {
        displayChild: function(){
            var arrow = document.getElementById('arrow-' + this.menuItemIdData).classList;

            arrow.remove('rotate-up');
            arrow.add('rotate-down');

            document.getElementById('dropdown-submenu-' + this.menuItemIdData).style.opacity = '1';

        },
        hideChild: function(){
            var arrow = document.getElementById('arrow-' + this.menuItemIdData).classList;

            arrow.add('rotate-up');
            arrow.remove('rotate-down');

            document.getElementById('dropdown-submenu-' + this.menuItemIdData).style.opacity = '0';

        }
    },
    emits: ['itemSelected', 'childToggled']
}

</script>

<style>

.rotate-down {
    -webkit-animation:rotate-down 0.25s ease-out forwards;
    -moz-animation:rotate-down 0.25s ease-out forwards;
    animation:rotate-down 0.25s ease-out forwards;
    

}

.rotate-up {
    -webkit-animation:rotate-up 0.25s ease-out forwards;
    -moz-animation:rotate-up 0.25s ease-out forwards;
    animation:rotate-up 0.25s ease-out forwards;
    

}

/* rotate arrow down */

@-moz-keyframes rotate-down { 
    from {
        -moz-transform: rotate(0deg);
    }    
    to {
        -moz-transform: rotate(90deg);
    }
}

@-webkit-keyframes rotate-down { 
    from {
        -webkit-transform: rotate(0deg);
    }    
    to {
        -webkit-transform: rotate(90deg);
    }
}

@keyframes rotate-down { 
    from {
        transform: rotate(0deg);
    }    
    to {
        transform: rotate(90deg);
    }
}

/* rotate arrow up */

@-moz-keyframes rotate-up { 
    from {
        -moz-transform: rotate(90deg);
    }    
    to {
        -moz-transform: rotate(0deg);
    }
}

@-webkit-keyframes rotate-up { 
    from {
        -webkit-transform: rotate(90deg);
    }    
    to {
        -webkit-transform: rotate(0deg);
    }
}

@keyframes rotate-up { 
    from {
        transform: rotate(90deg);
    }    
    to {
        transform: rotate(0deg);
    }
}

</style>