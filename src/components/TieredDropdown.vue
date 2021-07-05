<template>

    <div class="dropdown-container">
        <button class="btn" v-on:click="toggleDropdown">
            {{ textData }}
        </button>
        <ul v-if="displayDropdownData" class="dropdown">
            <DropdownItem v-for="(item, index) in itemData" :key="item" :menuItemId="'' + index" :label="item.label" :icon="item.icon" :command="item.command" :children="item.children"/>
        </ul>
    </div>

</template>

<script>

import DropdownItem from './DropdownItem';

export default {
    name: 'TieredDropdown',
    components: {
        DropdownItem
    },
    props: {
        text: {
            type: String,
            default: "Select option"
        },
        items: {
            type: Array,
            required: true
        }
    },
    data: function(){
        return {
            textData: this.text,
            itemData: this.items,
            displayDropdownData: false
            
        }
    },
    methods: {
        toggleDropdown: function(){
            this.displayDropdownData = !this.displayDropdownData;
        },
    }
}

</script>

<style>

</style>