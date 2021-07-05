<template>

    <button id="button" class="btn" type="button"  v-on:click="pressed">
        {{ textData }}
    </button>

</template>

<script>

export default {
    name: 'Button',
    components: {
        
    },
    props: {
        text: {
            type: String,
            default: "Select option"
        },
        command: {
            type: Function,
            default: () => { return; }
        }
    },
    data: function(){
        return {
            textData: this.text,
            commandData: this.command
        }
    },
    methods: {
        pressed: function(){
            var button = document.getElementById('button');
            button.addEventListener('animationend', function(){document.getElementById('button').classList.remove('ping');}, false);
            document.getElementById('button').classList.add('ping');
            this.commandData();
        },
    }
}

</script>

<style>

.ping {
    animation: ping 1s ease-out;
}

@keyframes ping {
    75%, 100% {
        transform: scale(2);
        opacity: 0;
    }
}

</style>