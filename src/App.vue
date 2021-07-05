<template>
    
    <div class="flex flex-row w-64 h-64 border shadow">
        <TieredDropdown :items="items"/>
    </div>
    <div class="flex flex-row w-64 h-64 border shadow">
        <Button text="Button"/>
    </div>
    
        
</template>

<script>

import TieredDropdown from './components/TieredDropdown';
import Button from './components/Button';

export default {
    name: 'App',
    components: {
        TieredDropdown,
        Button
    },
    props: {

    },
    data: function(){
        return {
            items: [
                { label: "Alignment", icon: "fas fa-align-center", children: [
                    { label: "Left" },
                    { label: "Center" },
                    { label: "Right" }
                ]},
                { label: "Notifications", icon: "far fa-bell", children: [
                    { label: "Date Format", icon: "far fa-calendar", children: [
                        { label: "DD-MM-YYYY (NZ)" },
                        { label: "MM-DD-YYYY (US)" },
                    ]},
                    { label: "Mode", icon: "far fa-envelope", children: [
                        { label: "Email" },
                        { label: "Text" }
                    ]}
                ]},
                { label: "Reset" } 
            ]
        }
    }
}

</script>

<style lang="scss">



</style>
