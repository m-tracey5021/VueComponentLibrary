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
                { label: "First", children: [
                    { label: "First-First" },
                    { label: "First-Second" }
                ]},
                { label: "Second", children: [
                    { label: "Second-First", children: [
                        { label: "Second-First-First" },
                        { label: "Second-First-Second" },
                    ]},
                    { label: "Second-Second", children: [
                        { label: "Second-Second-First" },
                        { label: "Second-Second-Second" }
                    ]}
                ]},
                { label: "Third" } 
            ]
        }
    }
}

</script>

<style lang="scss">



</style>
