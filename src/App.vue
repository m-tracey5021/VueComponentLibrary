<template>

    <div class="grid grid-cols-3 gap-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <Dropdown :items="items">

        </Dropdown>
        
    </div>
     
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
