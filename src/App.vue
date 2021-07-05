<template>
    
        <Dropdown :items="items"/>
        
</template>

<script>

import Dropdown from './components/Dropdown';

export default {
    name: 'App',
    components: {
        Dropdown
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
