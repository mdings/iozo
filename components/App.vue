<template>
    <main>
        <TopBar></TopBar>
        <Sounds></Sounds>
        <BottomBar></BottomBar>
    </main>
</template>

<script>

    import TopBar from './TopBar.vue'
    import Sounds from './Sounds.vue'
    import BottomBar from './BottomBar.vue'

    export default {

        components: {

            TopBar,
            Sounds,
            BottomBar
        }

    }

</script>

<style>
    
    *,
    *:before,
    *:after {

        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        -webkit-user-select: none;
    }

    body {

        font-family: system,-apple-system,".SFNSDisplay-Regular","Helvetica Neue",Helvetica,"Segoe UI",sans-serif;
    }

    body, 
    #app,
    main {

        height: 100vh;
    }

    main {

        display: flex;
        flex-direction: column;
    }
</style>