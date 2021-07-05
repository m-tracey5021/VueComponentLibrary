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
        <!-- <ul v-if="displayChildData" class="dropdown-submenu">
            <DropdownItem v-for="(child, index) in childrenData" :key="child" :menuItemId="menuItemIdData + '-' + index" :label="child.label" :icon="child.icon" :command="child.command" :children="child.children"/>
        </ul> -->
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
        // debugger;
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
        triggerCommand: function(){
            this.$emit('itemSelected');
            this.commandData();
        },
        toggleChild: function(){
            
            var arrow = document.getElementById(this.menuItemIdData).classList;
            if (arrow.contains('rotate-down')){
                arrow.remove('rotate-down');
                arrow.add('rotate-up');
            }else{
                arrow.remove('rotate-up');
                arrow.add('rotate-down');
            }
            this.displayChildData = !this.displayChildData;
            this.$emit('childToggled');
        },
        displayChild: function(){
            // debugger;
            var arrow = document.getElementById('arrow-' + this.menuItemIdData).classList;

            arrow.remove('rotate-up');
            arrow.add('rotate-down');
            // var submenu = document.getElementById('dropdown-submenu-' + this.menuItemIdData);
            // var submenuWrapper = document.getElementById('dropdown-submenu-wrapper-' + this.menuItemIdData);
            // var expandedHeight = submenu.clientHeight + 15;
            // submenuWrapper.style.height = expandedHeight + 'px';
            // this.displayChildData = true;

            document.getElementById('dropdown-submenu-' + this.menuItemIdData).style.opacity = '1';

        },
        hideChild: function(){
            // debugger;
            var arrow = document.getElementById('arrow-' + this.menuItemIdData).classList;

            arrow.add('rotate-up');
            arrow.remove('rotate-down');
            // var submenuWrapper = document.getElementById('dropdown-submenu-wrapper-' + this.menuItemIdData);
            // submenuWrapper.style.height = 0;

            document.getElementById('dropdown-submenu-' + this.menuItemIdData).style.opacity = '0';

            // this.displayChildData = false;
        },
        expandSubmenu: function(){
            // debugger;
            var submenuWrapper = document.getElementById('dropdown-submenu-wrapper');
            if (submenuWrapper.clientHeight){
                submenuWrapper.style.height = 0;
            }else{
                var submenu = document.getElementById('dropdown-submenu');
                var expandedHeight = submenu.clientHeight + 15;
                submenuWrapper.style.height = expandedHeight + 'px';
            }
        }
    },
    emits: ['itemSelected', 'childToggled']
}

</script>

<style>

.item-icon {
    padding-right: 5px;
    margin-bottom: 5px;
}

.item-label {
    white-space: nowrap;
}

.item-content { /* flex flex-row justify-evenly items-center mr-10 */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* width: calc(100% + 20px); */
    margin-right: 10px;
}



.mt-dropdown-item { /* flex flex-row justify-between items-center p-10 cursor-pointer */
    cursor: pointer;
    /* border-bottom: 1px solid #c2c2c2; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.mt-dropdown-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.mt-dropdown-submenu-toggle {
    position: relative;
    /* min-width: 200px;    */
}

.mt-dropdown-submenu-toggle .mt-dropdown-submenu {
    position: absolute;
    top: -1px;
    left: calc(100% + 2px);
    list-style-type: none;
    margin: 2, 2, 2, 2;
    padding: 0;
    border: 1px solid rgba(106, 106, 106, 0.3);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

}

.collapsed {
    -moz-transition: height .25s;
    -webkit-transition: height .25s;
    transition: height .25s;
    height: 0;
    overflow: hidden;
}

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


/* .mt-dropdown .mt-dropdown-submenu {
    position: absolute;
    top: calc(100% + 5px);
    left: calc(100% + 5px);
    list-style-type: none;
    margin: 2, 2, 2, 2;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
} */

/* .mt-dropdown-submenu .mt-dropdown-submenu {
    position: absolute;
    top: calc(100% + 5px);
    left: calc(100% + 5px);
    list-style-type: none;
    margin: 2, 2, 2, 2;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}    */

</style>